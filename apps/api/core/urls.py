from django.urls import path, include
from rest_framework import routers
from authentication.api.viewsets import UserViewSet
from bank_operations.api.viewsets import AccountViewSet, AddressViewSet, ContactsViewSet
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


router = routers.DefaultRouter()

router.register(r'auth', viewset=UserViewSet, basename='User')
router.register(r'account', viewset=AccountViewSet)
router.register(r'address', viewset=AddressViewSet)
router.register(r'contacts', viewset=ContactsViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('auth/login', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]