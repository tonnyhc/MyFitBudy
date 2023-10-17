from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('authentication/', include('server.authentication.urls')),
    path('workouts/', include('server.workouts.urls'))
]
