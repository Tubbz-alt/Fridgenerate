from django.urls import path, include
from rest_framework import routers
from . import views
# from . import api

router = routers.DefaultRouter()
router.register('ingredients', views.IngredientView)
router.register('recipes', views.RecipeView)
router.register('users', views.UserView)
router.register('fridges', views.FridgeView)

urlpatterns = [
    path('', include(router.urls)),
]
