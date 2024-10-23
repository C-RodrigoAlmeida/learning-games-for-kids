import random
from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from django.db.models import Model
from typing import List, Any
from src.backend.words_soup_game.models import Word, Exercise
from src.backend.organization.models import Organization, Membership
from src.backend.demo_data.factories import WordFactory, ExerciseFactory, UserFactory, OrganizationFactory, MembershipFactory

class Command(BaseCommand):
    help: str = 'Seeds the database with demo data'
    users: List[Any]
    organizations: List[Organization]

    def add_arguments(self, parser: Any) -> None:
        parser.add_argument('--words', type=int, default=50, help='Number of words to create')
        parser.add_argument('--exercises', type=int, default=20, help='Number of exercises to create')
        parser.add_argument('--users', type=int, default=30, help='Number of users to create')
        parser.add_argument('--organizations', type=int, default=5, help='Number of organizations to create')
        parser.add_argument('--delete-all', action='store_true', help='Delete all data without seeding new data')

    def delete_existing_data(self) -> None:
        self.stdout.write('Deleting existing demo data...')
        Word.objects.all().delete()
        Exercise.objects.all().delete()
        get_user_model().objects.exclude(is_superuser=True).delete()
        Organization.objects.all().delete()
        Membership.objects.all().delete()
        self.stdout.write('Existing demo data deleted.')

    def create_words(self, count: int) -> None:
        words: List[Word] = WordFactory.create_batch(count)
        self.stdout.write(f'Created {len(words)} words')

    def create_exercises(self, count: int, words: List[Word]) -> None:
        exercises: List[Exercise] = [
            ExerciseFactory(
                words=(selected_words := random.sample(words, random.randint(min(3, len(words)), min(10, len(words))))), 
                correct_word=random.choice(selected_words)
            ) 
            for _ in range(count)
        ]
        self.stdout.write(f'Created {len(exercises)} exercises')

    def create_users(self, count: int) -> None:
        self.users = UserFactory.create_batch(count)
        self.stdout.write(f'Created {len(self.users)} users')

    def create_organizations(self, count: int) -> None:
        self.organizations = OrganizationFactory.create_batch(count)
        self.stdout.write(f'Created {len(self.organizations)} organizations')

    def create_memberships(self) -> None:
        memberships: List[Membership] = []
        for user in self.users:
            for org in self.organizations:
                if random.random() < 0.5:
                    memberships.append(MembershipFactory(user=user, organization=org))
        self.stdout.write(f'Created {len(memberships)} memberships')

    def handle(self, *args: Any, words: int, exercises: int, users: int, organizations: int, delete_all: bool, **options: Any) -> None:
        self.delete_existing_data()
        
        if delete_all:
            self.stdout.write(self.style.SUCCESS('All data has been deleted. No new data seeded.'))
            return

        self.create_words(words)
        self.create_exercises(exercises)
        self.create_users(users)
        self.create_organizations(organizations)
        self.create_memberships()
        self.stdout.write(self.style.SUCCESS('Successfully seeded new demo data'))
