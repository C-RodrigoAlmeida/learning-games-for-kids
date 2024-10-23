import factory
from factory.django import DjangoModelFactory
from django.contrib.auth import get_user_model

__all__ = ['UserFactory']

User = get_user_model()

class UserFactory(DjangoModelFactory):
    class Meta:
        model = User

    username = factory.Faker('user_name')
    email = factory.Faker('email')
    password = factory.PostGenerationMethodCall('set_password', 'password123')

