from rest_framework import serializers

from django.contrib.auth.models import User

from src.backend.organization.models import Membership, Organization

class MembershipSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    Organization = serializers.PrimaryKeyRelatedField(Organization.objects.all())
    role = RoleSerializer()

    class Meta:
        model = Membership
        fields = [
            "id",
            "user",
            "organization",
            "role",
            "is_active",
            "created_at",
            "updated_at",
            "deleted_at"
        ]