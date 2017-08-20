from django.shortcuts import render
from django.http import JsonResponse
from blog.models import Post

total_posts = 0
total_pages = 1
posts_per_page = 6

# Create your views here.
def post(request):
    return render(request, 'myblog_static.html', {})

def article(request, article_number):
    post = Post.objects.get(id=article_number)
    response_data = {'id': post.id, 'title': post.title, 'date': post.date, 'content': post.content}
    return JsonResponse(response_data)

def page(request, page_number):
    total_posts = Post.objects.count()
    total_pages = int(int(total_posts)/int(posts_per_page)) + 1
    page_number = int(page_number)
    if page_number > total_pages:
        page_number = total_pages
    page_start = posts_per_page*(page_number-1)
    if page_number == total_pages:
        page_end = total_posts
    else:
        page_end = posts_per_page*(page_number)
    posts = Post.objects.order_by('-date')[page_start:page_end]
    response_data = []
    for post in posts:
        response_data.append({'id': post.id, 'title': post.title, 'date': post.date, 'content': post.content})
    return JsonResponse(response_data, safe=False)