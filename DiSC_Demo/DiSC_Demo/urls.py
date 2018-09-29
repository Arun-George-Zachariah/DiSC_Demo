from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('disc/', include('configure.urls')),
    path('disc/', include('plots.urls')),
]