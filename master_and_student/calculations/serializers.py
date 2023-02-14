from .models import TaskDetails
from rest_framework import serializers


class TaskDetailsSerializer(serializers.ModelSerializer):
    first_name=serializers.ReadOnlyField(source="student.first_name",read_only=True)
    last_name=serializers.ReadOnlyField(source="student.last_name",read_only=True)
    m_first_name=serializers.ReadOnlyField(source="master.first_name",read_only=True)
    m_last_name=serializers.ReadOnlyField(source="master.last_name",read_only=True)
    
    class Meta:
        model = TaskDetails
        fields = ["m_first_name","m_last_name","first_name","last_name","operation","input_one","input_two","result","id"]