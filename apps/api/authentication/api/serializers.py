from rest_framework.serializers import ModelSerializer
from authentication.models import UserModel
from rest_framework.response import Response



class UserSerializer(ModelSerializer):
    class Meta:
        model = UserModel
        fields = ('id', 'email', 'password')
        extra_kwargs = {
            'password': {'write_only': True}
        }
    
    # Hash password
    def create(self, validate_data):
        password = validate_data.pop('password', None)
        email = validate_data.pop('email', None)
        instance = self.Meta.model(**validate_data)
        
        if password is not None:
            if len(password) < 6:
                return Response("Error", email)
            else:
                instance.set_password(password)
        
        instance.save()
        return instance
        