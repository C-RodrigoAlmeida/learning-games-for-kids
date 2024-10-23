from membership_serializer import BaseMembershipSerializer
from src.backend.accounts.serializers import UserSerializer

class OrganizationMembershipSerializer(BaseMembershipSerializer):
    user = UserSerializer()
    class Meta(BaseMembershipSerializer.Meta):
        fields = BaseMembershipSerializer.Meta.fields + ["user"]