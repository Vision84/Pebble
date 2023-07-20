import json
from time import time

def updateDB(framework, title):
    current_time = int(time() * 1000)

    with open("db.json", "r") as file:
        content = json.load(file)

    frameworks = content["frameworks"]
    last_id = frameworks[-1]["id"]

    new = {
        "id": last_id + 1,
        "date_created": current_time,
        "title": title,
        "url": "",
        "value": json.loads(framework)
    }

    frameworks.append(new)

    content["frameworks"] = frameworks

    with open("db.json", "w") as jsonFile:
        json.dump(content, jsonFile)

    return new