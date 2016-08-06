from django.db import models
from django.utils import timezone

# Create your models here.
class Post(models.Model):
	author = models.ForeignKey('auth.User')
	title = models.CharField(max_length=100)
	content = models.TextField()
	date = models.DateTimeField(default=timezone.now)

	def publish(self):
		self.date = timezone.now()
		self.save()

	def __str__(self):
		return self.title