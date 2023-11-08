from rest_framework.viewsets import ModelViewSet
from authentication.models import UserModel
from .serializers import UserSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from bank_operations.models import Account


class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    queryset = UserModel.objects.all()
    permission_classes=[]

    @action(methods=["POST"], detail=False)
    def register(self, request):
        """Register a new user

        Args:
            request (Request): Http request

        Returns:
            Response: Serialized user data
        """
        
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            id = serializer.save()
            
            account = Account()
        
            account.account_number = id
            account.save()
            
            return Response({"data": serializer.data})

        else:
            raise "Error to create new user"

    @action(methods=["POST"], detail=False)
    def get(self, request):
        user = self.request.user

        return Response({"id": user.id, "name": user.name, "email": user.email})
