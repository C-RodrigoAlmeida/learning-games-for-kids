from rest_framework.routers import SimpleRouter

from src.backend.organization.controllers import OrganizationViewSet

router = SimpleRouter()
router.register("management", OrganizationViewSet)