from django.contrib import admin
from .models import(User,UserDetail,TrendingInsuranceAgents,UserOpinionAgent,CarLoan,HousingLoan)
# Register your models here.
admin.site.register(User)
admin.site.register(UserDetail)
admin.site.register(TrendingInsuranceAgents)
admin.site.register(UserOpinionAgent)
admin.site.register(CarLoan)
admin.site.register(HousingLoan)
