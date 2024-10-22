from django.contrib import admin

from src.backend.organization.models import Membership, Organization, Role

# Register your models here.
@admin.register(Membership)
class MembershipAdmin(admin.ModelAdmin):
    fields = [
        "id",
        "user",
        "organization",
        "created_at",
        "updated_at"
        "deleted_at"
    ]

@admin.register(Role)
class RoleAdmin(admin.ModelAdmin):
    fields = [
        "id",
        "identifier"
    ]

@admin.register(Organization)
class OrganizationAdmin(admin.ModelAdmin):
    fields = [
        "id",
        "name",
        "description"
    ]