from pebble.core.transcribe import transcribe_large
from pebble.core.questions import generate, generate_with_answer, generateFill
from pebble.core.summarize import tf_summarize, bert_summarize

def analyze(video):
    transcription = transcribe_large(video) # transcribe video
    summary = tf_summarize(transcription) # generate script
    questions = generateFill(bert_summarize(transcription)) # generate questions

    return (transcription, summary, questions)