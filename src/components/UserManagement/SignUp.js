import React, { useState } from 'react';
import { auth, db } from '../../utils/firebaseConfig';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    height: '',
    currentWeight: '',
    goalWeight: '',
    activityLevel: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(formData.email, formData.password);
      const user = userCredential.user;
      await db.collection('users').doc(user.uid).set({
        username: formData.username,
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender,
        height: formData.height,
        currentWeight: formData.currentWeight,
        goalWeight: formData.goalWeight,
        activityLevel: formData.activityLevel,
      });
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields for user data */}
      <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
      {/* Other form fields */}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;