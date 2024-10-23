from django.shortcuts import get_object_or_404

from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.request import Request as HTTPRequest

from src.backend.organization.models import Organization
from src.backend.organization.models.membership import Membership
from src.backend.organization.serializers import OrganizationSerializer
from src.backend.organization.serializers.membership_serializer import MembershipSerializer

__all__ = ["OrganizationViewSet"]

class OrganizationViewSet(viewsets.ModelViewSet):
    queryset = Organization.objects.all()

    def get_serializer_class(self) -> OrganizationSerializer | MembershipSerializer:
        if self.action == 'membership':
            return MembershipSerializer
        return OrganizationSerializer

    @action(detail=True, methods=['get'])
    def membership(self, request: HTTPRequest, pk: str) -> Response:
        organization = get_object_or_404(Organization, pk=pk)
        queryset = Membership.objects.select_related('user').filter(organization=organization)
        serializer: MembershipSerializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
