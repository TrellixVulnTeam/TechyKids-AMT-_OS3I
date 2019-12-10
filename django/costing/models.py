from django.db import models
from django.contrib.auth.models import User
from vendor.models import VendorManagement


class Costing(models.Model):

    objects = None
    active = models.BooleanField('active', default=True)
    costing_files = models.FileField(blank=True, null=True, upload_to='costing_files')
    created_date = models.DateTimeField('created_date', auto_now_add=True)
    created_user = models.ForeignKey(User, on_delete=models.PROTECT, related_name="costing_created_user")
    invoice_basic_amount = models.DecimalField('invoice_basic_amount', max_digits=20, decimal_places=2)
    invoice_date = models.DateField('invoice_date')
    invoice_description = models.CharField('invoice_description', max_length=50)
    invoice_number = models.BigIntegerField('invoice_number')
    invoice_period = models.CharField('invoice_period', max_length=50)
    invoice_tax_amount = models.DecimalField('invoice_tax_amount', max_digits=20, decimal_places=2)
    invoice_total_amount = models.DecimalField('invoice_total_amount', max_digits=20, decimal_places=2)
    mode = models.CharField('mode', max_length=50)
    payment_details = models.CharField('payment_details', max_length=50)
    update_date = models.DateTimeField('update_date', auto_now=True)
    vendor = models.ForeignKey(VendorManagement, on_delete=models.PROTECT, related_name="vendor_cost")

    def __str__(self):
        return "{}".format(self.id)
