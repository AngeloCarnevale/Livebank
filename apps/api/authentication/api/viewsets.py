from rest_framework.viewsets import ModelViewSet
from authentication.models import UserModel
from .serializers import UserSerializer
from rest_framework.decorators import action, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
import jwt, datetime


class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    queryset = UserModel.objects.all()

    
    @action(methods=['POST'], detail=False)
    def register(self, request):
        """ Register a new user

        Args:
            request (Request): Http request

        Returns:
            Response: Serialized user data
        """
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return serializer.data

        else:
            return Response({"data": serializer})
    