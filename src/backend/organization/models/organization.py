from django.db import models
from django.contrib.auth.models import Group, User

from src.backend.core.models import BaseModel

__all__ = ["Organization"]

class Organization(BaseModel, Group):
    description = models.TextField(blank=True, null=True, default='')
    users = models.ManyToManyField(User, through='Membership')
    is_approved = models.BooleanField(default=False)
    email = models.EmailField(unique=True)

    class Meta:
        ordering = ["-id"]

    def __str__(self) -> str:
        return self.name
