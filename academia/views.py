from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def academia(request):
    return render(request, 'academia/academia.html', {})