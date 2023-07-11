from django.contrib import admin
from .models import producto

# Register your models here.

@admin.register(producto)
class ProductosAdmin(admin.ModelAdmin):
    ...