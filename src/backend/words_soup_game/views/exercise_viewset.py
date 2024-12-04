from rest_framework import viewsets

from src.backend.organization.models.organization import Organization
from src.backend.words_soup_game.models import Exercise
from src.backend.words_soup_game.serializers import ExerciseSerializer
from src.backend.words_soup_game.serializers.exercise_serializer import ExerciseCreateSerializer

__all__ = ["ExerciseViewSet"]

class ExerciseViewSet(viewsets.ModelViewSet):
    queryset = Exercise.objects.all()
    
    def get_serializer_class(self):
        if self.action == 'create':
            return ExerciseCreateSerializer
        return ExerciseSerializer

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user, organization=Organization.objects.get(id=self.request.session.get('membership', None).get('organization', None).get('id', None)))

    def perform_destroy(self, instance):
        instance.delete(soft=True)