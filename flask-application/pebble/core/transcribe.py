import speech_recognition as sr
from pydub import AudioSegment
from pydub.silence import split_on_silence
import os
import shutil
from deepmultilingualpunctuation import PunctuationModel

def transcribe_small(lecture="input.mp4"): # transcribe small audio files
    video = AudioSegment.from_file(lecture, format="mp4")
    audio = video.set_channels(1).set_frame_rate(16000).set_sample_width(2) 
    audio.export("audio.wav", format="wav") # isolate audio

    r = sr.Recognizer()

    with sr.AudioFile("audio.wav") as source:
        audio_text = r.record(source)

    text = r.recognize_google(audio_text, language='en-US') # use google to transcribe

    return text

def transcribe_large(path="input.mp4"): # for files that cannot fit when sending audio to google
    video = AudioSegment.from_file(path, format="mp4")
    audio = video.set_channels(1).set_frame_rate(16000).set_sample_width(2)
    audio.export("audio.wav", format="wav") # isolate audio

    song = AudioSegment.from_wav("audio.wav")

    output = ""

    chunks = split_on_silence(song,
        min_silence_len = 500,
        silence_thresh = -40
    ) # threshold for silence and where to split the audio file
  
    try:
        os.mkdir('audio_chunks')
    except Exception as e:
        pass
  
    os.chdir('audio_chunks')
  
    i = 0

    for chunk in chunks:
        chunk_silent = AudioSegment.silent(duration = 500)

        audio_chunk = chunk_silent + chunk + chunk_silent # create chunks of audio that individually can fit in request to google servers
  
        print("saving chunk{0}.wav".format(i))

        audio_chunk.export("./chunk{0}.wav".format(i), bitrate ='192k', format ="wav")
  
        filename = 'chunk'+str(i)+'.wav'
    
        file = filename
  
        r = sr.Recognizer()
  
        with sr.AudioFile(file) as source:
            r.adjust_for_ambient_noise(source)
            audio_listened = r.listen(source)
  
        try:
            rec = r.recognize_google(audio_listened) # transcribe
            output += f"{rec}. "
  
        except sr.UnknownValueError:
            pass
  
        except sr.RequestError as e:
            print("Could not request results. check your internet connection")
  
        i += 1
  
    os.chdir('..')

    shutil.rmtree("./audio_chunks")
    os.remove("audio.wav") # clean temporary files

    p = PunctuationModel()

    output = p.restore_punctuation(output) # restore punctuation lost in transcription

    return output