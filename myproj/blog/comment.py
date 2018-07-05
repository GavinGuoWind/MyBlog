# coding=UTF-8


#添加评论
import json

from django.shortcuts import render
from django.views.decorators.http import require_POST
from blog.models import Comment,BlogsPost;


@require_POST
def comment(request):
    params = json.loads(request.body.decode());
    comment = Comment(text = params["text"], content = BlogsPost(id = params["content"]))
    Comment.save(comment);
    blog = BlogsPost.objects.get(id=params["content"]);
    return render(request, 'detail.html', {'blog': blog})