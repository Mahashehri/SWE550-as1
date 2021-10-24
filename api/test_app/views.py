from django.shortcuts import render
from rest_framework import generics, viewsets
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework import mixins
from test_app.models import Property, PropertySerializer
# Create your views here.


class PropertyViewSet(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin, mixins.RetrieveModelMixin):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    lookup_field = "id"

    def get(self, request, limit = None):
        if limit:
            prperties_qs = Property.objects.all()[:int(limit)]
            properties = PropertySerializer(prperties_qs, many= True)
            return Response(properties.data)
        