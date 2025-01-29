from django.urls import path
from .views import EstudianteCreateView, EstudianteListView, EstudianteIdGradoListView

urlpatterns = [
    path('crear-alumno/', EstudianteCreateView.as_view(), name='estudiante-create'),
    path('listar-alumnos/', EstudianteListView.as_view(), name='estudiante-list'),
    path('consultar-alumno/<int:id>/', EstudianteIdGradoListView.as_view(), name='estudiante-list-grado'),
]