import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import api from "../api/axiosInterceptors";
import { useAppDispatch } from '../app/hooks';
import { setCredentials } from '../features/auth/authSlice';

type LoginFormData = {
    email: string;
    password: string;
}

const Login = () => {
    const dispatch = useAppDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<LoginFormData>()

    const navigate = useNavigate()

    const onSubmit = async (data: LoginFormData) => {
        try {
            const response = await api.post("/auth/login", data)

            const result = response.data
            console.log(result)

            if(!result.token) {
                throw new Error(result.message || "Login Failed")
            }

            localStorage.setItem("token", result.token)

            dispatch(setCredentials(result.user))

            navigate("/")

        } catch(error) {
            console.log(error)
        }

    
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">

                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Welcome Back
                    </h1>
                    <p className="mt-2 text-sm text-gray-500">
                        Sign in to your employee dashboard
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-gray-700"
                        >
                            Email address
                        </label>

                        <input
                            type="email"
                            placeholder="johndoe@example.com"
                            {...register("email", {
                                required: "Email is required"
                            })}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />

                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>



                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="mb-2 block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>

                        <input
                            type='password'
                            placeholder="Enter your password"
                            {...register('password', {
                                required: "Password is required"
                            })}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                 

                    {/* Submit button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isSubmitting ? "Signing in..." : "Sign In"}
                    </button>

                </form>

                {/* Register link */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="font-medium text-blue-600 hover:text-blue-700"
                    >
                        Register
                    </Link>
                </p>

            </div>
        </div>
    );

}

export default Login
