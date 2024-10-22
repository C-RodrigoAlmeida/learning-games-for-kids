from rest_framework import viewsets

from src.backend.organization.models import Organization
from src.backend.organization.serializers import OrganizationSerializer

class OrganizationViewSet(viewsets.ModelViewSet):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer