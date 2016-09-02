from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from blog.models import Post

# Create your views here.
def post(request):
    return render(request, 'myblog_static.html', {})

def page(request, page_number):
    posts_per_page = 5
    post_count = Post.objects.count()
    page_count = int(post_count) / int(posts_per_page)
    if page_number > page_count:
        page_number = page_count
    page_start = posts_per_page*(page_number-1)
    if page_number == page_count:
        page_end = post_count - posts_per_page*(page_number-1)
    else:
        page_end = posts_per_page*(page_number)
    posts = Post.objects.order_by('-date')[page_start:page_end]
    response_data = []
    for post in posts:
        response_data.append({'title': post.title, 'content': post.content, 'date': post.date})
    return JsonResponse(response_data, safe=False)