from django.urls import path
from .views import VoterListView, VoterDetailView

urlpatterns = [
    path('voters/', VoterListView.as_view(), name='voter-list'),
    path('voters/<str:voter_id>/', VoterDetailView.as_view(), name='voter-detail'),
]
