from rest_framework import viewsets

from src.backend.organization.models import Membership
from src.backend.organization.serializers import MembershipSerializer

class MembershipViewSet(viewsets.ModelViewSet):
    queryset = Membership.objects.all()
    serializer_class = MembershipSerializer
