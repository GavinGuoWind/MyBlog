from django.contrib import admin
from blog.models import BlogsPost, Category, Comment, Tag


# Register your models here.
class BlogsPostAdmin(admin.ModelAdmin):
    list_display = ['title', 'body', 'createDate']
class TagAdmin(admin.ModelAdmin):
    list_display = ['name', 'createDate']
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'createDate']
class CommentAdmin(admin.ModelAdmin):
    list_display = ['content', 'createDate']


admin.site.register(BlogsPost, BlogsPostAdmin)
admin.site.register(Tag, TagAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Comment, CommentAdmin)
