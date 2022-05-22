from django.shortcuts import render
from django.http import HttpResponse


def home(request):
    return render(request, 'blog/home.html', {})

def blog(request):
    return render(request, 'blog/blog.html', {})

def bookshelf(request):
    return render(request, 'blog/bookshelf.html', {})

def academia(request):
    return render(request, 'blog/academia.html', {})