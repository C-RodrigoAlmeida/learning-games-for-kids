from src.backend.words_soup_game.models import Word
from src.backend.core.serializers import BaseSerializer

__all__ = ["WordSerializer"]

class WordSerializer(BaseSerializer):
    class Meta(BaseSerializer.Meta):
        model = Word
        fields = BaseSerializer.Meta.fields + ['name']

class WordDisplaySerializer(WordSerializer):
    class Meta(WordSerializer.Meta):
        fields = ['id', 'name']