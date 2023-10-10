from django.urls import path, include
from rest_framework import routers
from authentication.api.viewsets import UserViewSet
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView 


router = routers.DefaultRouter()

router.register('auth', viewset=UserViewSet)

urlpatterns = [
    path('', include(router.urls))
]
