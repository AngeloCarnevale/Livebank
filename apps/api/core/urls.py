from django.urls import path, include
from rest_framework import routers
from authentication.api.viewsets import UserViewSet
from bank_operations.api.viewsets import AccountViewSet, AddressViewSet, ContactsViewSet
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


router = routers.DefaultRouter()

router.register(r'auth', viewset=UserViewSet, basename='User')
router.register(r'account', viewset=AccountViewSet, basename='Account')
router.register(r'address', viewset=AddressViewSet, basename='Addres')
router.register(r'contacts', viewset=ContactsViewSet, basename='Contacts')


urlpatterns = [
    path('', include(router.urls)),
    path('auth/login', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]