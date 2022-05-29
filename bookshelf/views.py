from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def bookshelf(request):
    return render(request, 'bookshelf/bookshelf.html', {})
    
def add(request):
    return render(request, 'bookshelf/add.html', {})