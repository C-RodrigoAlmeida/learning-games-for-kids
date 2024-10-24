from rest_framework.routers import DefaultRouter
from src.backend.words_soup_game.views import ExerciseViewSet, WordViewSet, ExerciseRecordViewSet, ExerciseScheduleViewSet

router = DefaultRouter()
router.register(r'words_soup_game/exercises', ExerciseViewSet, basename='exercise')
router.register(r'words_soup_game/words', WordViewSet, basename='word')
router.register(r'words_soup_game/exercise_records', ExerciseRecordViewSet, basename='exercise_record')
router.register(r'words_soup_game/exercise_schedules', ExerciseScheduleViewSet, basename='exercise_schedule')

urlpatterns = router.urls