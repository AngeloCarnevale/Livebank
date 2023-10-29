from rest_framework.serializers import ModelSerializer
from authentication.models import UserModel
import random


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
        instance = self.Meta.model(**validate_data)
    
        if password is not None:
            instance.set_password(password)
            instance.save()
            return instance
        
        