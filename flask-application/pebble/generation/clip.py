from gtts import gTTS

import os
import shutil

import subprocess

import requests

from moviepy.editor import *

language = 'en'

def generateClip(text, image, title="output.mp4"): # create clips based on each sentence in the script
    audio = gTTS(text=text, lang=language, slow=False) # make audio

    shutil.copy("""D:\\Programming\\Python\\Pebble\\white.jpg""", """D:\\Programming\\Python\\Pebble\\static\\mp4\\white.jpg""")

    audio.save("audio.mp3")

    subprocess.run(f"""ffmpeg -loop 1 -framerate 1 -i white.jpg -i audio.mp3 -map 0:v -map 1:a -r 10 -vf "scale='iw-mod(iw,2)':'ih-mod(ih,2)',format=yuv420p" -movflags +faststart -shortest -fflags +shortest -max_interleave_delta 100M output.mp4""") # make a video with a white background with audio

    os.remove("audio.mp3")
    os.remove("white.jpg") # clean temp files

    if image:
        url = image
        filename = url.split('/')[-1]
        r = requests.get(url, allow_redirects=True)
        open(filename, 'wb').write(r.content)

        video = VideoFileClip("output.mp4")
        img = ImageClip(filename).set_start(0).set_duration(video.duration).set_position(("center", "center")) # overlay relevant image on video

        final = CompositeVideoClip([video, img])
        final.write_videofile(f"{title}.mp4")

        os.remove("output.mp4")
        os.remove(f"{filename}") # clean up

    else:
        os.rename("output.mp4", f"{title}.mp4")

    return True