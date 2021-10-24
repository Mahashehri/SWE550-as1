from django.urls import path, include
from rest_framework.routers import DefaultRouter

from test_app.views import PropertyViewSet
router = DefaultRouter()

router.register("<int:id>", PropertyViewSet.as_view(), base_name="property_viewset")

urlpatterns = [
    path("property", include(router.urls)),
]
