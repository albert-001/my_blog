from django.shortcuts import render


def bike_key(request):
    return render(request, 'bike_keys.html', {})