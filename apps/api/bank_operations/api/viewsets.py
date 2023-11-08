from bank_operations.models import Account, Address, Contacts, Transaction, Deposit
from .serializers import AccountSerializer, AddressSerializer, ContactsSerializer,TransactionSerializer, DepositSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.db import IntegrityError
import decimal


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
    
class TransactionViewSet(ModelViewSet):
    serializer_class = TransactionSerializer
    queryset = Transaction.objects.all()
    permission_classes = [IsAuthenticated]
    
    def create(self, request, *args, **kwargs):
        recipiente = Account.objects.get(pk = self.request.data['recipient'])
        sender = Account.objects.get(pk = self.request.data['sender'])


        recipiente.balance += decimal.Decimal(self.request.data['value'])
        sender.balance -= decimal.Decimal(self.request.data['value'])

        updateRecipient = {'balance':recipiente.balance, 'number':recipiente.number,'agency':recipiente.agency,'account_number': recipiente.account_number.pk}

        updateSender = {'balance':sender.balance, 'number':sender.number,'agency':sender.agency,'account_number': sender.account_number.pk}

        if updateSender.get("balance") < 0:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
         
        serializerSender = AccountSerializer(sender, data = updateSender)
        serializerRecipient = AccountSerializer(recipiente, data = updateRecipient)

        if serializerSender.is_valid() and serializerRecipient.is_valid():
            
            serializerSender.save()
            serializerRecipient.save()
            return super().create(request, *args, **kwargs)
        else:
            return Response(status=status.HTTP_417_EXPECTATION_FAILED)

class DepositViewSet(ModelViewSet):
    queryset = Deposit.objects.all()
    serializer_class = DepositSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        acc = Account.objects.get(pk = self.request.data['account'])

        acc.balance += decimal.Decimal(self.request.data['value'])

        updateAccount = {'balance':acc.balance, 'number':acc.number,'agency':acc.agency,'acount_number': acc.account_number.pk}

        serializerAcc = AccountSerializer(acc, data = updateAccount)

        if serializerAcc.is_valid():
            serializerAcc.save()
            return super().create(request, *args, **kwargs)
        else:
            return Response(status=status.HTTP_417_EXPECTATION_FAILED)