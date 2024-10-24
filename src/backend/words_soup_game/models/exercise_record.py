from django.db import models
from django.contrib.auth import get_user_model
from src.backend.core.models import BaseModel
from src.backend.words_soup_game.models import Exercise, exercise_schedule
from src.backend.organization.models import Organization

__all__ = ["ExerciseDone"]


class ExerciseRecord(BaseModel):
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE, related_name="exercise_done")
    created_by = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name="exercise_done")
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE, related_name="exercise_done")
    appointment = models.ForeignKey()

    class Meta:
        ordering = ["-id"]
        verbose_name = "Exercise Done"
        verbose_name_plural = "Exercises Done"

    def __str__(self) -> str:
        return f"Exercise: {self.exercise} | Organization: {self.organization} | Done By: {self.created_by}"