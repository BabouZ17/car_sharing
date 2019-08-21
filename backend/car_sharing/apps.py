from django.apps import AppConfig


class CarSharingConfig(AppConfig):
    name = 'car_sharing'
    
    def ready(self):
        import car_sharing.signals