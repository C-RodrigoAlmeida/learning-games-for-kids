from src.backend.words_soup_game.models import Word
from src.backend.core.serializers import BaseSerializer

__all__ = ["WordSerializer"]

class WordSerializer(BaseSerializer):
    class Meta:
        model = Word
        fields = [
            'name',
        ]