from src.backend.core.serializers import BaseSerializer
from src.backend.words_soup_game.models import ExerciseSchedule
from src.backend.accounts.serializers import UserDisplaySerializer
from src.backend.words_soup_game.serializers.exercise_serializer import ExerciseDisplaySerializer
from src.backend.organization.serializers.organization_serializer import OrganizationDisplaySerializer
from src.backend.organization.serializers.academic_classes_serializer import AcademicClassDisplaySerializer

__all__ = ["BaseExerciseScheduleSerializer", "ExerciseScheduleSerializer"]


class BaseExerciseScheduleSerializer(BaseSerializer):
    exercise = ExerciseDisplaySerializer()
    organization = OrganizationDisplaySerializer()
    created_by = UserDisplaySerializer()
    academic_class = AcademicClassDisplaySerializer()
    class Meta(BaseSerializer.Meta):
        model = ExerciseSchedule
        fields = BaseSerializer.Meta.fields + ["academic_class", "exercise", "deadline", "organization", "created_by"] 


class ExerciseScheduleSerializer(BaseExerciseScheduleSerializer):
    class Meta(BaseExerciseScheduleSerializer.Meta):
        fields = BaseExerciseScheduleSerializer.Meta.fields

class ExerciseScheduleDisplaySerializer(BaseExerciseScheduleSerializer):
    class Meta(BaseExerciseScheduleSerializer.Meta):
        fields = ["id", "created_at", "deadline"]