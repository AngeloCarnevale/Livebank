from bank_operations.models import Account, Address, Card, Contacts, Transaction, Deposit, Loan
from .serializers import AccountSerializer,CardSerializer, AddressSerializer, ContactsSerializer,TransactionSerializer, DepositSerializer, LoanSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
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
            return Response("Success to create your account", status=status.HTTP_201_CREATED)
        
        return Response("Error to create your account", status=status.HTTP_400_BAD_REQUEST)
    
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
            return Response("You don't have money",status=status.HTTP_400_BAD_REQUEST)
        
         
        serializerSender = AccountSerializer(sender, data = updateSender)
        serializerRecipient = AccountSerializer(recipiente, data = updateRecipient)

        if serializerSender.is_valid() and serializerRecipient.is_valid():
            
            serializerSender.save()
            serializerRecipient.save()
            return super().create(request, *args, **kwargs)
        else:
            return Response(status=status.HTTP_417_EXPECTATION_FAILED)
        
    def list(self, request, *args, **kwargs):
        user_id = self.request.user.id
        
        
        print(user_id)
        return Response("Test")
        
        

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
        
class CardViewSet(ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer
    permission_classes = [IsAuthenticated]

class LoanViewSet(ModelViewSet):
    queryset = Loan.objects.all()
    serializer_class = LoanSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        loan = LoanSerializer(data=request.data)
        
        if loan.is_valid(raise_exception=True):
            loan.account = request.user.id
            
            value = loan.validated_data.get('value')
            
            if float(value) <= 0:
                return Response("Invalid value", status=status.HTTP_400_BAD_REQUEST)
        
            if float(value) > 1000.0:
                return Response("You can't request a loan with this value, limit: R$ 1000", status=status.HTTP_400_BAD_REQUEST)
        
            loan.save()
            return Response("Request loan success", status=status.HTTP_201_CREATED)
        
        return Response("Error to request your loan", status=status.HTTP_400_BAD_REQUEST)
        