import React, { useEffect, useState } from 'react';
import { db } from '../../utils/firebaseConfig';

const FoodList = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      const foodCollection = await db.collection('foods').get();
      setFoods(foodCollection.docs.map(doc => doc.data()));
    };
    fetchFoods();
  }, []);

  return (
    <div>
      <h1>Food List</h1>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>{food.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;