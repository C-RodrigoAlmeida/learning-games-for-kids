from rest_framework import viewsets

from src.backend.organization.models import Membership
from src.backend.organization.serializers import MembershipSerializer, MembershipCreateSerializer

__all__ = ["MembershipViewSet"]

class MembershipViewSet(viewsets.ModelViewSet):
    queryset = Membership.objects.all()
    def get_queryset(self):
        return Membership.objects.select_related('user', 'organization').filter(user=self.request.user) 

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_serializer_class(self) -> MembershipSerializer | MembershipCreateSerializer:
        if self.action == 'create': 
            return MembershipCreateSerializer
        
        return MembershipSerializer
