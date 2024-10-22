from rest_framework import serializers
from src.backend.words_soup_game.models import Word

class WordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Word
        fields = [
            'id',
            'name',
            'created_at',
            'updated_at',
            'deleted_at',
        ]