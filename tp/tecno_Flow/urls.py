"""
URL configuration for tecno_Flow project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
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
from django.urls import path, include


from .views import Index, Preg_frec, Sucursales, Contacto, ListadoSucursales, Notebooks, Gracias, Impresoras, Monitores, Productos, Promociones, ProductosCeluMoto, ProductosCeluSamsung, Tablets

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',Index.as_view(),name='index'),
    path('preg_frec/',Preg_frec.as_view(),name='preg_frec'),
    path('sucursales/',Sucursales.as_view(),name='sucursales'),
    path('contacto/',Contacto.as_view(),name='contacto'),
    path('listadosucursales/',ListadoSucursales.as_view(),name='listadosucursales'),
    path('notebooks/',Notebooks.as_view(),name='notebooks'),
    path('gracias/',Gracias.as_view(),name='gracias'),
    path('impresoras/',Impresoras.as_view(),name='impresoras'),
    path('monitores/',Monitores.as_view(),name='monitores'),
    path('productos/',Productos.as_view(),name='productos'),
    path('promociones/',Promociones.as_view(),name='promociones'),
    path('productoscelumoto/',ProductosCeluMoto.as_view(),name='productoscelumoto'),
    path('productoscelusamsung/',ProductosCeluSamsung.as_view(),name='productoscelusamsung'),
    path('tablets/',Tablets.as_view(),name='tablets'),
    path('crudproductos/',include("productos_app.urls"))
]

