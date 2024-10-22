from django.db import models
from django.contrib.auth import get_user_model

from src.backend.core.models import BaseModel
from src.backend.organization.models.role import Role
from src.backend.organization.models.organization import Organization

class Membership(BaseModel):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name="user")
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE, related_name="organization")
    role = models.ForeignKey(Role, on_delete=models.CASCADE, related_name="role")
    is_active = models.BooleanField(default=False)

    class Meta:
        unique_together = ("user", "organization")

    def __str__(self):
        return f"{self.user} - {self.Organization} ({self.role})"