from rest_framework.routers import SimpleRouter

from src.backend.organization.views import OrganizationViewSet, MembershipViewSet, AcademicClassesViewSet

router = SimpleRouter()
router.register("organization", OrganizationViewSet)
router.register("membership", MembershipViewSet)
router.register("academic_classes", AcademicClassesViewSet)


urlpatterns = router.urls