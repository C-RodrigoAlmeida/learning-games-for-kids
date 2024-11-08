from src.backend.core.serializers import BaseSerializer
from src.backend.words_soup_game.models import ExerciseRecord
from src.backend.accounts.serializers import UserDisplaySerializer
from src.backend.words_soup_game.serializers.exercise_serializer import ExerciseDisplaySerializer
from src.backend.organization.serializers.organization_serializer import OrganizationDisplaySerializer
from src.backend.words_soup_game.serializers.exercise_schedule_serializer import ExerciseScheduleDisplaySerializer

__all__ = ["BaseExerciseRecordSerializer", "ExerciseRecordSerializer"]


class BaseExerciseRecordSerializer(BaseSerializer):
    exercise = ExerciseDisplaySerializer()
    organization = OrganizationDisplaySerializer()
    schedule = ExerciseScheduleDisplaySerializer()
    class Meta(BaseSerializer.Meta):
        model = ExerciseRecord
        fields = BaseSerializer.Meta.fields + ["exercise", "organization", "schedule"]


class ExerciseRecordSerializer(BaseExerciseRecordSerializer):
    student = UserDisplaySerializer()
    class Meta(BaseExerciseRecordSerializer.Meta):
        fields = BaseExerciseRecordSerializer.Meta.fields + ["student"]