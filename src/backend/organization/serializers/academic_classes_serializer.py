from src.backend.core.serializers import BaseSerializer
from src.backend.organization.models import AcademicClasses
from src.backend.organization.serializers.organization_serializer import OrganizationDisplaySerializer
from src.backend.accounts.serializers import UserDisplaySerializer

__all__ = ["BaseAcademicClassesSerializer", "AcademicClassesSerializer"]

class BaseAcademicClassesSerializer(BaseSerializer):
    class Meta(BaseSerializer.Meta):
        model = AcademicClasses
        fields = BaseSerializer.Meta.fields + ["teacher", "students", "organization"]

class AcademicClassesSerializer(BaseAcademicClassesSerializer):
    organization = OrganizationDisplaySerializer()
    students = UserDisplaySerializer(many=True)
    teacher = UserDisplaySerializer()
    created_by = UserDisplaySerializer()
    class Meta(BaseAcademicClassesSerializer.Meta):
        fields = BaseAcademicClassesSerializer.Meta.fields + ["created_by"]