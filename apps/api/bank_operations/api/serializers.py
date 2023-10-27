from rest_framework.serializers import ModelSerializer
from bank_operations.models import Account, Address, Contacts


class AccountSerializer(ModelSerializer):
    class Meta:
        model = Account
        fields = ('__all__')
        
class AddressSerializer(ModelSerializer):
    class Meta:
        model = Address
        fields = ('__all__')
        
class ContactsSerializer(ModelSerializer):
    class Meta:
        model = Contacts
        fields = ('__all__')
        

        