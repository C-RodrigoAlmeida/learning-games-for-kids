import factory
from factory.django import DjangoModelFactory
from src.backend.words_soup_game.models import Word

__all__ = ['WordFactory']

class WordFactory(DjangoModelFactory):
    class Meta:
        model = Word

    name = factory.Faker('word')