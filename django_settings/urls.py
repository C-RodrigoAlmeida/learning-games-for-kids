"""
URL configuration for learning_games_for_kids_host project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static


from django_settings import settings
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularSwaggerView,
    SpectacularRedocView
)

api_include = lambda model_urls: path("api/", include(model_urls))

urlpatterns = [
    path("api/schema", SpectacularAPIView.as_view(), name="schema"),
    path('api/docs/swagger', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger'),
    path('api/docs/redoc', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
    path("admin/", admin.site.urls),
    api_include("src.backend.words_soup_game.urls"),
    api_include("src.backend.organization.urls"),
    api_include("src.backend.accounts.urls"),
    *static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
]
