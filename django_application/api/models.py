from django.db import models

class User(models.Model):
    uid = models.CharField(max_length=100)

class Lesson(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    uploader = models.ForeignKey("User", on_delete=models.SET_NULL, blank=True, null=True)

    timestamp = models.DateTimeField(auto_now=True)

    URL = models.URLField()