import firebase_admin
from firebase_admin import firestore

firebase_admin.initialize_app()

db = firestore.client()

def log_meal(data):
    db.collection('meals').add({
        'user_id': data['user_id'],
        'date': data['date'],
        'time': data['time'],
        'meal_type': data['meal_type'],
        'foods': data['foods'],
        'total_calories': data['total_calories'],
        'total_macronutrients': data['total_macronutrients'],
    })