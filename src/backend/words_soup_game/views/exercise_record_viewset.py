from rest_framework import viewsets

from src.backend.words_soup_game.models import ExerciseRecord
from src.backend.words_soup_game.serializers import ExerciseRecordSerializer,BaseExerciseRecordSerializer

class ExerciseRecordViewSet(viewsets.ModelViewSet):
    queryset = ExerciseRecord.objects.all()

    def get_serializer_class(self) -> ExerciseRecordSerializer | BaseExerciseRecordSerializer:
        if self.action == 'list':
            return ExerciseRecordSerializer
        return BaseExerciseRecordSerializer

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

