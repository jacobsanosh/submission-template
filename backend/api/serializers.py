from dataclasses import field, fields
from importlib.metadata import files
from rest_framework import serializers
from .models import (User,UserDetail,UserOpinionAgent,TrendingInsuranceAgents,CarLoan)
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken,TokenError

class RegisterSerializer(serializers.ModelSerializer):
    password=serializers.CharField(max_length=68,min_length=6,write_only=True)
    permission_classes=[IsAuthenticated]
    class Meta:
        model=User
        fields=['email','username','password']

    def validate(self,attrs):
        email=attrs.get('email','')
        username=attrs.get('username','')

        if not username.isalnum():
            raise serializers.ValidationError("username should contain only alpha numeric chars")
        return attrs

    def create(self,validated_data):
        return User.objects.create_user(**validated_data)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['id','username','email']

class CarLoanSerializer(serializers.ModelSerializer):
    class Meta:
        model=CarLoan
        fields='__all__'
        
class TrendingInsuranceSerializer(serializers.ModelSerializer):
    class Meta:
        model=TrendingInsuranceAgents
        fields='__all__'

class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserDetail
        fields='__all__'
class UserOpinionAgentSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserOpinionAgent
        fields='__all__'
