from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from src.backend.organization.models import Organization
from src.backend.organization.models.membership import Membership
from src.backend.organization.serializers import OrganizationSerializer
from src.backend.organization.serializers.membership_serializer import MembershipSerializer

class OrganizationViewSet(viewsets.ModelViewSet):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer

    @action(detail=True, methods=['get'])
    def membership(self, request, pk):
        queryset = Membership.objects.filter(organization=pk)
        serializer = MembershipSerializer(queryset, many=True)
        return Response(serializer.data)