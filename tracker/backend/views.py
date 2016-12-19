from django.core.exceptions import ObjectDoesNotExist
from django.http.response import HttpResponse
from django.shortcuts import render
from models import Room, ClientPosition


# Create your views here.
def room_list(request):
    return Room.objects.all()


def room(request, room_id):
    return {"room": Room.objects.get(id=room_id),
            "rooms" : room_list(request),
            "clients": ClientPosition.objects.filter(room=room_id)}


def add_or_update_client(request):
    if request.method == "POST":
        name = request.POST["name"]
        x = request.POST["x"]
        y = request.POST["y"]
        room_id = request.POST["room_id"]
        if x and y and room_id:
            try:
                client = ClientPosition.objects.get(room=room_id, name=name)
            except ObjectDoesNotExist:
                room = Room.objects.get(id=room_id)
                client = ClientPosition(room=room, name=name)

            client.x = x
            client.y = y
            client.save()

            return HttpResponse("{}")