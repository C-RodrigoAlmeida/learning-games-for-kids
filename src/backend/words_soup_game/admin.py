from django.contrib import admin
from src.backend.words_soup_game.models import Exercise, Word

@admin.register(Exercise)
class ExerciseAdmin(admin.ModelAdmin):
    fields = [
        'id'
    ]

@admin.register(Word)
class WordAdmin(admin.ModelAdmin):
    fields = [
        'id',
        'name'
    ]