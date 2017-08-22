from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.post, name='post'),
    url(r'^(?P<page_number>\d+)/', views.page, name='page'),
    url(r'^article/(?P<article_number>\d+)/', views.article, name='article'),
    url(r'^news/', views.news, name='news'),
    url(r'^links/', views.links, name='links'),
]