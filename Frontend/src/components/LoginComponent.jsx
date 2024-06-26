import { useCallback, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "../redux/action/actionTypes";
import { useNavigate } from "react-router";


const Login = () => {
  const [user, setUser] = useState({ email: "", password: ""});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector(state => state.loginData);
 
  console.log("Login users:", users); // Log users from store

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };


  const handleForgot = () => {
    console.log("Forgot password button clicked");
    navigate('/forgot')

  };

  // //handle Forget
  // const handleForgot=()=>{
  //   console.log("forget Password Trigger");
  // }


  const onSubmitHandler = useCallback(async (e) => {
    e.preventDefault();
    dispatch({ type: LOGIN_REQUEST });
    try {
      const response = await axios.post("https://panasonic-pioneers-062.onrender.com/user/login", user, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log("response data:", response.data); // Log the response data
      dispatch({ type: LOGIN_SUCCESS, payload: { user: response.data.user } });
      setUser({email: "", password: ""});
      localStorage.setItem("UserName",JSON.stringify(response.data.user.userName))
      // console.log("role :",response.data.user.role);
      if(response.data.user.role === 'Admin'){
        navigate('/adminPage');
      }else{
        navigate('/home');
      }
    } catch (error) {
      dispatch({ type: LOGIN_ERROR, payload: { error: error.message } });
      alert("error :",error.message);
    }
  }, [user, dispatch,navigate]);

  return (
    <div className="h-screen flex flex-col md:flex-row justify-evenly items-center bg-gradient-to-r from-orange-400 to-white p-4">
      {/* Left Side: Welcome Message and Login Illustration */}
      <div className="hidden md:flex">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-orange-700 mb-4">Welcome Back!</h2>
          <p className="text-lg text-gray-800 mb-8">
            Welcome back! Log in to continue caring for your pets and keep your pets happy and healthy.
          </p>
          {/* Placeholder for Login Illustration or Logo */}
          <div className="flex justify-center mb-8">
            <img src="https://picjj.com/images/2024/06/14/W67Kbe.png" alt="Login Illustration" className="w-40 h-40 object-cover rounded-full shadow-md" />
          </div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-center text-orange-700 mb-4">Login</h2>
        <form onSubmit={onSubmitHandler} className="space-y-4">
          <div className="space-y-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              className="block w-full border-gray-300 rounded-md min-h-9 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your Email"
              value={user.email}
              onChange={onChangeHandler}
              required
            />
          </div>

          <div className="space-y-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              className="block w-full border-gray-300 rounded-md min-h-9 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Your Password"
              value={user.password}
              onChange={onChangeHandler}
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-orange-700 bg-orange-200 hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </div>

          <p
            onClick={handleForgot}
            className="text-sm text-center text-orange-700 cursor-pointer mt-4"
          >
            Forgot password?
          </p>

          {error && <div className="text-red-600 text-sm">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Login;