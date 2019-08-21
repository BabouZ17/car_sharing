from django.db import models
from django.core.exceptions import ValidationError

# Create your models here.
class CarMaker(models.Model):
    """CarMaker model"""
    name = models.CharField(
        max_length=100,
        verbose_name="Name",
        help_text="Car maker"
    )
    created_on = models.DateTimeField(
        auto_now_add=True,
        verbose_name="Created on"
    )
    updated_on = models.DateTimeField(
        auto_now=True,
        verbose_name="Updated on"
    )

    def __str__(self):
        return str(self.name)

    def save(self, *args, **kwargs):
        """Dont allow more than one instance"""
        if CarMaker.objects.filter(name__icontains=self.name).exists():
            # check if there is one carmaker with this name already
            raise ValidationError("Sorry, you already have a carmaker with this name.")
        super(CarMaker, self).save(*args, **kwargs)


class Car(models.Model):
    """Car model"""
    model = models.CharField(
        max_length=100,
        verbose_name="Model",
        help_text="Car's model"
    )
    year = models.PositiveIntegerField(
        blank=False,
        verbose_name="Year",
        help_text="Car's year"
    )
    seats = models.PositiveIntegerField(
        blank=False,
        verbose_name="Seats",
        help_text="Car's number of seats"
    )
    maker = models.ForeignKey(
        CarMaker,
        related_name="cars",
        on_delete=models.CASCADE,
        help_text="Car's maker"
    )
    created_on = models.DateTimeField(
        auto_now_add=True,
        verbose_name="Created on"
    )
    updated_on = models.DateTimeField(
        auto_now=True,
        verbose_name="Updated on"
    )


    def __str__(self):
        return str(self.model)
