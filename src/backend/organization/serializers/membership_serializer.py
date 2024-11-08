from rest_framework import serializers

from src.backend.core.serializers import BaseSerializer
from src.backend.accounts.serializers import UserDisplaySerializer
from src.backend.organization.serializers.organization_serializer import OrganizationDisplaySerializer
from src.backend.organization.models import Membership

__all__ = ["MembershipSerializer", "MembershipCreateSerializer"]

class BaseMembershipSerializer(BaseSerializer):
    class Meta(BaseSerializer.Meta):
        model = Membership
        fields = BaseSerializer.Meta.fields + ["role", "is_active"]

class MembershipSerializer(BaseMembershipSerializer):
    user = UserDisplaySerializer()
    organization = OrganizationDisplaySerializer()
    class Meta(BaseMembershipSerializer.Meta):
        fields = BaseMembershipSerializer.Meta.fields + ["user", "organization"]

class MembershipCreateSerializer(BaseMembershipSerializer):
    class Meta(BaseMembershipSerializer.Meta):
        fields = ["organization", "role"]