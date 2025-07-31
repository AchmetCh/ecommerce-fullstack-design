import React, { useState, useEffect } from 'react'
import { useAuth } from '../../ContextApi';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { backendApi } from '../services/Api';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
  const { login, user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate('/'); // Redirect to home if user is already logged in
    }
  }, [user, navigate]);
  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match', {
        position: 'top-right',
        duration: 3000,
      });
      return;
    }
    try {
      const response = await axios.post(`${backendApi}/auth/register`, { email, password });
      login(response.data.token);
      navigate('/'); // Redirect to home after successful registration
    } catch (error) {
      console.error('Registration failed:', error.response ? error.response.data : error.message);
      toast.error(error.response ? error.response.data.message : 'Registration failed. Please try again.', {
        position: 'top-right',
        duration: 3000,
      });
    }
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Register Page</h1>
      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
          Register
        </button>
      </form>
      <p className="mt-4">
        Already have an account?{' '}
        <Link to="/login" className="text-blue-500 hover:underline">
          Login
        </Link>
      </p>
      <Toaster />
    </div>
  )
}

export default Register
