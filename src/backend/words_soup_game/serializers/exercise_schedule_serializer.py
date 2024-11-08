from src.backend.core.serializers import BaseSerializer
from src.backend.words_soup_game.models import ExerciseSchedule

__all__ = ["BaseExerciseScheduleSerializer", "ExerciseScheduleSerializer"]


class BaseExerciseScheduleSerializer(BaseSerializer):
    class Meta(BaseSerializer.Meta):
        model = ExerciseSchedule
        fields = BaseSerializer.Meta.fields + ["exercise", "deadline", "organization"]


class ExerciseScheduleSerializer(BaseExerciseScheduleSerializer):
    class Meta(BaseExerciseScheduleSerializer.Meta):
        fields = BaseExerciseScheduleSerializer.Meta.fields + ["created_by"]