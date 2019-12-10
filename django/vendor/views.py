from django.db import transaction
from django.db.models import Count
from django_filters.rest_framework import DjangoFilterBackend

from rest_framework import viewsets
from rest_framework import response
from rest_framework import exceptions
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.filters import SearchFilter
from rest_framework.views import APIView

from . import models
from . import serializers


class VendorManagementViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited to Vendor Details.
    """
    queryset = models.VendorManagement.objects.all()
    serializer_class = serializers.VendorManagementSerializer
    permission_classes = (IsAuthenticated, )

    def list(self, request, *args, **kwargs):
        vendor = models.VendorManagement.objects.filter(active=True).all()
        serializer = serializers.VendorManagementMiniSerializer(vendor, many=True)
        return response.Response(serializer.data)
    
    @transaction.atomic()
    def create(self, request, *args, **kwargs):
        request.data["created_user"] = request.auth.user.id
        request.data["mobile_number"] = "+91"+request.data["mobile_number"]
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            # models.VendorManagement.objects.create(**serializer.validated_data)
            return response.Response({'result':"Success"})
        else:
            raise exceptions.ValidationError(serializer.errors)

    
    @transaction.atomic()
    def update(self, request, pk=None):
        request.data["created_user"] = request.auth.user.id
        instance = self.get_object()
        serializer = self.serializer_class(instance=instance,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return response.Response({'result':"Success"})
        else:
            return response.Response({'errors':serializer.errors})

    @transaction.atomic()
    def destroy(self, request, pk=None):
        vendor = self.get_object()
        vendor.active = False
        vendor.save()
        serializer = serializers.VendorManagementSerializer(vendor)
        return response.Response(serializer.data)


class VendorFilterAndSearchClass(generics.ListAPIView):
    
    serializer_class = serializers.VendorManagementSerializer
    permission_classes = (IsAuthenticated, )
    queryset = models.VendorManagement.objects.filter(active=True).all()
    filter_backends = (DjangoFilterBackend, SearchFilter)
    filter_fields = ('period',)
    search_fields = ('vendor_id', 'vendor_name', 'mobile_number')


class VendorsCountByPeriod(APIView):

    def get(self, request, format=None):
        permission_classes = (IsAuthenticated, )
        vendors_count = models.VendorManagement.objects.filter(active=True).values('period').annotate(periods=Count('period'))
        return response.Response(vendors_count)

# class VendorFilterClass(generics.ListAPIView):
    
#     serializer_class = serializers.VendorManagementSerializer
#     authentication_classes = (TokenAuthentication, )
#     permission_classes = (IsAuthenticated, )

#     def get_queryset(self,*args, **kwargs):
#         period = self.request.data["period"]
#         search = self.request.data["search"]
#         if period:
#             vendor = models.VendorManagement.objects.filter(active=True,period=period).all()
#         else:
#             vendor = models.VendorManagement.objects.filter(active=True).all()
#         return vendor

#     def post(self, request, *args, **kwargs):
#         return self.list(request, *args, *kwargs)

    
# class VendorFilterClass(generics.ListAPIView):
    
#     serializer_class = serializers.VendorManagementSerializer
#     authentication_classes = (TokenAuthentication, )
#     permission_classes = (IsAuthenticated, )

#     def get_queryset(self,*args, **kwargs):
#         queryset = models.VendorManagement.objects.all()
#         period = self.request.query_params.get('period')
#         if period:
#             vendor = queryset.filter(active=True,period=str(period))
#         else:
#             vendor = queryset.filter(active=True)
#         return vendor


