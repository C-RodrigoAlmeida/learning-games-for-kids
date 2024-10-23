from rest_framework import serializers
from src.backend.organization.models import Organization
from src.backend.core.serializers import BaseSerializer

__all__ = ["OrganizationSerializer"]

class OrganizationSerializer(BaseSerializer):

    class Meta(BaseSerializer.Meta):
        model = Organization
        fields = BaseSerializer.Meta.fields + ["name", "description"]