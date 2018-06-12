# coding=UTF-8
from django.shortcuts import render
from blog.models import BlogsPost
import re;

# 需要转意的字符* . ? + $ ^ [ ] ( ) { } | \ /
# Create your views here.
def blog_index(request):
    blog_list = BlogsPost.objects.all()  # 获取所有数据
    reg = r'<img.+?src="(.+?)".*?/>'
    imreg = re.compile(reg)
    for blog in blog_list:
        content = blog.body;
        imglist = imreg.findall(content);
        blog.imglist = imglist;
        matches = re.search(reg, content)
        while matches is not None:
            content = content.replace(matches.group(0), "  ")
            matches = re.search(reg, content)
        blog.body = content if len(content) <32 else content[0:32] + "..."

    return render(request,'index.html', {'blog_list':blog_list})   # 返回index.html页面

def blog_detail(request, id):
    blog = BlogsPost.objects.get(id = id);
    return render(request, 'detail.html', {'blog':blog})
