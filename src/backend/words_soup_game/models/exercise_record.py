from django.db import models

from src.backend.core.models import BaseModel
from src.backend.words_soup_game.models.word import Word
from src.backend.words_soup_game.models.exercise import Exercise
from src.backend.organization.models.membership import Membership
from src.backend.words_soup_game.models.exercise_schedule import ExerciseSchedule

__all__ = ["ExerciseRecord"]


class ExerciseRecord(BaseModel):

    student = models.ForeignKey(Membership, on_delete=models.CASCADE, related_name="exercise_record")
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE, related_name="exercise_record")
    schedule = models.ForeignKey(ExerciseSchedule, on_delete=models.CASCADE, related_name="exercise_record", blank=True, null=True)
    selected_words = models.ManyToManyField(Word, related_name="selected_words")
    amount_of_correct_words = models.IntegerField(default=0)
    amount_of_wrong_words = models.IntegerField(default=0)
    
    class Meta:
        ordering = ["-id"]
        verbose_name = "Exercise Record"
        verbose_name_plural = "Exercises Records"
    