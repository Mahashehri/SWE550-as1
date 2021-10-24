from django.db import models

# Create your models here.


class Property(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField(max_length=1000, null=True, blank=True)
    minimum_renting_duration = models.IntegerField(
        null=False, blank=False, default=1)
    per_night_price = models.FloatField(null=False, blank=False, default=30)
    no_of_rooms = models.IntegerField(default=1, null=True)
    no_of_beds = models.IntegerField(default=1, null=True)
    country = models.CharField(max_length=150, null=True)



from rest_framework import serializers



class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = '__all__'
    