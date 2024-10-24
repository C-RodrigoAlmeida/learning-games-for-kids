from django.db import models
from django.contrib.auth import get_user_model

from src.backend.core.models import BaseModel
from src.backend.words_soup_game.models.exercise import Exercise
from src.backend.organization.models.organization import Organization
from src.backend.words_soup_game.models.exercise_schedule import ExerciseSchedule

__all__ = ["ExerciseRecord"]


class ExerciseRecord(BaseModel):
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE, related_name="exercise_record")
    created_by = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name="exercise_record")
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE, related_name="exercise_record")
    schedule = models.ForeignKey(ExerciseSchedule, on_delete=models.CASCADE, related_name="exercise_record")

    class Meta:
        ordering = ["-id"]
        verbose_name = "Exercise Record"
        verbose_name_plural = "Exercises Records"

    def __str__(self) -> str:
        return f"Exercise: {self.exercise} | Organization: {self.organization} | Created By: {self.created_by}"