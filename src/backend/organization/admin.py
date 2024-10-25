from django.contrib import admin

from src.backend.core.admin import BaseAdmin
from src.backend.organization.models import Membership, Organization, AcademicClasses

# Register your models here.
@admin.register(Membership)
class MembershipAdmin(BaseAdmin):
    list_fields = ["user", "organization", "role", "is_active"]

@admin.register(Organization)
class OrganizationAdmin(BaseAdmin):
    list_fields = ["name", "description"]

@admin.register(AcademicClasses)
class AcademicClassesAdmin(BaseAdmin):
    list_fields = ["teacher", "students", "organization"]