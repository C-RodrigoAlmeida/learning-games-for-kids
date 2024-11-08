from src.backend.words_soup_game.models import Exercise
from src.backend.core.serializers import BaseSerializer
from src.backend.words_soup_game.serializers.word_serializer import WordDisplaySerializer
from src.backend.organization.serializers.organization_serializer import OrganizationDisplaySerializer

__all__ = ["ExerciseSerializer"]

class ExerciseSerializer(BaseSerializer):    
    correct_word = WordDisplaySerializer()
    wrong_words = WordDisplaySerializer(many=True)
    organization = OrganizationDisplaySerializer()
    class Meta:
        model = Exercise
        fields = [
            "wrong_words",
            "correct_word",
            "is_public",
            "organization"
        ]

class ExerciseDisplaySerializer(ExerciseSerializer):
    class Meta(ExerciseSerializer.Meta):
        fields = ["id", "correct_word", "wrong_words"]