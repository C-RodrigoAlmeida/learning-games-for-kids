from rest_framework import serializers
from src.backend.words_soup_game.models import Exercise
from src.backend.core.serializers import BaseSerializer
from src.backend.organization.models import Organization

__all__ = ["ExerciseSerializer"]

class ExerciseSerializer(BaseSerializer):    
    class Meta:
        model = Exercise
        fields = [
            "wrong_words",
            "correct_word",
            "is_public",
            "organization"
        ]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        request = self.context.get("request")
        if request and request.user.is_authenticated:
            self.fields["organization"].queryset = Organization.objects.filter(
                membership__user=request.user,
                membership__is_active=True,
                membership__deleted_at__isnull=True,
                deleted_at__isnull=True
        )
