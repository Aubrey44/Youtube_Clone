from django.urls import path, include, re_path
from comment import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_comments),
    path('<str:video_id>', views.get_all_comments),
    # path('all/', views.get_all_comments),
]


# '<str:video_id>/'
# '<int:pk>/'