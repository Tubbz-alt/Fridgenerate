from django.contrib import admin
from .models import User, Ingredient, Fridge, Recipe

admin.site.register(User)
admin.site.register(Ingredient)
admin.site.register(Fridge)
admin.site.register(Recipe)