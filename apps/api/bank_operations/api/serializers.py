from rest_framework.serializers import ModelSerializer
from bank_operations.models import Account, Address, Contacts, Transaction, Deposit


class AccountSerializer(ModelSerializer):
    class Meta:
        model = Account
        fields = ("number", "account_number")
        extra_kwargs = {
            'number': {'read_only': True},
            'account_number': {'read_only': True}
        }
        
class AddressSerializer(ModelSerializer):
    class Meta:
        model = Address
        fields = ('__all__')
        
class ContactsSerializer(ModelSerializer):
    class Meta:
        model = Contacts
        fields = ('__all__')
        
class TransactionSerializer(ModelSerializer):
    class Meta:
        model = Transaction
        fields = ('__all__')
        
class DepositSerializer(ModelSerializer):
    class Meta:
        model = Deposit
        fields = ('__all__')

        