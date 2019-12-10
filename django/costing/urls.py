from django.urls import path
from django.urls import include

from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r'costing', views.CostingViewSet)

urlpatterns = [
    path('costing-search/',views.CostingSearchClass.as_view(), name="costing-search"),
    path('',include(router.urls)),
]