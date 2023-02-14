from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Account
from calculations.models import TaskDetails
from .serializers import TaskDetailsSerializer
from django.db.models import Q

# Create your views here.

class TaskView(APIView):
    def get(self,request):
        task_log = TaskDetails.objects.filter(Q(master=request.user) | Q( student=request.user))
        serializer = TaskDetailsSerializer(task_log,many=True)
        return Response(serializer.data)
        
    def post(self,request):
        print(request.data)
        username = request.data["student"]
        operation = request.data["operation"]
        student = Account.objects.get(username=username)
        task = TaskDetails(student=student,master=request.user,operation=operation)
        task.save()
        return Response( status=status.HTTP_201_CREATED)


def expr(number,operation=None):
    if operation:
        return operation(number)
    else:
        return number
    
def zero(operation=None):
    return expr(0,operation)

def one(operation=None):
    return expr(1,operation)

def two(operation=None):
    return expr(2,operation)

def three(operation=None):
    return expr(3,operation)

def four(operation=None):
    return expr(4,operation)

def five(operation=None):
    return expr(5,operation)

def six(operation=None):
    return expr(6,operation)

def seven(operation=None):
    return expr(7,operation)

def eight(operation=None):
    return expr(8,operation)

def nine(operation=None):
    return expr(9,operation)


def plus(b):
    return lambda a:a+b

def minus(b):
    return lambda a:a-b

def into(b):
    return lambda a:a*b

def by(b):
    return lambda a:a//b

class CalculationView(APIView):
    def post(self,request):
        id = request.data["id"]
        input_one = int(request.data["input_one"])
        input_two = int(request.data["input_two"])
        A=["zero","one","two","three","four","five","six","seven","eight","nine"]
        left_operand=eval(A[input_one])
        right_operand=eval(A[input_two])
        
        task_detail = TaskDetails.objects.get(pk=id)
        if task_detail.operation=="ADDITION":
            operation = plus
            
        elif task_detail.operation == "SUBSTRACTION":
            operation = minus
            
        elif task_detail.operation == "MULTIPLICATION":
            operation = into
            
        elif task_detail.operation == "DIVISION":
            operation = by
        
        else:
             operation = None

        if operation is not None:
            result = left_operand(operation(right_operand(None)))
            task_detail.result = result
            task_detail.input_one = str(input_one)
            task_detail.input_two = str(input_two)
            task_detail.save()
        return Response( status=status.HTTP_200_OK)
    