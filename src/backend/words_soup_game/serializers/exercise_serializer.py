from rest_framework import serializers
from src.backend.words_soup_game.models import Exercise

class ExerciseSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Exercise
        fields = [
            'id',
            'words',
            'correct_word',
            'is_public',
            'created_at',
            'updated_at',
            'deleted_at',
        ]