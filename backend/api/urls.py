from email.mime import base
from django.contrib import admin
from django.urls import path,include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
from .views import (BlacklistTokenView,LoggedInUserView,RegisterView,UserDetailViewSet,
                    HousingLoanViewset,CarLoanViewset,UserOpinionAgentViewset,TrendingInsuranceAgentViewSet,ElectronicDevicesViewset,MedicalViewset)
router=DefaultRouter()
router.register('register',RegisterView,basename='register')
router.register('user-detail',UserDetailViewSet,basename='user-detail')
router.register('opinions',UserOpinionAgentViewset,basename='opinions')
router.register('trending',TrendingInsuranceAgentViewSet,basename='trending')
router.register('car-loans',CarLoanViewset,basename='car-loans')
router.register('housing-loans',HousingLoanViewset,basename='housing-loans')
router.register('electronic-devices',ElectronicDevicesViewset,basename='electronic-devices')
router.register('medical-ins',MedicalViewset,basename='medical-ins')

urlpatterns = [
    path('',include(router.urls)),
    path('api/token/',TokenObtainPairView.as_view(),name="token_obtain"),
    path('api/token/refresh/',TokenRefreshView.as_view(),name="refresh_token"),
    path('api/token/blacklist/',BlacklistTokenView.as_view(),name="blacklist"),
    path('current-user/', LoggedInUserView.as_view(), name='currentuser'),
]