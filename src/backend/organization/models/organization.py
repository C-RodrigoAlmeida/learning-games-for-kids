from django.db import models
from django.contrib.auth.models import Group

class Organization(Group):
    description = models.TextField(blank=True, null=True, default='')

    def __str__(self) -> str:
        return self.name
