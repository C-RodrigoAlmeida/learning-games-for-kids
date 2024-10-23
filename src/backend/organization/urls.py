from rest_framework.routers import SimpleRouter

from src.backend.organization.views import OrganizationViewSet, MembershipViewSet

router = SimpleRouter()
router.register("organization", OrganizationViewSet)
router.register("membership", MembershipViewSet)

urlpatterns = router.urls