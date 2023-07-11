from django.urls import path, include
from . import views

from .views import      ProductoListView\
                    ,   ProductoCreateView\
                    ,   ProductoUpdateView\
                    ,   ProductoDetailView\
                    ,   ProductoDeleteView\

from .router import router

from django.conf import settings
from django.contrib.staticfiles.urls import static

app_name = "productos"
urlpatterns = [
    path("",ProductoListView.as_view(),name="all"),
    path("create/",ProductoCreateView.as_view(),name="create"),
    path("<int:pk>/detail/",ProductoDetailView.as_view(),name="detail"),
    path("<int:pk>/update/",ProductoUpdateView.as_view(),name="update"),
    path("<int:pk>/delete/",ProductoDeleteView.as_view(),name="delete")
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += router.urls