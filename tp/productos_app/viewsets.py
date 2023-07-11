from rest_framework.viewsets import ModelViewSet
from .models import producto
from .serializers import ProductoSerializer

class ProductoViewSet(ModelViewSet):
    queryset = producto.objects.all()
    serializer_class = ProductoSerializer