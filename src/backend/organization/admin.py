from django.contrib import admin

from src.backend.organization.models import Membership, Organization

# Register your models here.
@admin.register(Membership)
class MembershipAdmin(admin.ModelAdmin):
    fields = [
        "user",
        "organization",
    ]

@admin.register(Organization)
class OrganizationAdmin(admin.ModelAdmin):
    fields = [
        "name",
        "description"
    ]