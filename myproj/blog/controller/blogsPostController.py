# coding=UTF-8
import re
from django.core import serializers
from django.forms import model_to_dict
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.http import require_POST, require_GET

from blog.models import BlogsPost, Comment


@require_GET
def blogsPosts(request):
    blogsPosts = BlogsPost.objects.all();
    blogsPosts = list(blogsPosts.values());
    reg = r'<img.+?src="(.+?)".*?/>'
    imreg = re.compile(reg)
    for blog in blogsPosts:
        content = blog['body'];
        imglist = imreg.findall(content);
        blog['imglist'] = imglist;
        matches = re.search(reg, content)
        while matches is not None:
            content = content.replace(matches.group(0), "  ")
            matches = re.search(reg, content)
        blog['body'] = content if len(content) < 32 else content[0:32] + "..."
    return JsonResponse(blogsPosts, safe=False);


@require_GET
def blogsPost(request, id):
    blogsPost = BlogsPost.objects.get(id=id);
    comments = Comment.objects.filter(content_id=id);
    blogsPost = model_to_dict(blogsPost);
    comments = list(comments.values());
    data = {"blogsPost": blogsPost, "comments": comments};
    return JsonResponse(data);
