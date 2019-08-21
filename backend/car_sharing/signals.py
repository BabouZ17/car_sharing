
from django.db.models.signals import pre_save
from django.core.exceptions import ValidationError
from django.dispatch import receiver

from car_sharing.models import CarMaker

# Create your signals here.
@receiver(pre_save, sender=CarMaker)
def on_carmaker_pre_save(instance, **kwargs):
    """Prevent carmaker to exists twice"""
    if CarMaker.objects.filter(name__icontains=instance.name):
        raise ValidationError(
            _("Sorry, you can't add {}, it already exists!".format(instance)))