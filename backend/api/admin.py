from django.contrib import admin
from .models import(User,UserDetail,TrendingInsuranceAgents,UserOpinionAgent)
# Register your models here.
admin.site.register(User)
admin.site.register(UserDetail)
admin.site.register(TrendingInsuranceAgents)
admin.site.register(UserOpinionAgent)