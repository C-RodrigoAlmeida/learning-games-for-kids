from django.shortcuts import get_object_or_404

from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.request import Request as HTTPRequest

from src.backend.organization.models import Organization
from src.backend.organization.models.membership import Membership, RoleChoices
from src.backend.organization.serializers import OrganizationSerializer
from src.backend.organization.serializers.membership_serializer import MembershipSerializer

__all__ = ["OrganizationViewSet"]

class OrganizationViewSet(viewsets.ModelViewSet):
    queryset = Organization.objects.all()

    def get_serializer_class(self) -> OrganizationSerializer | MembershipSerializer:
        if self.action == 'membership':
            return MembershipSerializer
        return OrganizationSerializer
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        organization = serializer.save()

        Membership.objects.create(
            user=self.request.user,
            organization=organization,
            role=RoleChoices.ADMIN,
            is_active=True
        )

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    
    @action(detail=True, methods=['get'])
    def membership(self, request: HTTPRequest, pk: str) -> Response:
        organization = get_object_or_404(Organization, pk=pk)
        queryset = Membership.objects.select_related('user').filter(organization=organization)
        serializer: MembershipSerializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

