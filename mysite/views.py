from django.shortcuts import render
from django.http import JsonResponse


def bike_key(request):
    return render(request, 'bike_keys.html', {})

def keys(request):
    k = {"keys":[["65270666","8106"],["417052","0864"],["382630","1392"],
            ["354840","8824"],["336976","1267"],["163166","0610"],
            ["326216","6721"],["403304","0532"]]}
    return JsonResponse(k, safe=False)
