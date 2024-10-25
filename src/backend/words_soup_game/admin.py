from django.contrib import admin
from src.backend.words_soup_game.models import Exercise, Word, exercise_record, exercise_schedule

@admin.register(Exercise)
class ExerciseAdmin(admin.ModelAdmin):
    fields = [
        "correct_word",
        "wrong_words",
        "is_public",
        "organization",
        "created_by",
        "created_at",
        "updated_at",
        "deleted_at"
        
    ]

@admin.register(Word)
class WordAdmin(admin.ModelAdmin):
    fields = [
        "name",
        "created_at",
        "updated_at",
        "deleted_at"
    ]

@admin.register(exercise_record)
class ExerciseRecordAdmin(admin.ModelAdmin):
    fields = [
        "exercise",
        "organization",
        "schedule",
        "created_by",
        "created_at",
        "updated_at",
        "deleted_at"
    ]

@admin.register(exercise_schedule)
class ExeciseSchedule(admin.ModelAdmin):
    fields = [
        "exercise",
        "academic_classes",
        "organization",
        "deadline",
        "created_at",
        "updated_at",
        "deleted_at"
    ]