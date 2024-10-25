from django.contrib import admin
from src.backend.core.admin import BaseAdmin
from src.backend.words_soup_game.models import Exercise, Word, ExerciseSchedule, ExerciseRecord

@admin.register(Word)
class WordAdmin(BaseAdmin):
    fields = ["name"]

@admin.register(Exercise)
class ExerciseAdmin(BaseAdmin):
    fields = ["correct_word", "wrong_words", "is_public", "organization", "created_by"]


@admin.register(ExerciseSchedule)
class ExeciseSchedule(BaseAdmin):
    fields = ["exercise", "academic_classes", "organization", "deadline", "created_by"]

@admin.register(ExerciseRecord)
class ExerciseRecordAdmin(BaseAdmin):
    fields = ["exercise", "organization", "schedule", "created_by"]
