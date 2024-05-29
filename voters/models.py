from django.db import models

class Voter(models.Model):
    voter_id = models.CharField(max_length=50, unique=True)
    voter_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)
    aadhaar_number = models.CharField(max_length=12, unique=True)

    def __str__(self):
        return self.voter_name
