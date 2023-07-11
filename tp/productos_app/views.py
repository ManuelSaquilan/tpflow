from django.shortcuts import render
from django.urls import reverse_lazy

from .models import producto

from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView


# Create your views here.

class ProductoBaseView():
    template_name = "productoscrud.html"
    model = producto
    fields = "__all__"
    success_url = reverse_lazy("productos:all")

class ProductoListView(ProductoBaseView,ListView):
    """
    Muestra todos los productos
    """

class ProductoDetailView(ProductoBaseView,DetailView):
    template_name = "productos_detail.html"

class ProductoCreateView(ProductoBaseView,CreateView):
    template_name = "productos_create.html"
    extra_context = {"titulo": "Crear producto"}

class ProductoUpdateView(ProductoBaseView,UpdateView):
    template_name = "productos_detail.html"
    extra_context = {"titulo": "Actualiza producto"}

class ProductoDeleteView(ProductoBaseView,DeleteView):
    template_name = "productos_delete.html"
    extra_context = {"titulo": "Borra producto"}