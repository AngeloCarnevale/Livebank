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

    
    @action(methods=['POST'], detail=False) # Quando for action para o endpoint e não recurso específico: detail=False
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
        
        
    @action(methods=['POST'], detail=False) # Quando for action para o endpoint e não recurso específico: detail=False
    def login(self, request): 
        """ Make a user login and generate a JWT token

        Args:
            request (Request): Http request

        Raises:
            AuthenticationFailed: if don't found the user in database
            AuthenticationFailed: if the password is wrong

        Returns:
            Response: response with jwt token and user data
        """
        
        email = request.data['email']
        password = request.data['password']
        
        user = UserModel.objects.filter(email=email).first()
        
        if user is None:
            raise AuthenticationFailed('User not found')
        
        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect password')
        
        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
        }
        
        token = jwt.encode(payload, 'secret', algorithm='HS256')
        response = Response()
    
        
        response.set_cookie(key='token', value=token)
        response.data = {
            'token': token,
            'data': {
                'email': user.email,
                'name': user.name
            }
        }
        
        return response
    
    @action(methods=['GET'], detail=False)
    def user(self, request):
        """Get Authenticated user

        Raises:
            AuthenticationFailed: if the user don't have a token
            AuthenticationFailed: if the token expires

        Returns:
            Response: returns the authenticated user data
        """
        
        token = request.COOKIES.get('jwt')
        
        if not token:
            raise AuthenticationFailed("Unauthenticated")
        
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
            
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unaunthenticated')
        
        user = UserModel.objects.filter(id=payload['id']).first()
        serializer = UserSerializer(user)
            
        return Response(serializer.data)
       
    @action(methods=['POST'], detail=False)
    def logout(self, request):
        response = Response()
        response.delete_cookie('jwt')
        
        response.data = {
            'message': 'success'
        }
        return response
    