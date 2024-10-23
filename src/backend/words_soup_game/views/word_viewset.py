from rest_framework import viewsets
from src.backend.words_soup_game.models import Word
from src.backend.words_soup_game.serializers import WordSerializer

class WordViewSet(viewsets.ModelViewSet):
    queryset = Word.objects.all()
    serializer_class = WordSerializer