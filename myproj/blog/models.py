# coding=UTF-8
from django.db import models
from ckeditor.fields import RichTextField
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.
class Category(models.Model):
    createDate = models.DateTimeField(default=timezone.now)
    updateDate = models.DateTimeField(default=timezone.now)
    name = models.CharField(max_length = 255, default="")
    parentId = models.IntegerField(null=True)

class Tag(models.Model):
    createDate = models.DateTimeField(default=timezone.now)
    updateDate = models.DateTimeField(default=timezone.now)
    name = models.CharField(max_length = 255, default="")

class BlogsPost(models.Model):
    createDate = models.DateTimeField(default=timezone.now)
    updateDate = models.DateTimeField(default=timezone.now)
    status = models.IntegerField(default=1)
    voteUp = models.IntegerField(default=0)
    voteDown = models.IntegerField(default=0)
    commentCount = models.IntegerField(default=0)
    commentDate = models.DateTimeField(null=True)
    viewCount = models.IntegerField(default=0)
    keyWords = models.CharField(max_length = 255, null=True)
    category = models.ForeignKey(Category, on_delete=None, null=True)
    tag = models.ForeignKey(Tag, on_delete=None, null=True)
    user = models.ForeignKey(User, on_delete=None, null=True)
    title = models.CharField(max_length = 150, null=True)  # 博客标题
    body = RichTextField(blank=True, null=True)                   # 博客正文


class Comment(models.Model):
    createDate = models.DateTimeField(default=timezone.now)
    updateDate = models.DateTimeField(default=timezone.now)
    parentId = models.IntegerField(null=True)
    content = models.ForeignKey(BlogsPost, on_delete=None, null=True)
    userId = models.IntegerField(null=True)
    ip = models.CharField(max_length = 255, null=True)
    text = models.TextField(null=True)
    status = models.IntegerField(default=1)
    voteUp = models.IntegerField(default=0)
    voteDown = models.IntegerField(default=0)

# class Reply(models.Model):
#     createDate = models.DateTimeField(default=timezone.now)
#     updateDate = models.DateTimeField(default=timezone.now)
#     commentId = models.IntegerField(null=True)
#     replyId = models.IntegerField(null=True)
#     replyType = models.IntegerField(null=True)
#     content = models.TextField(null=True)

