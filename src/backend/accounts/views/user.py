from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from django.contrib.auth.models import User
from src.backend.accounts.serializers.user import UserSerializer
from src.backend.accounts.serializers.user_display import UserDisplaySerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from drf_spectacular.utils import extend_schema, OpenApiResponse

@extend_schema(tags=['Users'])
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_permissions(self):
        if self.action == 'create':
            self.permission_classes = [AllowAny]
        else:
            self.permission_classes = [IsAuthenticated]

        return super(UserViewSet, self).get_permissions()
    def get_serializer_class(self):
        if self.action == 'me':
            return UserDisplaySerializer
        return super().get_serializer_class()

    @extend_schema(
        responses={
            200: UserDisplaySerializer,
            401: OpenApiResponse(description='Unauthorized')
        }
    )
    @action(detail=False, methods=['get'])
    def me(self, request):
        """Get the current user's details including their addresses."""
        serializer = self.get_serializer(request.user)
        return Response(serializer.data) 