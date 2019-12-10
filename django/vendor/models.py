from django.db import models
from django.contrib.auth.models import User

from phonenumber_field.modelfields import PhoneNumberField
import datetime

class VendorManagement(models.Model):
    
    PERIOD = (
        ('M', 'Monthly'),
        ('Q', 'Quaterly'),
        ('Y', 'Yearly'),
    )
    objects = None
    account_number = models.BigIntegerField('account_number')
    active = models.BooleanField('active', default=True)
    bill_create_date = models.DateField('bill_create_date')
    bill_cycle = models.CharField('bill_cycle', max_length=255, blank=False, null=False)
    created_date = models.DateTimeField('created_date', auto_now_add=True)
    created_user = models.ForeignKey(User, on_delete=models.PROTECT, related_name="vendor_created_user")
    mobile_number = PhoneNumberField('mobile_number', blank=False, null=False)
    period = models.CharField(max_length=1, choices=PERIOD)
    purchase_order_number = models.CharField('purchase_order_number', max_length=20, blank=False)
    service = models.CharField('service', max_length=255, blank=False, null=False)
    update_date = models.DateTimeField('update_date', auto_now=True)
    vendor_id = models.CharField('vendor_id',max_length=10, primary_key=True)
    vendor_name = models.CharField('vendor_name', max_length=150, blank=False, null=False)

    class Meta:
        verbose_name_plural = "VendorManagement"
        indexes = [
            models.Index(fields=['vendor_id', 'active', ]),
            models.Index(fields=['vendor_id', 'vendor_name', 'active', ]),
        ]

    def __str__(self):
        return "{}".format(self.vendor_id)
