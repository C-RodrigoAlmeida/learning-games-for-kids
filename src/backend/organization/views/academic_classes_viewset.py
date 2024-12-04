from rest_framework import viewsets
from rest_framework.decorators import action

from src.backend.organization.models import AcademicClasses
from src.backend.organization.serializers import BaseAcademicClassesSerializer, AcademicClassesSerializer, AcademicClassCreateSerializer


__all__ = ["AcademicClassesViewSet"]


class AcademicClassesViewSet(viewsets.ModelViewSet):
    queryset = AcademicClasses.objects.all()

    def get_serializer_class(self) -> AcademicClassesSerializer | BaseAcademicClassesSerializer | AcademicClassCreateSerializer:
        if self.action == "list":
            return AcademicClassesSerializer
        return BaseAcademicClassesSerializer
    
    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user, organization=self.request.session.get('membership', None).get("organization", None).get("id", None))