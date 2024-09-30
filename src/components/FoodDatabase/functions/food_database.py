import firebase_admin
from firebase_admin import firestore

firebase_admin.initialize_app()

db = firestore.client()

def add_food(data):
    db.collection('foods').add({
        'name': data['name'],
        'serving_size': data['serving_size'],
        'calories_per_serving': data['calories_per_serving'],
        'macronutrients': data['macronutrients'],
        'micronutrients': data['micronutrients'],
        'barcode': data['barcode'],
        'brand_name': data['brand_name'],
    })