from django.db import models
from src.backend.core.models import BaseModel

__all__ = ["Word"]

class Word(BaseModel):
    name = models.CharField(max_length=50)

    def __str__(self) -> str:
        return f'{self.name}'

    class Meta:
        ordering = ['-id']
        verbose_name = "Word"
        verbose_name_plural = "Words"