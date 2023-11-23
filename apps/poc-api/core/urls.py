from django.urls import path, include
from rest_framework import routers
from authentication.api.viewsets import UserViewSet
from bank_operations.api.viewsets import AccountViewSet,CardViewSet,  AddressViewSet, ContactsViewSet, TransactionViewSet, DepositViewSet
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from django.conf.urls.static import static
from django.conf import settings


router = routers.DefaultRouter()

router.register(r'auth', viewset=UserViewSet, basename='User')
router.register(r'account', viewset=AccountViewSet, basename='Account')
router.register(r'address', viewset=AddressViewSet)
router.register(r'contacts', viewset=ContactsViewSet)
router.register(r'transaction', viewset=TransactionViewSet)
router.register(r'deposit', viewset=DepositViewSet)
router.register(r'card', viewset=CardViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('auth/login', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path("schema/", SpectacularAPIView.as_view(), name="schema"),
    path(
        "docs/",
        SpectacularSwaggerView.as_view(
            template_name="swagger-ui.html", url_name="schema"
        ),
        name="swagger-ui",
    ),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)