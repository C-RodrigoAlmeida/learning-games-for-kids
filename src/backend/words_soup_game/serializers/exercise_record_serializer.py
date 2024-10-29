from src.backend.core.serializers import BaseSerializer
from src.backend.words_soup_game.models import ExerciseRecord

__all__ = ["BaseExerciseRecordSerializer", "ExerciseRecordSerializer"]


class BaseExerciseRecordSerializer(BaseSerializer):
    class Meta(BaseSerializer.Meta):
        model = ExerciseRecord
        fields = BaseSerializer.Meta.fields + ["exercise", "organization", "schedule"]


class ExerciseRecordSerializer(BaseExerciseRecordSerializer):
    class Meta(BaseExerciseRecordSerializer.Meta):
        fields = BaseExerciseRecordSerializer.Meta.fields + ["student"]