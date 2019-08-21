from rest_framework import serializers

from car_sharing.models import Car, CarMaker

# Create your serializers here.
class CarMakerSerializer(serializers.ModelSerializer):
    """CarMaker model serialzier"""

    class Meta:
        model = CarMaker
        fields = "__all__"


class SingleCarSerializer(serializers.ModelSerializer):
    """Single car model serializer"""
    maker = CarMakerSerializer()

    class Meta:
        model = Car
        fields = "__all__"


class CarSerializer(serializers.ModelSerializer):
    """Car model serializer"""
    maker = serializers.StringRelatedField()

    class Meta:
        model = Car
        fields = "__all__"
        

class CarUpdateSerializer(serializers.ModelSerializer):
    """Car model serializer for update"""
    
    class Meta:
        model = Car
        fields = "__all__"



