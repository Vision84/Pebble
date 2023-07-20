from pebble.generation.clip import generateClip

import os

from moviepy.editor import *

def generateVideo(framework):
    os.chdir('static')
    os.chdir("mp4")

    clips = []

    for idx, sentence in enumerate(framework["value"]["sentences"]):
        generateClip(sentence, framework["value"]["images"][idx], title=idx)

        clips.append(f"{idx}.mp4")

    files = [VideoFileClip(clip) for clip in clips]

    final = concatenate_videoclips(files)

    final.write_videofile(f"lesson-{framework['id']}.mp4")

    for clip in clips:
        os.remove(clip)
    
    os.chdir("..")
    os.chdir("..")

    return f"lesson-{framework['id']}.mp4"

def uploadVideo(video="output.mp4"):
    pass