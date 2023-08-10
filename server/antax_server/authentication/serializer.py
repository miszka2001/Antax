from django.contrib.auth import get_user_model

User = get_user_model()


class UserCreateSerialiazer:
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ("id", "email", "password")
