from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def signup(request):
    return Response({})

@api_view(['POST'])
def login(request):
    return Response({})
