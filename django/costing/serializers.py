from rest_framework import serializers
from . import models


class CostingManagementSerializer(serializers.ModelSerializer):
    created_date = serializers.DateTimeField(format="%Y-%m-%d", required=False, read_only=True)
    update_date = serializers.DateTimeField(format="%Y-%m-%d", required=False, read_only=True)

    class Meta:
        model = models.Costing
        fields = "__all__"


class CostingManagementMiniSerializer(serializers.ModelSerializer):
    vendor_name = serializers.CharField(source='vendor.vendor_name')

    class Meta:
        model = models.Costing
        fields = ('id','vendor_name', 'invoice_number', 'invoice_basic_amount', 'invoice_tax_amount',
                  'invoice_total_amount', 'costing_files')
