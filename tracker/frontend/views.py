from django.http.response import HttpResponse
from django.shortcuts import render
from django.views import View
from backend import views


# Create your views here.
def main(request):
    context = {"rooms": views.room_list(request)}
    return render(request, "index.html", context)


def watch(request, room_id):
    context = {"room" : views.room(request, room_id)}
    return render(request, "watch.html", context)
