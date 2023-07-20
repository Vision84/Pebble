from haystack.nodes import QuestionGenerator, FARMReader
from haystack.schema import Document
from haystack.pipelines import QuestionAnswerGenerationPipeline

from pebble.core.summarize import bert_summarize
from pebble.core.keywords import generateKeywords

import json

import requests

word_site = "https://www.mit.edu/~ecprice/wordlist.10000"

response = requests.get(word_site)
WORDS = response.content.splitlines() # get list of words from MIT

import random

def generate(text): # generate just multiple choice questions from text
    question_generator = QuestionGenerator(model_name_or_path="valhalla/t5-base-e2e-qg")
    questions = question_generator.generate(text)

    return questions

def generate_with_answer(text): # generate multiple choice questions with correct answer from text
    text = bert_summarize(text) # use more concise summarization method on original transcript

    doc = Document(content=text)

    question_generator = QuestionGenerator(model_name_or_path="valhalla/t5-base-e2e-qg")
    reader = FARMReader("deepset/roberta-base-squad2")
    qag_pipeline = QuestionAnswerGenerationPipeline(question_generator, reader)
    results = qag_pipeline.run(documents=[doc]) # run question answer generation on the text

    qs = []

    for count, query in enumerate(results["queries"]):
        qs.append({"question": query, "answer": results['answers'][count][0].answer})

    return qs

def generateFill(string): # generate fill in the blank questions with correct answer and wrong answers from text
    output = []

    sentenceList = string.split(". ")

    for sentence in sentenceList: # for each sentence make a question if keyword exists
        answers = []

        the_keyword = generateKeywords(sentence)[0].lower()
        lowercaseSentence = sentence.lower()

        if the_keyword in lowercaseSentence: # keyword function typically returns lowercase, so do a case insensitive comparison
            start = lowercaseSentence.find(the_keyword)

            fill = "_____"
            sentence = fill.join([sentence[:start], sentence[start+len(the_keyword):]]) # replace correct answer in original sentence with a blank

            if sentence[-1] != ".":
                sentence += "."

            answers.append(the_keyword)

            for _ in range(3):
                answers.append(random.choice(WORDS).decode()) # get 3 random words as wrong answers

            random.shuffle(answers)
            idx = answers.index(the_keyword) # get index of correct answer

            output.append({"question": sentence, "answers": answers, "correct": idx+1})

    return output