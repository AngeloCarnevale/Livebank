from django.urls import path, include
from rest_framework import routers
from authentication.api.viewsets import UserViewSet


router = routers.DefaultRouter()

router.register('auth', viewset=UserViewSet, basename='User')

urlpatterns = [
    path('', include(router.urls))
]
