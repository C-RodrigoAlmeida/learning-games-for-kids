from rest_framework import viewsets
from rest_framework.response import Response

from rest_framework.decorators import action
from src.backend.organization.models import Membership
from src.backend.organization.models.organization import Organization
from src.backend.organization.serializers.organization_serializer import OrganizationSerializer
from src.backend.organization.serializers import MembershipSerializer, MembershipCreateSerializer

__all__ = ["MembershipViewSet"]

class MembershipViewSet(viewsets.ModelViewSet):
    queryset = Membership.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_serializer_class(self) -> MembershipSerializer | MembershipCreateSerializer:
        if self.action == 'create': 
            return MembershipCreateSerializer
        
        if self.action == 'organizations':
            return MembershipSerializer
        
        if self.action == 'organizations_not_member':
            return OrganizationSerializer
        
        return MembershipSerializer
    
    @action(detail=False, methods=["get"])
    def organizations(self, request):
        queryset = Membership.objects.filter(user=self.request.user).select_related("organization")
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=["get"], url_path="organizations/not-member")
    def organizations_not_member(self, request):
        user_memberships = Membership.objects.filter(user=request.user).values_list('organization_id', flat=True)
        organizations = Organization.objects.exclude(id__in=user_memberships)

        serializer = self.get_serializer(organizations, many=True)
        return Response(serializer.data)

