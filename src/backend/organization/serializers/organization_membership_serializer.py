from src.backend.accounts.serializers import UserSerializer
from src.backend.organization.serializers.membership_serializer import BaseMembershipSerializer

class OrganizationMembershipSerializer(BaseMembershipSerializer):
    user = UserSerializer()
    class Meta(BaseMembershipSerializer.Meta):
        fields = BaseMembershipSerializer.Meta.fields + ["user"]
