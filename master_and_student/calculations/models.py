from django.db import models
from accounts.models import Account
# Create your models here.
class TaskDetails(models.Model):
    input_one = models.IntegerField(null=True,blank=True)
    input_two = models.IntegerField(null=True,blank=True)
    result = models.IntegerField(null=True,blank=True)
    operation = models.CharField(max_length=20)
    master = models.ForeignKey(Account,on_delete=models.CASCADE,related_name='master')
    student = models.ForeignKey(Account,on_delete=models.CASCADE,related_name='student')
    created_at = models.DateTimeField(auto_now_add=True)
    
    