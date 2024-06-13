import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Signup = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "", role: "" });
  const [error, setError] = useState();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerUser = useCallback(async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("https://panasonic-pioneers-062.onrender.com/user/register", user, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log("Registration successful:", response.data);
      setUser({ name: "", email: "", password: "", role: "" });
      setError(null);
      // Redirect user to another page after successful registration
      navigate('/login');
    } catch (error) {
      console.error("Error while registering:", error.message);
      setError(error.message);
    }
  }, [user, navigate]);

  return (
    <div className="min-w-max flex justify-center">
      <form onSubmit={registerUser} className="space-y-6 lg:w-2/5 sm:w-3/5">
      <div className="space-y-4">
        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
        <input
          type="text"
          name="name"
          id="username"
          autoComplete="username"
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter your username"
          value={user.name}
          onChange={onChangeHandler}
        />
      </div>

      <div className="space-y-4">
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter your Email"
          value={user.email}
          onChange={onChangeHandler}
        />
      </div>

      <div className="space-y-4">
        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="current-password"
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter Your Password"
          value={user.password}
          onChange={onChangeHandler}
        />
      </div>

      {/* <div className="space-y-4">
        <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          autoComplete="current-password"
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Re-Enter Your Password"
          value={user.confirmPassword}
          onChange={onChangeHandler}
        />
      </div> */}

      <div className="space-y-4">
        <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">Role</label>
        <select
          id="role"
          name="role"
          autoComplete="role-name"
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={user.role}
          onChange={onChangeHandler}
        >
          <option value="">Select Role</option>
          <option value="Adopter">Adopter</option>
          <option value="PetCareProvider">Pet Care Provider</option>
          <option value="Shelter">Shelter</option>
          <option value="Customer">Customer</option>
        </select>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Register User
        </button>
      </div>

      {error && <div className="text-red-600">{error}</div>}
    </form>
    </div>
  );
}

export default Signup;