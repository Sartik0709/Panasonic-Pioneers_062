import { useState } from 'react';
import { FaPaw, FaDog, FaCat } from 'react-icons/fa';

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-orange-200 to-white">
      <div className="w-full max-w-4xl flex items-center justify-between">
        {/* Left message (Sign Up) */}
        <div
          className={`w-1/2 p-8 flex flex-col justify-center items-center transition-all duration-500 ease-in-out transform ${
            isSignUp ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
          }`}
        >
          <div className="flex justify-center mb-4">
            <FaPaw className="text-6xl text-orange-500" />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-center text-orange-700">
            Welcome Back!
          </h2>
          <p className="text-lg mb-6 text-center text-gray-600">
            Login to continue your journey with Pet Pal and stay connected with your furry friends!
          </p>
          <div className="flex justify-center space-x-4">
            <FaDog className="text-3xl text-gray-500" />
            <FaCat className="text-3xl text-gray-500" />
          </div>
        </div>

        {/* Form container */}
        <div
          className={`w-1/2 p-8 bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-500 ease-in-out transform ${
            isSignUp ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-orange-700">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </h2>
          <form className="space-y-6">
            {isSignUp && (
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="block w-full p-3 border rounded-lg"
                  placeholder="Your Name"
                />
              </div>
            )}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="block w-full p-3 border rounded-lg"
                placeholder="Email Address"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="block w-full p-3 border rounded-lg"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="block w-full py-3 mt-6 text-white bg-orange-500 hover:bg-orange-600 rounded-lg font-bold"
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </form>
          <p className="mt-6 text-center text-gray-700">
            {isSignUp ? (
              <>
                Already have an account?{' '}
                <button
                  onClick={handleToggle}
                  className="text-orange-500 hover:underline"
                >
                  Sign In
                </button>
              </>
            ) : (
              <>
                Don’t have an account?{' '}
                <button
                  onClick={handleToggle}
                  className="text-orange-500 hover:underline"
                >
                  Create one
                </button>
              </>
            )}
          </p>
        </div>

        {/* Right message (Sign In) */}
        <div
          className={`w-1/2 p-8 flex flex-col justify-center items-center transition-all duration-500 ease-in-out transform ${
            isSignUp ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <div className="flex justify-center mb-4">
            <FaPaw className="text-6xl text-orange-500" />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-center text-orange-700">
            Welcome to Pet Pal!
          </h2>
          <p className="text-lg mb-6 text-center text-gray-600">
            Join our community and make a difference in the lives of pets. We can’t wait for you to be part of the Pet Pal family!
          </p>
          <div className="flex justify-center space-x-4">
            <FaDog className="text-3xl text-gray-500" />
            <FaCat className="text-3xl text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
  