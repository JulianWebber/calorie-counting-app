import React, { useState } from 'react';
import { db } from '../../utils/firebaseConfig';

const LogMeal = ({ userId }) => {
  const [mealData, setMealData] = useState({
    date: '',
    time: '',
    mealType: '',
    foods: [],
    totalCalories: 0,
    totalMacronutrients: { protein: 0, carbohydrates: 0, fat: 0 },
  });

  const handleChange = (e) => {
    setMealData({ ...mealData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await db.collection('meals').add({
        userId,
        ...mealData,
      });
    } catch (error) {
      console.error('Error logging meal:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields for meal data */}
      <input type="date" name="date" value={mealData.date} onChange={handleChange} required />
      <input type="time" name="time" value={mealData.time} onChange={handleChange} required />
      {/* Other form fields */}
      <button type="submit">Log Meal</button>
    </form>
  );
};

export default LogMeal;