from rest_framework import serializers
from . import models


class VendorManagementSerializer(serializers.ModelSerializer):
    created_date = serializers.DateTimeField(format="%Y-%m-%d", required=False, read_only=True)
    update_date = serializers.DateTimeField(format="%Y-%m-%d", required=False, read_only=True)

    class Meta:
        model = models.VendorManagement
        fields = "__all__"


class VendorManagementMiniSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.VendorManagement
        fields = ('vendor_id', 'vendor_name', 'mobile_number', 'service')
