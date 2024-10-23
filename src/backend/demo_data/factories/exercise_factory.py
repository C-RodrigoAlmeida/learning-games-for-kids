import random
import factory
from factory.django import DjangoModelFactory
from typing import List, Optional
from src.backend.words_soup_game.models import Exercise
from src.backend.words_soup_game.models.word import Word
from .word_factory import WordFactory

__all__ = ['ExerciseFactory']

class ExerciseFactory(DjangoModelFactory):
    class Meta:
        model = Exercise

    correct_word = factory.SubFactory(WordFactory)
    is_public = factory.Faker('boolean')

    @factory.post_generation
    def words(self, create: bool, extracted: Optional[List[Word]], **kwargs: dict) -> None:
        if not create:
            return

        if extracted:
            for word in extracted:
                if word != self.correct_word:
                    self.words.add(word)
        else:
            num_words = random.randint(3, 10)
            for _ in range(num_words):
                if word != self.correct_word:
                    self.words.add(WordFactory())

        self.words.add(self.correct_word)
