from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.core import serializers
from django.views.decorators.csrf import csrf_exempt

from .models import *

import json

def index(request):
    return HttpResponse("<h1>Index</h1>")

@csrf_exempt
def apiCreateUser(request):
    if request.method == "POST":
        body = json.loads(request.body.decode('utf-8'))
        uid = body.get("uid")

        try:
            u = User(uid=uid)
            u.save()

            return JsonResponse({"success": "OK"})
        
        except Exception as e:
            return JsonResponse({"error": "Unknown Error Occurred"})
    
    else:
        return JsonResponse({"error": f"This API does not accept {request.method} requests."})

@csrf_exempt
def apiGetLessons(request):
    if request.method == "GET":
        lessons = Lesson.objects.all().order_by('-timestamp').values()
        serialized = json.loads(serializers.serialize("json", lessons))

        return JsonResponse({"lessons": serialized})
    else:
        return JsonResponse({"error": f"This API does not accept {request.method} requests."})