import factory
from factory.django import DjangoModelFactory
from src.backend.demo_data.factories.organization_factory import OrganizationFactory
from src.backend.demo_data.factories.user_factory import UserFactory
from src.backend.organization.models import Membership

__all__ = ['MembershipFactory']

class MembershipFactory(DjangoModelFactory):
    class Meta:
        model = Membership

    user = factory.SubFactory(UserFactory)
    organization = factory.SubFactory(OrganizationFactory)
    role = factory.Faker('random_element', elements=['admin', 'teacher', 'student'])
    is_active = factory.Faker('boolean')
