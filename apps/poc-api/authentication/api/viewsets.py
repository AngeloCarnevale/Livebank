from rest_framework.viewsets import ModelViewSet
from authentication.models import UserModel
from .serializers import UserSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from bank_operations.models import Account, Card


class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    queryset = UserModel.objects.all()

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
            card = Card()
        
            account.account_number = id
            card.client = id
            
            account.save()
            card.save()
            return Response({"data": serializer.data})

        else:
            raise "Error to create new user"

    def list(self, request):
        queryset = self.queryset
        user = queryset.filter(id=self.request.user.id).first()
        return Response({
            "email":user.email, 
            "id":user.id, 
            "name":user.name,
            "image": str(user.image)
            })
    
