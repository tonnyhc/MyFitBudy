from django.urls import path

from server.authentication.views import RegisterView, LogoutView, LoginView

urlpatterns = [
    path('login/', LoginView.as_view(), name='login view'),
    path('logout/', LogoutView.as_view(), name='logout view'),
    path('register/', RegisterView.as_view(), name='register view'),
]