from django.db import models
from django.contrib.auth.models import AbstractUser
from uuid import uuid4


def upload_image_profile(instance, filename):
    return f"{uuid4}-{filename}"

class UserModel(AbstractUser):
    name = models.CharField(max_length=150)
    email = models.EmailField(max_length=150, unique=True)
    password = models.CharField(max_length=100)
    username = None
    image = models.ImageField(upload_to=upload_image_profile, blank=True, null=True)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    
    def __str__(self) -> str:
        return self.name
    