import React, { useState, useEffect } from 'react'
import { useAuth } from '../../ContextApi';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { backendApi } from '../services/Api';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const { login, user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate('/'); // Redirect to home if user is already logged in
    }
  }, [user, navigate]);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backendApi}/auth/login`, { email, password });
      login(response.data.token);
      navigate('/'); // Redirect to home after successful login
    } catch (error) {
      console.error('Login failed:', error);
      toast.error('Login failed. Please check your credentials and try again.', {
        position: 'top-right',
        duration: 3000,
      });
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Login Page</h1>
      <form onSubmit={handleLogin}>
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
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition font-medium"
        >
          Login
        </button>
      </form>
      <p className="mt-4">
        Don't have an account?{' '}
        <Link to="/register" className="text-blue-500 hover:underline">
          Register
        </Link>
      </p>
      <Toaster />
    </div>
  )
}

export default Login
