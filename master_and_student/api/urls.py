from django.urls import path
from accounts.views import RegisterView,MyTokenObtainPairView,StudentsView
from calculations.views import TaskView,CalculationView
from . import views 
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)



urlpatterns = [
    path('',views.getRoutes),
    path('token/',MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='register'),
    path('students/data/', StudentsView.as_view(), name='students_data'),
    path('tasks/', TaskView.as_view(), name='task_create'),
    path('calculate/', CalculationView.as_view(), name='calculate'),
]
