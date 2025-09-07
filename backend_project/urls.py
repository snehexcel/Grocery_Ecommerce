from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello, Fastcart backend is running!")

urlpatterns = [
    path('', home),  # homepage root URL
    path('admin/', admin.site.urls),
    path('api/', include('grocery_store.urls')),
]
