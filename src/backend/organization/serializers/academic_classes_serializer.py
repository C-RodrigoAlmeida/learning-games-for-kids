from src.backend.core.serializers import BaseSerializer
from src.backend.organization.models import AcademicClasses
from src.backend.organization.serializers.organization_serializer import OrganizationDisplaySerializer
from src.backend.accounts.serializers import UserDisplaySerializer

__all__ = ["BaseAcademicClassesSerializer", "AcademicClassesSerializer"]

class BaseAcademicClassesSerializer(BaseSerializer):
    organization = OrganizationDisplaySerializer()
    students = UserDisplaySerializer(many=True)
    teacher = UserDisplaySerializer()

    class Meta(BaseSerializer.Meta):
        model = AcademicClasses
        fields = BaseSerializer.Meta.fields + ["name", "teacher", "students", "organization"]

class AcademicClassesSerializer(BaseAcademicClassesSerializer):
    class Meta(BaseAcademicClassesSerializer.Meta):
        fields = BaseAcademicClassesSerializer.Meta.fields

class AcademicClassDisplaySerializer(BaseAcademicClassesSerializer):
    class Meta(BaseAcademicClassesSerializer.Meta):
        fields = ['id', "name", "teacher"]