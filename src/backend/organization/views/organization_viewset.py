from django.shortcuts import get_object_or_404

from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.request import Request as HTTPRequest

from src.backend.organization.models import Organization
from src.backend.organization.models.membership import Membership, RoleChoices
from src.backend.organization.serializers import OrganizationSerializer
from src.backend.organization.serializers.membership_serializer import MembershipSerializer, MembershipUserSerializer

__all__ = ["OrganizationViewSet"]

class OrganizationViewSet(viewsets.ModelViewSet):
    queryset = Organization.objects.all()

    def get_serializer_class(self) -> OrganizationSerializer | MembershipSerializer | MembershipUserSerializer:
        if self.action == 'membership':
            return MembershipSerializer

        if self.action == 'membership_student':
            return MembershipUserSerializer

        return OrganizationSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        organization = serializer.save()

        Membership.objects.create(
            user=self.request.user,
            organization=organization,
            role=RoleChoices.ADMIN,
            is_active=True
        )

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    @action(detail=False, methods=['get'])
    def membership(self, request: HTTPRequest) -> Response:
        organization = get_object_or_404(Organization, self.request.session.get('membership', None).get('organization', None).get('id', None))
        queryset = Membership.objects.filter(organization=organization)
        serializer: MembershipSerializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'], url_path='student')
    def membership_student(self, request: HTTPRequest) -> Response:
        organization = get_object_or_404(Organization, id=self.request.session.get('membership', None).get('organization', None).get('id', None))
        queryset = Membership.objects.filter(organization=organization, role=RoleChoices.STUDENT)
        serializer: MembershipUserSerializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=["get"])
    def academic_classes(self, request: HTTPRequest) -> Response:
        organization = get_object_or_404(Organization, request.session.get('membership', None).get('organization', None).get('id', None))
        queryset = organization.student_classes.all()
        serializer = self.get_serializer(queryset, many=True)        
        return Response(serializer.data)
