from django.shortcuts import render
from django.http import Http404

from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView

from car_sharing.models import Car, CarMaker
from car_sharing.serializers import (
    CarSerializer, SingleCarSerializer, CarUpdateSerializer, CarMakerSerializer)


# Create your views here.
class CarCreate(generics.CreateAPIView):
    """Class to create a Car"""
    serializer_class = CarUpdateSerializer
    queryset = Car.objects.all()

    def handle_exception(self, exc):
        try:
            return Response(str(exc), status=exc.status_code)
        except:
            return Response(str(exc), status=400)


class CarUpdate(generics.UpdateAPIView):
    """Class to update a Car"""
    queryset = Car.objects.all()
    lookup_field = "id"
    serializer_class = CarUpdateSerializer

    def get_serializer(self, *args, **kwargs):
        """Allow to use one to all fields for serializer""" 
        serializer_class = self.get_serializer_class()
        kwargs["context"] = self.get_serializer_context()
        kwargs["partial"] = True
        return serializer_class(*args, **kwargs)

    def handle_exception(self, exc):
        try:
            return Response(str(exc), status=exc.status_code)
        except:
            return Response(str(exc), status=exc.status_code)


class CarRetrieve(generics.RetrieveAPIView):
    """Class to retrieve a single Car instance"""
    serializer_class = SingleCarSerializer
    queryset = Car.objects.all()
    lookup_field = "id"

    def handle_exception(self, exc):
        try:
            return Response(str(exc), status=exc.status_code)
        except:
            return Response("The car does not exist!", status=404)


class CarList(generics.ListAPIView):
    """Class to list cars"""
    serializer_class = CarSerializer

    def get_queryset(self):
        """Extra filtering of the queryset"""
        seats = self.request.query_params.get("seats", None)
        maker = self.request.query_params.get("maker", None)
        year = self.request.query_params.get("year", None)
        model = self.request.query_params.get("model", None)

        kwargs = {}
        if seats is not None:
            kwargs["seats"] = seats
        if maker is not None:
            kwargs["maker__name__iexact"] = maker 
        if year is not None:
            kwargs["year"] = year
        if model is not None:
            kwargs["model"] = model

        return Car.objects.filter(**kwargs)

    def handle_exception(self, exc):
        try:
            return Response(str(exc), status=exc.status_code)
        except:
            return Response(str(exc), status=400)


class CarDelete(generics.DestroyAPIView):
    """Class to delete a Car instance"""
    queryset = Car.objects.all()
    lookup_field = "id"

    def handle_exception(self, exc):
        try:
            return Response(str(exc), status=exc.status_code)
        except:
            return Response("The car does not exist!", status=404)


class CarMakerCreate(generics.CreateAPIView):
    """Class to create a CarMaker"""
    serializer_class = CarMakerSerializer
    queryset = CarMaker.objects.all()

    def handle_exception(self, exc):
        try:
            return Response(str(exc), status=exc.status_code)
        except:
            return Response(str(exc), status=400)


class CarMakerUpdate(generics.UpdateAPIView):
    """Class to update a CarMaker"""
    queryset = CarMaker.objects.all()
    serializer_class = CarMakerSerializer
    lookup_field = "id"


    def handle_exception(self, exc):
        try:
            return Response(str(exc), status=exc.status_code)
        except:
            return Response("The carmaker already exist!", status=400)


class CarMakerRetrieve(generics.RetrieveAPIView):
    """Class to retrieve a single CarMaker instance"""
    serializer_class = CarMakerSerializer
    queryset = CarMaker.objects.all()
    lookup_field = "id"

    def handle_exception(self, exc):
        try:
            return Response(str(exc), status=exc.status_code)
        except:
            return Response("The carmaker does not exist!", status=404)


class CarMakerList(generics.ListAPIView):
    """Class to list carmakers"""
    queryset = CarMaker.objects.all()
    serializer_class = CarMakerSerializer

    def handle_exception(self, exc):
        try:
            return Response(str(exc), status=exc.status_code)
        except:
            print(exc)
            return Response(str(exc), status=400)


class CarMakerDelete(generics.DestroyAPIView):
    """Class to delete a CarMaker instance"""
    queryset = CarMaker.objects.all()
    lookup_field = "id"

    def handle_exception(self, exc):
        try:
            return Response(str(exc), status=exc.status_code)
        except:
            return Response("The carmaker does not exist!", status=404)

