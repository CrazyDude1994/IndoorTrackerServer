from django.shortcuts import render
from models import Room, ClientPosition


# Create your views here.
def room_list(request):
    return Room.objects.all()


def room(request, room_id):
    return {"room" : Room.objects.get(id=room_id),
            "clients" : ClientPosition.object.get(room_i)}
