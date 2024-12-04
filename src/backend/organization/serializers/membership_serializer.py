from rest_framework import serializers

from src.backend.core.serializers import BaseSerializer
from src.backend.accounts.serializers import UserDisplaySerializer
from src.backend.organization.serializers.organization_serializer import OrganizationDisplaySerializer
from src.backend.organization.models import Membership

__all__ = ["MembershipSerializer", "MembershipUserSerializer", "MembershipCreateSerializer", "MembershipUpdateSerializer"]

class BaseMembershipSerializer(BaseSerializer):
    class Meta(BaseSerializer.Meta):
        model = Membership
        fields = BaseSerializer.Meta.fields + ["role", "is_active"]

class MembershipSerializer(BaseMembershipSerializer):
    user = UserDisplaySerializer()
    organization = OrganizationDisplaySerializer()
    class Meta(BaseMembershipSerializer.Meta):
        fields = BaseMembershipSerializer.Meta.fields + ["user", "organization"]

class MembershipUserSerializer(BaseMembershipSerializer):
    organization_id = serializers.CharField(source='organization.id')
    organization_name = serializers.CharField(source='organization.name')

    email = serializers.CharField(source='user.email')
    student_name = serializers.SerializerMethodField()

    class Meta(BaseMembershipSerializer.Meta):
        fields = ["id", "student_name", "email", "organization_id", "organization_name", "is_active", "role"]

    def get_student_name(self, obj):
        user = obj.user
        return f"{user.first_name} {user.last_name}" if user.first_name and user.last_name else user.username

class MembershipCreateSerializer(BaseMembershipSerializer):
    class Meta(BaseMembershipSerializer.Meta):
        fields = ["organization", "role"]

class MembershipUserRegistrationSerializer(BaseMembershipSerializer):
    class Meta(BaseMembershipSerializer.Meta):
        fields = ["user"]

class MembershipUpdateSerializer(BaseMembershipSerializer):
    class Meta(BaseMembershipSerializer.Meta):
        fields = ["is_active"]
