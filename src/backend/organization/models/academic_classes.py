from django.db import models
from django.contrib.auth import get_user_model
from src.backend.core.models import BaseModel
from src.backend.organization.models.organization import Organization

__all__ = ["AcademicClasses"]

class AcademicClasses(BaseModel):
    teacher = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name="teacher_classes")
    students = models.ManyToManyField(get_user_model(), related_name="student_classes")
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE, related_name="student_classes")
    created_by = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name="classes_created")

    class Meta:
        ordering = ["-id"]
        verbose_name = "Student Classes"
        verbose_name_plural = "Student Classes"

    def __str__(self) -> str:
        return f"Teacher: {self.teacher} | Organization: {self.organization} | Created By: {self.created_by}"