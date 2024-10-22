from rest_framework import serializers

from django.contrib.auth.models import User

from src.backend.organization.models import Membership, Organization, Role

class MembershipSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    organization = serializers.PrimaryKeyRelatedField(Organization.objects.all())
    role = serializers.PrimaryKeyRelatedField(Role.objects.all())
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