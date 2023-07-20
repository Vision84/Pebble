from pebble.main.analyze import analyze
from pebble.core.keywords import generateKeywords
from pebble.core.image import generateImage

import json

def generateFramework(lecture="lecture.mp4"): # generate script and additional information for frontend
    original, summary, questions = analyze(lecture)

    framework = {}

    sentences = [sentence for sentence in summary.split(". ")]

    framework['sentences'] = sentences
    framework['summary'] = summary

    keywords = [generateKeywords(sentence) for sentence in sentences]

    images = []

    for keyword in keywords:
        if keyword:
            images.append(generateImage(keyword)) # for each sentence's major keyword, get an image that represents it
        else:
            images.append("")

    framework['images'] = images
    framework['questions'] = questions
    framework['thumb'] = images[0] # since the main idea is typically talked about first, use the first image

    output = json.dumps(framework)

    return output