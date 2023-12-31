from django.contrib.auth import get_user_model, login, authenticate
from rest_framework import generics as rest_generic_views, views as rest_views, status
from rest_framework.authtoken import views as authtoken_views
from rest_framework.authtoken import models as authtoken_models
from rest_framework.response import Response

from server.authentication.serializers import LoginSerializer, RegisterSerializer

UserModel = get_user_model()


class LoginView(authtoken_views.ObtainAuthToken):
    authentication_classes = ()
    serializer_class = LoginSerializer
    """This view requires CSRF_TOKEN"""

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = authtoken_models.Token.objects.get_or_create(user=user)

        return Response({
            'user_id': user.pk,
            'username': user.username,
            'email': user.email,
            'token': token.key,
        })


class RegisterView(rest_generic_views.CreateAPIView):
    authentication_classes = ()
    queryset = UserModel.objects.all()
    serializer_class = RegisterSerializer

    # TODO: Write some tests
    def post(self, request, *args, **kwargs):
        # full_name = request.data.pop('full_name')

        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)

        user = serializer.save()
        # Profile.objects.create_profile(full_name, user)

        if user:
            login(request, user)
            token, created = authtoken_models.Token.objects.get_or_create(user=user)
            return Response({
                'token': token.key,
                'user_id': user.pk,
                'username': user.username,
                'email': user.email,
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LogoutView(rest_views.APIView):
    def get(self, request):
        return self.__perform_logout(request)

    def post(self, request):
        return self.__perform_logout(request)

    @staticmethod
    def __perform_logout(request):
        try:
            request.user.auth_token.delete()
            return Response({
                'message': 'User signed out'
            }, status=status.HTTP_200_OK)
        except AttributeError as e:
            return Response({
                'message': "No signed in user, cant perform sign-out!"
            }, status=status.HTTP_400_BAD_REQUEST)