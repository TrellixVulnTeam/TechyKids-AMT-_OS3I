from django.urls import path
from django.urls import include

from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r'vendor', views.VendorManagementViewSet)

urlpatterns = [
    path('vendor-filter-or-search/',views.VendorFilterAndSearchClass.as_view(), name="vendor-filter-or-search"),
    path('vendor-list-count-by-period/',views.VendorsCountByPeriod.as_view(), name="vendor-list-count-by-period"),
    path('',include(router.urls)),
]