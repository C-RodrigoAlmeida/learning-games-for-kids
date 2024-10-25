from django.contrib import admin
from src.backend.core.admin import BaseAdmin
from src.backend.words_soup_game.models import Exercise, Word, ExerciseSchedule, ExerciseRecord

@admin.register(Word)
class WordAdmin(BaseAdmin):
    list_fields = ["name"]

@admin.register(Exercise)
class ExerciseAdmin(BaseAdmin):
    list_fields = ["correct_word", "wrong_words", "is_public", "organization", "created_by"]


@admin.register(ExerciseSchedule)
class ExeciseSchedule(BaseAdmin):
    list_fields = ["exercise", "academic_classes", "organization", "deadline", "created_by"]

@admin.register(ExerciseRecord)
class ExerciseRecordAdmin(BaseAdmin):
    list_fields = ["exercise", "organization", "schedule", "created_by"]
