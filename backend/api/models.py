from distutils.command.upload import upload
from email.policy import default
from inspect import modulesbyfile
from unittest.util import _MAX_LENGTH
from django.db import models
from django.contrib.auth.models import (AbstractBaseUser,BaseUserManager,PermissionsMixin)
# Create your models here.
class UserManager(BaseUserManager):
    def create_user(self,username,email,password=None):
        if username is None:
            raise TypeError("Users should have a username")

        if email is None:
            raise TypeError("Users should have a email")

        user=self.model(username=username,email=self.normalize_email(email))
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self,username,email,password=None):
        if password is None:
            raise TypeError("Password should not be none")
        
        user=self.create_user(username,email,password)
        user.is_superuser=True
        user.is_staff=True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser,PermissionsMixin):
    username=models.CharField(max_length=255,unique=True,db_index=True)
    email=models.EmailField(max_length=255,unique=True,db_index=True)
    is_verified=models.BooleanField(default=False)
    is_active=models.BooleanField(default=True)
    is_staff=models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now_add=True)
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=['username']

    objects=UserManager()
    def __str__(self):
        return self.username

    def tokens(self):
        return ''
        
class UserDetail(models.Model):
    name=models.CharField(max_length=100)
    user_foreign=models.ForeignKey(User,on_delete=models.CASCADE)
    age=models.IntegerField()
    job=models.CharField(max_length=100)
    t_income=models.FloatField()
    nt_income=models.FloatField()
    tax_percentage=models.FloatField()
    miscellaneous_expenditure=models.FloatField()
    place=models.CharField(max_length=100)

    def __str__(self):
        return self.name

class UserOpinionAgent(models.Model):
    insurance_categ=models.CharField(max_length=200)
    user_foreign=models.ForeignKey(User,on_delete=models.CASCADE)
    message=models.CharField(max_length=500)

    def __str__(self):
        return self.message

class CarLoan(models.Model):
    agent=models.CharField(max_length=100)
    car_name=models.CharField(max_length=100)
    interest_rate=models.FloatField()
    duration=models.IntegerField()
    monthly_payment=models.FloatField()
    phno=models.CharField(max_length=15)
    def __str__(self):
        return self.car_name

class HousingLoan(models.Model) :
    bank_name=models.CharField(max_length=200)
    interest_rate=models.FloatField()
    duration=models.IntegerField()
    monthly_payment=models.FloatField()
    phno=models.CharField(max_length=15)
    def __str__(self):
        return self.bank_name

class DiscussionBoard(models.Model):
    user_foreign=models.ForeignKey(User,on_delete=models.CASCADE)
    opinion=models.CharField(max_length=1000)
    image=models.ImageField(upload_to='disc_images',blank=True,null=True)
    link=models.URLField()
    def __str__(self):
        return self.opinion


class TrendingInsuranceAgents(models.Model):
    org_name=models.CharField(max_length=200)
    org_image=models.ImageField(upload_to='org_images',blank=True,null=True)
    genre=models.CharField(max_length=200) 
    estimated_payable=models.FloatField()
    def __str__(self):
        return self.org_name
class Medical_expense(models.Model):
    scheme_name=models.CharField(max_length=200)
    agent=models.CharField(max_length=200)
    interest_rate=models.FloatField()
    duration_of_repayment=models.IntegerField()
    monthly_payment=models.IntegerField()
    phno_agent=models.CharField(max_length=200)

    def __str__(self):
        return self.scheme_name

class Electronic_Devices(models.Model):
    scheme_name=models.CharField(max_length=200)
    agent=models.CharField(max_length=200)
    interest_rate=models.FloatField()
    duration_of_repayment=models.IntegerField()
    monthly_payment=models.IntegerField()
    phno_agent=models.CharField(max_length=200)

    def __str__(self):
        return self.scheme_name
