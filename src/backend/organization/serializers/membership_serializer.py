from rest_framework import serializers

from src.backend.organization.models import Membership

class MembershipSerializer(serializers.ModelSerializer):
    role_display = serializers.CharField(source='get_role_display', read_only=True)


    class Meta:
        model = Membership
        fields = [
            "id",
            "user",
            "organization",
            "role",
            "role_display",
            "is_active",
            "created_at",
            "updated_at",
            "deleted_at"
        ]