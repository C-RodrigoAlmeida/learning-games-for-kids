from rest_framework import viewsets

from src.backend.organization.models import Membership
from src.backend.organization.serializers import MembershipSerializer, MembershipCreateSerializer

__all__ = ["MembershipViewSet"]

class MembershipViewSet(viewsets.ModelViewSet):
    queryset = Membership.objects.select_related('user', 'organization').all()

    def get_serializer_class(self) -> MembershipSerializer | MembershipCreateSerializer:
        if self.action == 'create': 
            return MembershipCreateSerializer
        
        return MembershipSerializer
