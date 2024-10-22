from rest_framework.routers import SimpleRouter
from src.backend.words_soup_game.controllers import ExerciseViewSet, WordViewSet

router = SimpleRouter()
router.register('exercise', ExerciseViewSet)
router.register('word', WordViewSet)