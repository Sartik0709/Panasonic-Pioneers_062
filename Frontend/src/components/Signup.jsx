// import React from 'react'

import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from 'axios';
const Signup = () => {

  const [user, setUser] = useState({name:"", email: "", password: "",role:""});
  const [error, setError] = useState();
  const navigate = useNavigate();

  console.log("user" + user);

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  //hangel registeration
  const registerUser = useCallback(async(e)=>{
    try {
    e.preventDefault();
    // setLoading(true);
    const response = await axios.post("https://panasonic-pioneers-062.onrender.com/user/register" , user,{
           headers: {
               'Content-Type': 'application/json'
               }
    });
     
    console.log("console form registerUser :", response);
    // localStorage.setItem("user", JSON.stringify(response));
    // localStorage.setItem("userName", JSON.stringify(response.name));

    setUser(response); 
    setError(null);
    } catch (error) {
       console.log("error while register :", error.message);
       setError(error);
      //  setLoading(false)
    }
    finally{
      //  setLoading(false);
    }
   },[]);
  return (
    <>
     <form  onSubmit={registerUser}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 border-amber-950 sm:grid-cols-6 border-amber-950">

            {/* nameof user */}
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="name"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Enter your username"
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
            </div>

            {/* Emailof user */}
            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                  <input
                     type="email"
                     id="email"
                     name="email"
                     autoComplete="email"
                    //   className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     placeholder=" Enter your Email"
                     onChange={onChangeHandler}
                  />
              </div>
            </div>

            {/* password */}
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Enter Your Password"
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
            </div>

             {/* confirm password */}
             <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                 Confirm Password
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="password"
                    name="confirmpassword"
                    id="confirmpassword"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Re-Enter Your Password"
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
            </div>

            {/* Role of the user */}
            <div className="sm:col-span-3">
              <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">
                Role
              </label>
              <div className="mt-2">
                <select
                  id="Role"
                  name="role"
                  autoComplete="role-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option></option>
                  <option>Adopter</option>
                  <option>PetCareProvider</option>
                  <option>Shelter</option>
                  <option>Customer</option>
                </select>
              </div>
            </div>

            </div>
        </div>

     

       
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        {/* <button type="button" className="text-sm font-semibold leading-6 text-gray-900" >
          Cancel
        </button> */}
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
         Register User
        </button>
      </div>
    </form>
    </>
  )
}

export default Signup
