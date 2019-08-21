from django.contrib import admin
from car_sharing.models import Car, CarMaker

# Register your models here.
@admin.register(CarMaker)
class CarMakerAdmin(admin.ModelAdmin):
    """CarMaker admin"""
    fields = ("name",)
    readonly_fields = ("id", "created_on", "updated_on")
    list_display = ("id", "name", "created_on", "updated_on")
    verbose_name = "CarMaker"
    verbose_name_plural = "CarMakers"


@admin.register(Car)
class CarAdmin(admin.ModelAdmin):
    """Car admin"""
    fields = ("model", "year", "seats", "maker")
    readonly_fields = ("id", "created_on", "updated_on")
    list_display = ("id", "model", "year", "seats",
                    "maker", "created_on", "updated_on")
    verbose_name = "Car"
    verbose_name_plural = "Cars"
