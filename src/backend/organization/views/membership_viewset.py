from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action

from src.backend.organization.models import Membership
from src.backend.organization.serializers import MembershipSerializer, MembershipCreateSerializer
from src.backend.organization.serializers.organization_serializer import OrganizationSerializer

__all__ = ["MembershipViewSet"]

class MembershipViewSet(viewsets.ModelViewSet):
    queryset = Membership.objects.all()
    # def get_queryset(self):
    #     return Membership.objects.select_related('user', 'organization').filter(user=self.request.user) 

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_serializer_class(self) -> MembershipSerializer | MembershipCreateSerializer:
        if self.action == 'create': 
            return MembershipCreateSerializer
        
        if self.action == 'organizations':
            return OrganizationSerializer
        
        return MembershipSerializer
    
    @action(detail=False, methods=['get'])
    def organizations(self) -> Response:
        queryset = Membership.objects.select_related('organization').filter(user=self.request.user)
        serializer: OrganizationSerializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
