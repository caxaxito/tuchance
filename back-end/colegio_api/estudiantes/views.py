from .models import Estudiante
from .serializers import EstudianteSerializer
from rest_framework import generics, authentication, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token

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
    
class LogoutView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            # Eliminar el token del usuario
            request.auth.delete()
            return Response({"message": "Sesión cerrada correctamente"}, status=status.HTTP_200_OK)
        except:
            return Response({"error": "Algo salió mal"}, status=status.HTTP_400_BAD_REQUEST)
        