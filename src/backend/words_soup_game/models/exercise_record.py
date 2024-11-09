from django.db import models
from django.contrib.auth import get_user_model

from src.backend.core.models import BaseModel
from src.backend.words_soup_game.models.word import Word
from src.backend.words_soup_game.models.exercise import Exercise
from src.backend.organization.models.organization import Organization
from src.backend.words_soup_game.models.exercise_schedule import ExerciseSchedule

__all__ = ["ExerciseRecord"]


class ExerciseRecord(BaseModel):
    selected_words = models.ManyToManyField(Word, related_name="exercise_record")
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE, related_name="exercise_record")
    student = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name="exercise_record")
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE, related_name="exercise_record")
    schedule = models.ForeignKey(ExerciseSchedule, on_delete=models.CASCADE, related_name="exercise_record")
    
    class Meta:
        ordering = ["-id"]
        verbose_name = "Exercise Record"
        verbose_name_plural = "Exercises Records"

    def __str__(self) -> str:
        return f"Exercise: {self.exercise} | Organization: {self.organization} | Student: {self.student}"
    