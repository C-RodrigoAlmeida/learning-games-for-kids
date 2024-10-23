from rest_framework.routers import DefaultRouter
from src.backend.words_soup_game.views import ExerciseViewSet, WordViewSet

router = DefaultRouter()
router.register(r'words_soup_game/exercises', ExerciseViewSet, basename='exercise')
router.register(r'words_soup_game/words', WordViewSet, basename='word')

urlpatterns = router.urls