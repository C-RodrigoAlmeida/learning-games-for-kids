from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie
from django.contrib.auth import authenticate, login, logout

from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated

from .serializers import BaseUSerSerializer, UserSerializer

class UserViewSet(viewsets.ViewSet):
    def get_serializer_class(self) -> BaseUSerSerializer | UserSerializer:
        if self.action == "login":
            return BaseUSerSerializer

        return UserSerializer

    def create(self, request):
        """Handle user registration"""
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @method_decorator(ensure_csrf_cookie)
    @action(detail=False, methods=['post'], permission_classes=[AllowAny])
    def login(self, request):
        """Handle session-based user login"""
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['post'], permission_classes=[IsAuthenticated])
    def logout(self, request):
        """Handle session-based user logout"""
        logout(request)
        return Response({'message': 'Logout successful'}, status=status.HTTP_200_OK)

    @action(detail=False, methods=['get'], permission_classes=[IsAuthenticated])
    def me(self, request):
        """Retrieve the current user's information (protected route)"""
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data)
