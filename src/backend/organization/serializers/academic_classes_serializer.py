from src.backend.core.serializers import BaseSerializer
from src.backend.organization.models import AcademicClasses

__all__ = ["BaseAcademicClassesSerializer", "AcademicClassesSerializer"]

class BaseAcademicClassesSerializer(BaseSerializer):
    class Meta(BaseSerializer.Meta):
        model = AcademicClasses
        fields = BaseSerializer.Meta.fields + ["teacher", "students", "organization"]

class AcademicClassesSerializer(BaseAcademicClassesSerializer):
    class Meta(BaseAcademicClassesSerializer.Meta):
        fields = BaseAcademicClassesSerializer.Meta.fields + ["created_by"]