from django.urls import path, include
from rest_framework.routers import DefaultRouter
from src.backend.accounts.views.user import UserViewSet
from src.backend.accounts.views.auth import LoginView, LogoutView, SessionView, get_csrf_token

router = DefaultRouter()
router.register(r'accounts', UserViewSet)

urlpatterns = [
    path('auth/login/', LoginView.as_view(), name='login'),
    path('auth/logout/', LogoutView.as_view(), name='logout'),
    path('auth/session/', SessionView.as_view(), name='session'),
    path('auth/csrf/', get_csrf_token, name='csrf'),
    path('', include(router.urls)),
] 