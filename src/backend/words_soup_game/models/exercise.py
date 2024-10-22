from django.db import models

from src.backend.core.models import BaseModel
from src.backend.words_soup_game.models.word import Word

class Exercise(BaseModel):
    words = models.ManyToManyField(Word, related_name="words")
    correct_word = models.ForeignKey(Word, on_delete=models.CASCADE, related_name="correct_word")
    is_public = models.BooleanField(default=False)

    class Meta:
        ordering = ['-id']
        verbose_name = "Exercise"
        verbose_name_plural = "Exercises"