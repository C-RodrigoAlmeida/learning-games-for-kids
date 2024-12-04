from django.db import models
from django.contrib.auth import get_user_model

from src.backend.core.models import BaseModel
from src.backend.words_soup_game.models.word import Word
from src.backend.organization.models.organization import Organization

__all__ = ["Exercise"]

class Exercise(BaseModel):
    title = models.CharField(max_length=255)
    wrong_words = models.ManyToManyField(Word, related_name="exercises")
    correct_word = models.ForeignKey(Word, on_delete=models.CASCADE, related_name="correct_word_exercises")
    is_public = models.BooleanField(default=False)
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE, related_name="exercises")
    created_by = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name="exercises")

    class Meta:
        ordering = ["-id"]
        verbose_name = "Exercise"
        verbose_name_plural = "Exercises"

    def __str__(self) -> str:
        return f"Correct Word: {self.correct_word} | Wrong Words: {', '.join([word.name for word in self.wrong_words.all()])} | Organization: {self.organization} | Public? {self.is_public}"