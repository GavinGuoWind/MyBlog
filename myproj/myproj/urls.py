"""myproj URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include
from django.urls import path
from django.views.generic import RedirectView
from django.views.generic import TemplateView

from blog import views
from blog import comment
from blog.controller import blogsPostController

urlpatterns = [
    path('admin/', admin.site.urls),
    path('blog/', views.blog_index),
    # 定义默认访问路由，表示输入任意url路径
    # path('', RedirectView.as_view(url='blog/')),
    path(r'', TemplateView.as_view(template_name="index.html")),
    path('ckeditor/', include('ckeditor_uploader.urls')),
    path('blogsPost/blogsPost/<int:id>/', blogsPostController.blogsPost),
    path(r'comment/', comment.comment),
    path(r'blogsPost/blogsPosts', blogsPostController.blogsPosts),
]
