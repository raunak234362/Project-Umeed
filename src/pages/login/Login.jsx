// Import necessary Firebase functions and hooks
// import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase/firebase"; // Adjust the path as per your project structure
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const auth = getAuth(app);
  console.log(auth);
  const handleLogin = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      alert("Login successful!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-b from-blue-gray-600 to-bg-blue-600  mx-auto p-4">
      <div className="text-white text-center text-2xl font-bold py-4">
        Welcome Back to the Umeed Kiran Admin Portal
      </div>
      <div className=" w-full flex h-full justify-center items-center">
        <div className="bg-white p-4 rounded-lg shadow-lg w-5/12">
          <h2 className="text-center font-bold my-5 text-2xl">Login</h2>
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
            <div>
              <label>Email:</label>
              <input
                type="email"
                className="w-full border border-blue-gray-300 p-2 rounded-lg"
                {...register("email", { required: "Email is required" })}
              />
            </div>

            <div>
              <label>Password:</label>
              <input
                type="password"
                className="w-full border border-blue-gray-300 p-2 rounded-lg"
                {...register("password", { required: "Password is required" })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-lg"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
