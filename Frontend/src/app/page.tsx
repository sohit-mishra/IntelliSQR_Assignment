"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/utils/validation";
import { LoginUser } from "@/services/login";
import { LoginUserModel } from "@/models/login.model";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserModel>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (formData: LoginUserModel) => {
    try {
      const response: LoginUserModel = await LoginUser(formData);
      alert(response.message ?? "Login successful!");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Welcome back!</h1>

      <div className="bg-white p-6 w-90">
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
          
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            autoComplete="off"
            className={`p-2 border rounded-lg w-full outline-none 
              ${errors.email ? "border-red-500" : "border-gray-300 focus:border-gray-500"}`}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}

          
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            autoComplete="off"
            className={`p-2 border rounded-lg w-full outline-none 
              ${errors.password ? "border-red-500" : "border-gray-300 focus:border-gray-500"}`}
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}

           <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white p-4 mt-4 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
