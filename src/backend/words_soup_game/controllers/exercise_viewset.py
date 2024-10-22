from rest_framework import viewsets

from src.backend.words_soup_game.models import Exercise
from src.backend.words_soup_game.serializers import ExerciseSerializer

class ExerciseViewSet(viewsets.ModelViewSet):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer