from json import loads, dumps

from django.http.response import HttpResponse
from django.shortcuts import render
from django.views import View
from backend import views
from django.core import serializers


# Create your views here.
def main(request):
    context = {"rooms": views.room_list(request)}
    return render(request, "index.html", context)


def watch(request, room_id):
    return render(request, "watch.html", views.room(request, room_id))


def watch_json(request, room_id):
    data = views.room(request, room_id)
    return HttpResponse(serializers.serialize("json", data["clients"]), content_type="application/json")
