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