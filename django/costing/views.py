from django.shortcuts import get_object_or_404
from django.db import transaction

from rest_framework import viewsets
from rest_framework import response
from rest_framework import exceptions
from rest_framework import generics
from rest_framework import status
from rest_framework import views
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.filters import SearchFilter

from . import models
from . import serializers


class CostingViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited to Costing Details.
    """
    queryset = models.Costing.objects.all()
    serializer_class = serializers.CostingManagementSerializer
    permission_classes = (IsAuthenticated, )

    def list(self, request, *args, **kwargs):
        costing = models.Costing.objects.filter(active=True).all()
        serializer = serializers.CostingManagementMiniSerializer(costing, many=True)
        return response.Response(serializer.data)

    @transaction.atomic()
    def create(self, request, *args, **kwargs):
        request.data["created_user"] = request.user.id
        request.data["active"] = True
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return response.Response({'result':"Success"})
        else:
            return response.Response(serializer.errors)
    
    @transaction.atomic()
    def update(self, request, pk=None):
        data = request.data.copy()
        data["created_user"] = request.user.id
        data["active"] = True
        instance = self.get_object()
        serializer = self.serializer_class(instance=instance,data=data)
        if serializer.is_valid():
            serializer.save()
            return response.Response({'result':"Success"})
        else:
            return response.Response({'errors':serializer.errors})

    @transaction.atomic()
    def destroy(self, request, pk=None):
        costing = self.get_object()
        costing.active = False
        costing.save()
        serializer = serializers.CostingManagementSerializer(costing)
        return response.Response(serializer.data)


class CostingSearchClass(generics.ListAPIView):

    serializer_class = serializers.CostingManagementMiniSerializer
    permission_classes = (IsAuthenticated, )
    queryset = models.Costing.objects.filter(active=True).all()
    filter_backends = (SearchFilter,)
    search_fields = ('vendor__vendor_name','invoice_number',)
