from django.urls import path

from . import views

urlpatterns = [
    path('academia/', views.academia, name='academia'),
]