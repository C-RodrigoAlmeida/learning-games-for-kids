from rest_framework import serializers
from src.backend.organization.models import Organization
from src.backend.core.serializers import BaseSerializer

__all__ = ["OrganizationSerializer"]

class BaseOrganizationSerializer(BaseSerializer):

    class Meta(BaseSerializer.Meta):
        model = Organization
        fields = BaseSerializer.Meta.fields + ["name", "description", "email"]

class OrganizationSerializer(BaseOrganizationSerializer):
    class Meta(BaseOrganizationSerializer.Meta):
        fields = BaseOrganizationSerializer.Meta.fields

class OrganizationDisplaySerializer(BaseOrganizationSerializer):
    class Meta(BaseOrganizationSerializer.Meta):
        fields = ["id", "name", "email"]