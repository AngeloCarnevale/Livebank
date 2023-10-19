from django.db import models
from django.contrib.auth.models import AbstractUser


class UserModel(AbstractUser):
    
    name = models.CharField(max_length=150)
    email = models.EmailField(max_length=150, unique=True)
    password = models.CharField(max_length=100)
    username = None
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    