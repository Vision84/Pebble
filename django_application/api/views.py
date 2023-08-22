from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers

from .models import *

def index(request):
    return HttpResponse("<h1>Index</h1>")

def apiGetLessons(request):
    lessons = Lesson.objects.all().order_by('-timestamp').values()

    return serializers.serialize("json", lessons)