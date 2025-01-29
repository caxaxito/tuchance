from .models import Estudiante
from .serializers import EstudianteSerializer
from rest_framework import generics, authentication, permissions

# Create your views here.
class EstudianteCreateView(generics.CreateAPIView):
    queryset = Estudiante.objects.all()
    serializer_class = EstudianteSerializer
    authentication_classes = [authentication.BasicAuthentication]
    permission_classes = [permissions.IsAuthenticated]

class EstudianteListView(generics.ListAPIView):
    
    serializer_class = EstudianteSerializer
   
    def get_queryset(self):
        grado = self.request.query_params.get('grado')
        if grado:
            return Estudiante.objects.filter(grado=grado)
        return Estudiante.objects.all()
    
class EstudianteIdGradoListView(generics.ListAPIView):
    serializer_class = EstudianteSerializer
    def get_queryset(self):
        id = self.kwargs['id']
        return Estudiante.objects.filter(grado=id)
        