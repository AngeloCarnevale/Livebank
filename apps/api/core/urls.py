from django.urls import path, include
from rest_framework import routers
from authentication.api.viewsets import UserViewSet
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


router = routers.DefaultRouter()

router.register('auth', viewset=UserViewSet, basename='User')

urlpatterns = [
    path('', include(router.urls)),
    path('auth/login', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]