from django.views.generic import TemplateView

class Index(TemplateView):
    template_name="pages/index.html"
class Preg_frec(TemplateView):
    template_name="pages/preg_Frec.html"
class Sucursales(TemplateView):
    template_name="pages/sucursales.html"
class Contacto(TemplateView):
    template_name="pages/contacto.html"
class ListadoSucursales(TemplateView):
    template_name="pages/listadoSucursales.html"
class Notebooks(TemplateView):
    template_name="pages/note.html"
class Gracias(TemplateView):
    template_name="pages/gracias.html"
class Impresoras(TemplateView):
    template_name="pages/impresoras.html"
class Monitores(TemplateView):
    template_name="pages/monitores.html"
class Productos(TemplateView):
    template_name="pages/productos.html"
class Promociones(TemplateView):
    template_name="pages/promociones.html"
class ProductosCeluMoto(TemplateView):
    template_name="pages/productosmoto.html"
class ProductosCeluSamsung(TemplateView):
    template_name="pages/productossamsung.html"
class Tablets(TemplateView):
    template_name="pages/tablets.html"