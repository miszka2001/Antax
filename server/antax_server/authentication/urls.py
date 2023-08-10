from django.urls import path
from .views import NewUserCreate

app_name = "authentication"

urlpatterns = [
    path("registration/", NewUserCreate.as_view(), name="create_user"),
]
