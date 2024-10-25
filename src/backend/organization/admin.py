from django.contrib import admin

from src.backend.organization.models import Membership, Organization, AcademicClasses

# Register your models here.
@admin.register(Membership)
class MembershipAdmin(admin.ModelAdmin):
    fields = [
        "user",
        "organization",
        "role",
        "is_active"
    ]

@admin.register(Organization)
class OrganizationAdmin(admin.ModelAdmin):
    fields = [
        "name",
        "description"
    ]

@admin.register(AcademicClasses)
class AcademicClassesAdmin(admin.ModelAdmin):
    fields = [
        "teacher",
        "students",
        "organization",
        "created_by",
        "created_at",
        "deleted_at"
    ]