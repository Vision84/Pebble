from django.contrib import admin
from django.urls import path
import views

urlpatterns = [
    path('/', views.index, name="index"),

    #api routes
    path('/api/v1/lessons/latest/get', views.apiGetLessons, name="apiGetLessons"),
    path('api/v1/users/create', views.apiCreateUserreateUser, name="apiCreateUser"),
]