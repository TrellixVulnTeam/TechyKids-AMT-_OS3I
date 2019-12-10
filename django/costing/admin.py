from django.contrib import admin
from . import models


class CostingAdmin(admin.ModelAdmin):

    list_display = ('vendor','invoice_number', 'invoice_period', 'invoice_basic_amount', 'invoice_tax_amount', 'active','invoice_total_amount',
                    'invoice_description', 'invoice_date', 'mode', 'payment_details','costing_files')


admin.site.register(models.Costing, CostingAdmin)
