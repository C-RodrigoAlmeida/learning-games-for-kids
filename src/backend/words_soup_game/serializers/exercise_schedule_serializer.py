from src.backend.core.serializers import BaseSerializer
from src.backend.words_soup_game.models import ExerciseSchedule
from src.backend.accounts.serializers import UserDisplaySerializer
from src.backend.words_soup_game.serializers.exercise_serializer import ExerciseDisplaySerializer
from src.backend.organization.serializers.organization_serializer import OrganizationDisplaySerializer

__all__ = ["BaseExerciseScheduleSerializer", "ExerciseScheduleSerializer"]


class BaseExerciseScheduleSerializer(BaseSerializer):
    exercise = ExerciseDisplaySerializer()
    organization = OrganizationDisplaySerializer()
    created_by = UserDisplaySerializer()
    class Meta(BaseSerializer.Meta):
        model = ExerciseSchedule
        fields = BaseSerializer.Meta.fields + ["exercise", "deadline", "organization"]


class ExerciseScheduleSerializer(BaseExerciseScheduleSerializer):
    class Meta(BaseExerciseScheduleSerializer.Meta):
        fields = BaseExerciseScheduleSerializer.Meta.fields + ["created_by"]