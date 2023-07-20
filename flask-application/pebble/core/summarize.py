import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize, sent_tokenize
from summarizer import Summarizer, TransformerSummarizer

def tf_summarize(text): # tf-idf method to summarizing text
    nltk.download("stopwords")

    stopWords = set(stopwords.words("english"))
    words = word_tokenize(text)
    
    freqTable = dict()
    for word in words:
        word = word.lower()
        if word in stopWords:
            continue
        if word in freqTable:
            freqTable[word] += 1
        else:
            freqTable[word] = 1

    sentences = sent_tokenize(text)
    sentenceValue = dict()
    
    for sentence in sentences:
        for word, freq in freqTable.items():
            if word in sentence.lower():
                if sentence in sentenceValue:
                    sentenceValue[sentence] += freq
                else:
                    sentenceValue[sentence] = freq
    
    sumValues = 0
    for sentence in sentenceValue:
        sumValues += sentenceValue[sentence]
    
    average = int(sumValues / len(sentenceValue)) # get average value of phrases and sentences in the text
    
    summary = ''
    for sentence in sentences:
        if (sentence in sentenceValue) and (sentenceValue[sentence] > (1.4 * average)): # if the value of the sentence is greater than the threshold, use that sentence in the summary
            summary += " " + sentence

    return summary

def bert_summarize(text):
    model = TransformerSummarizer(transformer_type="XLNet",transformer_model_key="xlnet-base-cased") # BERT summarize, much more efficient
    summary = model(text)

    return summary