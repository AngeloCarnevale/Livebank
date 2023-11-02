from bank_operations.models import Account, Address, Contacts
from .serializers import AccountSerializer, AddressSerializer, ContactsSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated


class AccountViewSet(ModelViewSet):
    serializer_class = AccountSerializer
    queryset = Account.objects.all()
    permission_classes = [IsAuthenticated]
    
class AddressViewSet(ModelViewSet):
    serializer_class = AddressSerializer
    queryset = Address.objects.all()
    
class ContactsViewSet(ModelViewSet):
    serializer_class = ContactsSerializer
    queryset = Contacts.objects.all()