// src/components/Login.js
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/authSlice';

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleForgot = () => {
    console.log("Forgot password button clicked");
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await dispatch(loginUser(user));
    navigate('/home');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={onSubmitHandler} className="space-y-6 lg:w-2/5 sm:w-3/5 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Login</h2>

        <div className="space-y-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            aria-label="Email address"
            className="block w-full border-gray-300 rounded-md min-h-9 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your Email"
            value={user.email}
            onChange={onChangeHandler}
          />
        </div>

        <div className="space-y-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="current-password"
            aria-label="Password"
            className="block w-full border-gray-300 rounded-md min-h-9 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Your Password"
            value={user.password}
            onChange={onChangeHandler}
          />
        </div>

        <div className="flex flex-col gap-6">
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Login
          </button>
        </div>

        <p
          onClick={handleForgot}
          className="flex items-center justify-center text-l text-red-500 cursor-pointer"
        >
          Forgot password
        </p>

        {error && <div className="text-red-600 text-center mt-4">{error}</div>}
      </form>
    </div>
  );
}

export default Login;
