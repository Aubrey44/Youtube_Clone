from django.urls import path
from comment import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
path('<str:video_id>', views.get_all_comments_by_id),
path('postto/', views.user_comments),
]


# Original url pathing

# path('', views.user_comments),
# path('<str:video_id>', views.get_all_comments),


# New Pathing
# path('/<str:video_id>', views.user_comments, views.get_all_comments)