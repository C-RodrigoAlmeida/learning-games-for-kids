from rest_framework import viewsets
from rest_framework.decorators import action

from src.backend.organization.models import AcademicClasses
from src.backend.organization.serializers import BaseAcademicClassesSerializer, AcademicClassesSerializer


__all__ = ["AcademicClassesViewSet"]


class AcademicClassesViewSet(viewsets.ModelViewSet):
    queryset = AcademicClasses.objects.all()

    def get_serializer_class(self) -> AcademicClassesSerializer | BaseAcademicClassesSerializer:
        if self.action == "list":
            return AcademicClassesSerializer
        return BaseAcademicClassesSerializer
    
    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)