# car_sharing app urls

from django.contrib import admin
from django.urls import path

from car_sharing.views import (
    CarList, CarCreate, CarRetrieve, CarUpdate, CarDelete, CarMakerCreate, 
    CarMakerList, CarMakerUpdate, CarMakerRetrieve, CarMakerDelete)

app_name = "car_sharing"
urlpatterns = [
    path('car/new', CarCreate.as_view(), name="car_create"),
    path('car/<int:id>', CarRetrieve.as_view(), name="car_detail"),
    path('car/<int:id>/update', CarUpdate.as_view(), name="car_update"),
    path('car/<int:id>/delete', CarDelete.as_view(), name="car_delete"),
    path('cars', CarList.as_view(), name="car_list"),
    path('carmaker/new', CarMakerCreate.as_view(), name="carmaker_create"),
    path('carmaker/<int:id>', CarMakerRetrieve.as_view(), name="carmaker_detail"),
    path('carmakers', CarMakerList.as_view(), name="carmaker_list"),
    path('carmaker/<int:id>/update', CarMakerUpdate.as_view(), name="carmaker_update"),
    path('carmaker/<int:id>/delete', CarMakerDelete.as_view(), name="carmaker_delete")
]
