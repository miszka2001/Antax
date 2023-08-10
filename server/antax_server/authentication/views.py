from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import UserCreateSerialiazer
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.authentication import JWTAuthentication


class NewUserCreate(APIView):
    permission_classes = [AllowAny]
    authentication_classes = [JWTAuthentication]

    def post(self, request):
        create_serialiazer = UserCreateSerialiazer(data=request.data)
        print(create_serialiazer)
        if create_serialiazer.is_valid():
            new_user = create_serialiazer.save()
            if new_user:
                return Response(status=status.HTTP_201_CREATED)
        return Response(create_serialiazer.errors, status=status.HTTP_400_BAD_REQUEST)
