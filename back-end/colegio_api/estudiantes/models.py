from django.db import models

# Create your models here.
class Estudiante(models.Model):
    nombre = models.CharField(max_length=50)
    fecha_nacimiento = models.DateField()
    nombredelpadre = models.CharField(max_length=50)
    nombredelamadre = models.CharField(max_length=50)
    grado = models.IntegerField()
    seccion = models.CharField(max_length=50)
    fechaingreso = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nombre
