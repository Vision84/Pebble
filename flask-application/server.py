from flask import Flask, flash, request, redirect, url_for, jsonify
from werkzeug.utils import secure_filename

from pebble.generation.framework import generateFramework
from pebble.generation.video import generateVideo
from pebble.main.db import updateDB

import os

import json

UPLOAD_FOLDER = '/'
ALLOWED_EXTENSIONS = {'mp4'}

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route("/", methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        
        file = request.files['file']
        title = request.form.get("title")

        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        
            framework = generateFramework(filename)
            new = updateDB(framework, title)
            video = generateVideo(new)

            with open("db.json", "r") as file:
                content = json.load(file)

            content["frameworks"][-1]["url"] = f"http://127.0.0.1:5000/static/mp4/{video}"

            with open("db.json", "w") as jsonFile:
                json.dump(content, jsonFile)

            return redirect(url_for('index'))
        
    return '''
    <!doctype html>
    <title>The Pebble Project</title>
    <p>The Pebble Project</p>
    <h1>Upload new File</h1>
    <form method=post enctype=multipart/form-data>
      <input type=file name="file">
      <input type=text name="title">
      <input type=submit value=Upload>
    </form>
    '''

@app.route("/api/v1/resources/content/latest", methods=["GET"])
def api_content_latest():
    with open("db.json", "r") as file:
        content = json.load(file)
    
    frameworks = content["frameworks"]
    frameworks = sorted(frameworks, key=lambda x: x["date_created"])
    frameworks.reverse()

    content["frameworks"] = frameworks

    return jsonify(content)