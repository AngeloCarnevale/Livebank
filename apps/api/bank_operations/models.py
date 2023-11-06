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