import { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

const registerSchema = z.object({
  username: z.string()
    .min(3, { message: "Username must be at least 3 characters" })
    .max(50, { message: "Username must be less than 50 characters" }),
  email: z.string()
    .email({ message: "Please enter a valid email address" }),
  password: z.string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(100, { message: "Password must be less than 100 characters" }),
  password2: z.string()
}).refine(data => data.password === data.password2, {
  message: "Passwords don't match",
  path: ["password2"]
});

type RegisterInputs = z.infer<typeof registerSchema>;

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    setError,
    clearErrors
  } = useForm<RegisterInputs & { root?: { serverError?: string } }>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      password2: ''
    }
  });

  const onSubmit = async (data: RegisterInputs) => {
    setIsLoading(true);
    clearErrors('root.serverError');
    
    try {
      await registerUser(data.username, data.email, data.password);
      navigate('/login');
    } catch (err) {
      console.error(err);
      
      if (err instanceof AxiosError) {
        const errors = err.response?.data;
        
        if (errors.username) {
          setError('username', { type: 'server', message: errors.username[0] });
        } else if (errors.email) {
          setError('email', { type: 'server', message: errors.email[0] });
        } else if (errors.password) {
          setError('password', { type: 'server', message: errors.password[0] });
        } else {
          setError('root.serverError', { 
            type: 'server', 
            message: 'An unexpected error occurred. Please try again.' 
          });
        }
      } else {
        setError('root.serverError', { 
          type: 'server', 
          message: 'An unexpected error occurred. Please try again.' 
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create an account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Join us today and start your journey
          </p>
        </div>
        
        {errors.root?.serverError && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">{errors.root.serverError.message}</p>
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                className={`mt-1 block w-full px-3 py-2 border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                {...register("username")}
              />
              {errors.username && (
                <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Create a password"
                className={`mt-1 block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                {...register("password")}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="password2" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                id="password2"
                type="password"
                placeholder="Confirm your password"
                className={`mt-1 block w-full px-3 py-2 border ${errors.password2 ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                {...register("password2")}
              />
              {errors.password2 && (
                <p className="mt-1 text-sm text-red-600">{errors.password2.message}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 disabled:bg-indigo-400"
            >
              {isLoading ? 'Registering...' : 'Register'}
            </button>
          </div>
          
          <div className="text-center text-sm">
            <p className="text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;