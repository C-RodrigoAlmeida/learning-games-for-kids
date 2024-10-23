from django.db import models
from django.contrib.auth.models import Group

from src.backend.core.models import BaseModel

__all__ = ["Organization"]

class Organization(BaseModel, Group):
    description = models.TextField(blank=True, null=True, default='')

    class Meta:
        ordering = ["-id"]

    def __str__(self) -> str:
        return self.name
