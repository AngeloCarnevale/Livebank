from bank_operations.models import Account, Address, Contacts
from .serializers import AccountSerializer, AddressSerializer, ContactsSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response


class AccountViewSet(ModelViewSet):
    serializer_class = AccountSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return Account.objects.all()
    
    def create(self, request, *args, **kwargs):
        account = AccountSerializer(data=request.data)
        
        if account.is_valid(raise_exception=True):
            account.account_number = request.user.id
            account.save()
        return Response("Success")
    
class AddressViewSet(ModelViewSet):
    serializer_class = AddressSerializer
    queryset = Address.objects.all()
    permission_classes = [IsAuthenticated]
    
class ContactsViewSet(ModelViewSet):
    serializer_class = ContactsSerializer
    queryset = Contacts.objects.all()
    permission_classes = [IsAuthenticated]