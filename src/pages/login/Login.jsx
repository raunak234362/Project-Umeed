/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div className="bg-blue-800 h-screen items-center flex">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <div className="p-10 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1602522537969-6d3f5f7e8f1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="login"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="p-10 flex items-center justify-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 w-full"
            >
              <h2 className="text-3xl font-bold text-white text-center">
                Welcome Back
              </h2>
              <div className="space-y-4">
                <label className="text-white">Email</label>
                <input
                  type="text"
                  className="w-full border border-blue-gray-300 p-2 rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <label className="text-white">Password</label>
                <input
                  type="password"
                  className="w-full border border-blue-gray-300 p-2 rounded-lg"
                />
              </div>
              <div className="w-full justify-center flex">
                <button
                  type="submit"
                  className="w-full bg-[#FFD700] text-black p-2 rounded-lg"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
