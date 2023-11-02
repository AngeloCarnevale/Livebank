from django.urls import path, include
from rest_framework.routers import DefaultRouter
from bank_operations.api.viewsets import AccountViewSet

router = DefaultRouter()
router.register('accounts', AccountViewSet)

app_name = 'bank_operations'

urlpatterns = [
    path('', include(router.urls))
]