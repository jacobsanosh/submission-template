from rest_framework import generics,mixins,viewsets,status
from .models import (User,UserDetail,UserOpinionAgent,TrendingInsuranceAgents,CarLoan,HousingLoan)
from .serializers import (RegisterSerializer,UserSerializer,UserDetailSerializer,
                        CarLoanSerializer,UserOpinionAgentSerializer,TrendingInsuranceSerializer,HousingLoanSerializer)
from rest_framework_simplejwt.tokens import RefreshToken,AccessToken
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated,IsAuthenticatedOrReadOnly
from rest_framework.response import Response
# Create your views here.

class RegisterView(viewsets.GenericViewSet,mixins.CreateModelMixin,mixins.RetrieveModelMixin,mixins.ListModelMixin):
    serializer_class=RegisterSerializer
    queryset=User.objects.all()

class UserDetailViewSet(viewsets.GenericViewSet,mixins.CreateModelMixin,mixins.RetrieveModelMixin,mixins.ListModelMixin,mixins.UpdateModelMixin):
    serializer_class=UserDetailSerializer
    queryset=UserDetail.objects.all()

class CarLoanViewset(viewsets.GenericViewSet,mixins.RetrieveModelMixin,mixins.ListModelMixin):
    permission_classes=[IsAuthenticated]
    serializer_class=CarLoanSerializer
    queryset=CarLoan.objects.all()

class TrendingInsuranceAgentViewSet(viewsets.GenericViewSet,mixins.RetrieveModelMixin,mixins.ListModelMixin):
    serializer_class=TrendingInsuranceSerializer
    queryset=TrendingInsuranceAgents.objects.all()

class UserOpinionAgentViewset(viewsets.GenericViewSet,mixins.CreateModelMixin,mixins.RetrieveModelMixin):
    permission_classes=[IsAuthenticatedOrReadOnly]
    serializer_class=UserOpinionAgentSerializer
    queryset=UserOpinionAgent.objects.all()

class HousingLoanViewset(viewsets.GenericViewSet,mixins.RetrieveModelMixin,mixins.ListModelMixin):
    permission_classes=[IsAuthenticated]
    serializer_class=HousingLoanSerializer
    queryset=HousingLoan.objects.all()

class BlacklistTokenView(APIView):
    permission_classes=[IsAuthenticated]
    def post(self,request):
        try:
            refresh_token=request.data["refresh_token"]
            token=RefreshToken(refresh_token)
            token.blacklist()
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
class LoggedInUserView(APIView):
    permission_classes=[IsAuthenticated]
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)