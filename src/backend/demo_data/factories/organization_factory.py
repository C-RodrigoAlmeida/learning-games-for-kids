import factory
from factory.django import DjangoModelFactory
from src.backend.organization.models import Organization

__all__ = ['OrganizationFactory']

class OrganizationFactory(DjangoModelFactory):
    class Meta:
        model = Organization

    name = factory.Faker('company')
    description = factory.Faker('paragraph')
