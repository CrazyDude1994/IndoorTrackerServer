from __future__ import unicode_literals

from django.db import models

# Create your models here.
from django.db.models.deletion import CASCADE


class Room(models.Model):
    name = models.CharField(max_length=50)
    width = models.IntegerField()
    height = models.IntegerField()

    def __str__(self):
        return "{0}".format(self.name)


class ClientPosition(models.Model):
    name = models.CharField(max_length=50)
    x = models.FloatField()
    y = models.FloatField()
    room = models.ForeignKey(Room, on_delete=CASCADE)

    def __str__(self):
        return "{0} ({1})".format(self.name, self.room)
