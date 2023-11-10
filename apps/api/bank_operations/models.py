from django.db import models
from random import randint

# Create your models here.
class Address(models.Model):
    country = models.CharField(max_length=55)
    state = models.CharField(max_length=55)
    city = models.CharField(max_length=55)
    disctrict = models.CharField(max_length=55)
    street = models.CharField(max_length=55)
    number = models.PositiveSmallIntegerField() 
    complement = models.CharField(max_length=55)
    zip_code = models.CharField(max_length=30)
    account_number = models.ForeignKey('authentication.UserModel', on_delete=models.PROTECT)


class Contacts(models.Model):
    telephone = models.CharField(max_length=15)
    email = models.EmailField()
    account_number = models.ForeignKey('authentication.UserModel', on_delete=models.PROTECT)
    created_at = models.DateTimeField(auto_now_add=True)



class Account(models.Model):
    balance = models.DecimalField(decimal_places=2, null=0, max_digits=10, default=0.0)
    number = models.CharField(max_length=7)
    agency = models.CharField(max_length=4)
    account_number = models.ForeignKey('authentication.UserModel', on_delete=models.DO_NOTHING)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        self.number = f"{randint(10000,99999)}-{randint(0,9)}" 
        self.agency = "0001"

        super(Account, self).save(*args, **kwargs)
    
    def __str__(self) -> str:
        return self.number
    
class Transaction(models.Model):
    value = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    recipient = models.ForeignKey(
    Account, on_delete=models.DO_NOTHING, related_name="recipient"
        )
    sender = models.ForeignKey(Account, on_delete=models.DO_NOTHING, related_name="sender")
    
class Deposit(models.Model):
    account = models.ForeignKey(Account, on_delete=models.DO_NOTHING, related_name="account")
    value = models.DecimalField(decimal_places=2, max_digits=10)
    created_at = models.DateTimeField(auto_now_add=True)
    
class Card(models.Model):
    BLOCKED = "B"
    ACTIVE = "A"

    STATE = [(BLOCKED, "Blocked"), (ACTIVE, "Active")]

    number = models.CharField(max_length=20)
    cvv = models.CharField(max_length=3)
    expiration_date = models.CharField(max_length=5)
    state = models.CharField(max_length=1, choices=STATE, default=ACTIVE)
    client = models.ForeignKey('authentication.UserModel', on_delete=models.PROTECT)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        self.number = f"{randint(1000,9999)} {randint(1000,9999)} {randint(1000,9999)} {randint(1000,9999)}"
        self.cvv = f"{randint(100,999)}"
        self.expiration_date = f"{randint(1,12)}/{randint(27,32)}" 

        super(Card, self).save(*args, **kwargs)
    
    def __str__(self) -> str:
        return self.numero