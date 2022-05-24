from django.urls import path

from . import views

urlpatterns = [
    path('home/', views.home, name='home'),
    path('blog/', views.blog, name='blog'),
    path('academia/', views.academia, name='academia'),
    path('bookshelf/', views.bookshelf, name='bookshelf'),
    path('add-book/', views.add, name='add_book')
]