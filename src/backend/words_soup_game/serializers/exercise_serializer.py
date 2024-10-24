from src.backend.words_soup_game.models import Exercise
from src.backend.core.serializers import BaseSerializer

__all__ = ["ExerciseSerializer"]

class ExerciseSerializer(BaseSerializer):    
    class Meta:
        model = Exercise
        fields = [
            "wrong_words",
            "correct_word",
            "is_public",
            "organization"
        ]
