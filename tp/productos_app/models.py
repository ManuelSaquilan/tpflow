from django.db import models

# Create your models here.

class producto(models.Model):
    id=models.AutoField(primary_key=True)
    tipo = models.CharField(max_length=20)
    nombre = models.CharField(max_length=50,verbose_name='Nombre')
    descripcion = models.CharField(max_length=200,verbose_name='Descripción')
    precio = models.FloatField(blank=True, null=True, verbose_name='Precio')
    imagen = models.ImageField(upload_to='', null=True, blank= True, verbose_name='Imagen')

    class Meta:
        db_table = "producto_tabla_django"

    def __str__(self):
        return f"El producto: {self.tipo} {self.nombre} sale {self.precio}"
    
    def get_fields(self):
        return [
            (field.verbose_name, field.value_from_object(self))
            for field in self.__class__._meta.fields[1:]
        ]
    
