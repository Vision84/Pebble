from summa import keywords
from rake_nltk import Rake

def generateRAKE(text): # GENERATE KEYWORDS FROM TEXT USING THE RAKE METHOD
    r = Rake()

    r.extract_keywords_from_text(text)

    if r.get_ranked_phrases():
        return r.get_ranked_phrases()[0:1] # get first keyword
    else:
        return "Empty"

def generateKeywords(text): # GENERATE KEYWORDS FROM TEXT USING SUMMA
    TR_keywords = keywords.keywords(text, scores=True)

    if TR_keywords:
        return TR_keywords[0:1][0]
    else:
        return generateRAKE(text) # if TF-IDF cannot find keyword (common issue), use RAKE as backup