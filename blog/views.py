from django.shortcuts import render
from django.http import HttpResponse


def home(request):
    return HttpResponse("Hello, world. You're at the blog index.")

def view_by_year(request):
    return HttpResponse("Hello, this is all of the years' blogs.")


