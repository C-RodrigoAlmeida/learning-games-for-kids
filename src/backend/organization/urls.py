from rest_framework.routers import SimpleRouter

from src.backend.organization.controllers import OrganizationViewSet, MembershipViewSet

router = SimpleRouter()
router.register("management", OrganizationViewSet)
router.register("membership", MembershipViewSet)