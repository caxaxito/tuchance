from django.urls import path
from .views import EstudianteCreateView, EstudianteListView, EstudianteIdGradoListView, LogoutView
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('crear-alumno/', EstudianteCreateView.as_view(), name='estudiante-create'),
    path('listar-alumnos/', EstudianteListView.as_view(), name='estudiante-list'),
    path('consultar-alumno/<int:id>/', EstudianteIdGradoListView.as_view(), name='estudiante-list-grado'),
    path('obtener/token/', obtain_auth_token, name='api_token_auth'),
    path('logout/', LogoutView.as_view(), name='logout'),
]