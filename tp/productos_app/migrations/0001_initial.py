# Generated by Django 4.2.3 on 2023-07-09 22:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='producto',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('tipo', models.CharField(max_length=20)),
                ('nombre', models.CharField(max_length=50, verbose_name='Nombre')),
                ('descripcion', models.CharField(max_length=200, verbose_name='Descripción')),
                ('precio', models.FloatField(blank=True, null=True, verbose_name='Precio')),
                ('imagen', models.ImageField(blank=True, null=True, upload_to='imagenes', verbose_name='Imagen')),
            ],
            options={
                'db_table': 'producto_tabla_django',
            },
        ),
    ]
