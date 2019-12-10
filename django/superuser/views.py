from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate
from django.shortcuts import get_object_or_404
from django.db import transaction
from rest_framework import viewsets, response, exceptions, generics, status, views
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated, AllowAny
from . import serializers


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = serializers.UserSerializer
    permission_classes = (IsAuthenticated, )


class UserLogoutView(views.APIView):
    """
    API endpoint that allows users to be Logout.
    """
    permission_classes = (IsAuthenticated, )

    @transaction.atomic()
    def delete(self, request):
        if request.auth:
            request.auth.delete()
        return response.Response({"logout":"Successfully"}, status=status.HTTP_200_OK)
