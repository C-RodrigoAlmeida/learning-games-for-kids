from rest_framework import serializers
from src.backend.organization.models import Organization

class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        queryset = Organization.objects.all()
        fields = [
            "id",
            "name",
            "description"
        ]