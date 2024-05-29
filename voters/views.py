from rest_framework import generics
from .models import Voter
from .serializers import VoterSerializer
from rest_framework.permissions import IsAuthenticated

class VoterListView(generics.ListAPIView):
    queryset = Voter.objects.all()
    serializer_class = VoterSerializer

class VoterDetailView(generics.RetrieveAPIView):
    queryset = Voter.objects.all()
    serializer_class = VoterSerializer
    lookup_field = 'voter_id'
    permission_classes = [IsAuthenticated]