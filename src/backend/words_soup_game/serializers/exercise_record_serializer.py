from rest_framework import serializers

from src.backend.core.serializers import BaseSerializer
from src.backend.words_soup_game.models import ExerciseRecord
from src.backend.words_soup_game.serializers.word_serializer import WordDisplaySerializer
from src.backend.words_soup_game.serializers.exercise_serializer import ExerciseDisplaySerializer
from src.backend.organization.serializers.membership_serializer import MembershipSerializer
from src.backend.words_soup_game.serializers.exercise_schedule_serializer import ExerciseScheduleDisplaySerializer

__all__ = ["BaseExerciseRecordSerializer", "ExerciseRecordSerializer"]


class BaseExerciseRecordSerializer(BaseSerializer):
    exercise = ExerciseDisplaySerializer()
    schedule = ExerciseScheduleDisplaySerializer()
    selected_words = WordDisplaySerializer(many=True)
    student = MembershipSerializer()
    class Meta(BaseSerializer.Meta):
        model = ExerciseRecord
        fields = BaseSerializer.Meta.fields + ["exercise", "student", "schedule", "selected_words", "amount_of_correct_words", "amount_of_wrong_words"]


class ExerciseRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExerciseRecord
        fields = ["id", "exercise", "schedule", "selected_words", "amount_of_correct_words", "amount_of_wrong_words"]
