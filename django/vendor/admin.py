from django.contrib import admin
from . import models


class VendorAdmin(admin.ModelAdmin):

    list_display = ('account_number','active', 'bill_create_date', 'bill_cycle', 'created_date', 'created_user', 'mobile_number',
                    'period', 'purchase_order_number', 'service', 'update_date', 'vendor_id', 'vendor_name')
                    

admin.site.register(models.VendorManagement, VendorAdmin)