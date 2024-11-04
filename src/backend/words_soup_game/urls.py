from rest_framework.routers import DefaultRouter
from src.backend.words_soup_game.views import ExerciseViewSet, WordViewSet, ExerciseRecordViewSet, ExerciseScheduleViewSet

router = DefaultRouter()
router.register(r'exercises', ExerciseViewSet, basename='exercise')
router.register(r'words', WordViewSet, basename='word')
router.register(r'exercise_records', ExerciseRecordViewSet, basename='exercise_record')
router.register(r'exercise_schedules', ExerciseScheduleViewSet, basename='exercise_schedule')

urlpatterns = router.urls