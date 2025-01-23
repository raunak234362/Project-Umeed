import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase/firebase"; // Adjust the path as per your project structure
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "../../components/fields/Input";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const auth = getAuth(app);

  const handleLogin = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      alert("Login successful!");
      navigate("/admin"); // Navigate to the admin dashboard
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-b from-blue-gray-600 to-blue-600 mx-auto p-4">
      <div className="text-white text-center text-2xl font-bold py-4">
        Welcome Back to the Umeed Kiran Admin Portal
      </div>
      <div className="w-full flex h-full justify-center items-center">
        <div className="bg-white p-4 rounded-lg shadow-lg w-5/12">
          <h2 className="text-center font-bold my-5 text-2xl">Login</h2>
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
            <div>
              <label>Email:</label>
              <Input
                type="email"
                className="w-full border border-blue-gray-300 p-2 rounded-lg"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label>Password:</label>
              <Input
                type="password"
                className="w-full border border-blue-gray-300 p-2 rounded-lg"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-600 text-sm">{errors.password.message}</p>
              )}
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
