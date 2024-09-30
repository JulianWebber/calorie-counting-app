import firebase_admin
from firebase_admin import auth, firestore

firebase_admin.initialize_app()

db = firestore.client()

def create_user(data):
    user = auth.create_user(
        email=data['email'],
        password=data['password'],
        display_name=data['username']
    )
    db.collection('users').document(user.uid).set({
        'username': data['username'],
        'email': data['email'],
        'first_name': data['first_name'],
        'last_name': data['last_name'],
        'date_of_birth': data['date_of_birth'],
        'gender': data['gender'],
        'height': data['height'],
        'current_weight': data['current_weight'],
        'goal_weight': data['goal_weight'],
        'activity_level': data['activity_level'],
    })
    return user