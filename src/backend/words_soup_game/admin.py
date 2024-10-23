from django.contrib import admin
from src.backend.words_soup_game.models import Exercise, Word

@admin.register(Exercise)
class ExerciseAdmin(admin.ModelAdmin):
    fields = [
        "correct_word",
        "wrong_words",
        'is_public',
        'organization',
        'created_by',
        
    ]

@admin.register(Word)
class WordAdmin(admin.ModelAdmin):
    fields = [
        'name'
    ]