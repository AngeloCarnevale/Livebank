from bank_operations.models import Account, Address, Contacts
from .serializers import AccountSerializer, AddressSerializer, ContactsSerializer
from rest_framework import viewsets


class AccountViewSet(viewsets.ViewSet):
    serializer_class = AccountSerializer
    queryset = Account.objects.all()
    
class AddressViewSet(viewsets.ViewSet):
    serializer_class = AddressSerializer
    queryset = Address.objects.all()
    
class ContactsViewSet(viewsets.ViewSet):
    serializer_class = ContactsSerializer
    queryset = Contacts.objects.all()