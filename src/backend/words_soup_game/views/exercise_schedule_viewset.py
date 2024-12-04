from rest_framework import viewsets

from src.backend.words_soup_game.models import ExerciseSchedule
from src.backend.words_soup_game.serializers import BaseExerciseScheduleSerializer, ExerciseScheduleSerializer

class ExerciseScheduleViewSet(viewsets.ModelViewSet):
    queryset = ExerciseSchedule.objects.all()

    def get_serializer_class(self) -> ExerciseScheduleSerializer | BaseExerciseScheduleSerializer:
        if self.action == "list":
            return ExerciseScheduleSerializer
    
        return BaseExerciseScheduleSerializer

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)