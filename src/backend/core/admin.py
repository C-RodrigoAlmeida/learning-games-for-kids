from django.contrib import admin

class BaseAdmin(admin.ModelAdmin):
    readonly_fields = ('created_at', 'updated_at', 'deleted_at')

    def get_readonly_fields(self, request, obj=None):
        if obj: 
            return self.readonly_fields
        return ()
