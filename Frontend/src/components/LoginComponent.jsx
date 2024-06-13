import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const loginUser = useCallback(async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("https://panasonic-pioneers-062.onrender.com/user/login", user, {
        headers: {
          'Content-Type': 'application/json'
         }
      });
      console.log("Login successful:", response.data);
      setUser({ email: "", password: "" });
      setError(null);
      // Redirect user to another page after successful login
      navigate('/home');
    } catch (error) {
      console.error("Error while logging in:", error.message);
      setError(error.message);
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={loginUser} className="space-y-6 lg:w-2/5 sm:w-3/5 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Login</h2>

        <div className="space-y-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your Email"
            value={user.email}
            onChange={ onChangeHandler }
          />
        </div>

        <div className="space-y-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="current-password"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Your Password"
            value={user.password}
            onChange={ onChangeHandler }
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </div>

        {error && <div className="text-red-600 text-center mt-4">{error}</div>}
      </form>
    </div>
  );
}

export default Login;
