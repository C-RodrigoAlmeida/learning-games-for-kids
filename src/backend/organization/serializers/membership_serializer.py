from rest_framework import serializers

from src.backend.core.serializers import BaseSerializer
from src.backend.accounts.serializers import UserSerializer
from src.backend.organization.serializers.organization_serializer import OrganizationSerializer
from src.backend.organization.models import Membership, Organization

__all__ = ["MembershipSerializer", "MembershipCreateSerializer"]

class BaseMembershipSerializer(BaseSerializer):
    class Meta(BaseSerializer.Meta):
        model = Membership
        fields = BaseSerializer.Meta.fields + ["role", "is_active"]

class MembershipSerializer(BaseMembershipSerializer):
    user = UserSerializer()
    organization = OrganizationSerializer()
    class Meta(BaseMembershipSerializer.Meta):
        fields = BaseMembershipSerializer.Meta.fields + ["user", "organization"]

class MembershipCreateSerializer(BaseMembershipSerializer):
    class Meta(BaseMembershipSerializer.Meta):
        fields = ["organization", "role"]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        request = self.context.get("request")
        if request and request.user.is_authenticated:
            self.fields["organization"].queryset = Organization.objects.exclude(
                membership__user=request.user, 
                membership__is_active=True,
                membership__deleted_at__isnull=True,
                deleted_at__isnull=True
            )