from django.db import models
from django.contrib.auth import get_user_model

from src.backend.core.models import BaseModel
from src.backend.words_soup_game.models.exercise import Exercise
from src.backend.organization.models.organization import Organization
from src.backend.organization.models.academic_classes import AcademicClasses

__all__ = ["ExerciseSchedule"]


class ExerciseSchedule(BaseModel):
    academic_classes = models.ForeignKey(AcademicClasses, on_delete=models.CASCADE, related_name="exercise_schedule")
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE, related_name="exercise_schedule")
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE, related_name="exercise_schedule")
    deadline = models.DateTimeField()
    created_by = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name="exercise_schedule")

    class Meta:
        ordering = ["-id"]
        verbose_name = "Exercise Schedule"
        verbose_name_plural = "Exercises Schedule"

    def __str__(self) -> str:
        return f"Exercise: {self.exercise} | Organization: {self.organization} | Created By: {self.created_by}"