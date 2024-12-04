from django.utils import timezone
from typing import Any
from django.db import models

# Create your models here.
class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(blank=True, null=True)

    def delete(self, using: Any = ..., keep_parents: bool = ..., soft: bool = True) -> tuple[int, dict[str, int]]:
        if soft:
            self.deleted_at = timezone.now()
            self.save()
            return (1, {})
        
        return super().delete(using, keep_parents)

    class Meta:
        abstract = True