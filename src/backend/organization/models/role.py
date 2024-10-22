from django.db import models
from src.backend.core.models import BaseModel

class Role(BaseModel):
    class RoleChoices(models.IntegerChoices):
        ADMIN = 1, 'Admin'
        TEACHER = 2, 'Teacher'
        STUDENT  = 3, 'Student'

    identifier = models.IntegerField(choices=RoleChoices)

    def __str__(self) -> str:
        return self.get_role_display()