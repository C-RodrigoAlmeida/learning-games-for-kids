from rest_framework import serializers

from src.backend.organization.models import Role

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = [
            "id",
            "identifier"
        ]
