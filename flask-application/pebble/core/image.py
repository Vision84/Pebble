# GENERATE IMAGE GIVEN KEYWORD

from bing_image_urls import bing_image_urls

def generateImage(word):
    url = bing_image_urls(word, limit=1)[0] # search bing, get first image's url

    if "?" in url:
        url = url.split("?")[0] # remove any url arguments

    return url