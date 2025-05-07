
import MainLayout from '@/components/layout/MainLayout';
import LoginForm from '@/components/auth/LoginForm';
import { Leaf } from 'lucide-react';

const Login = () => {
  return (
    <MainLayout>
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div className="text-center">
            <div className="flex justify-center">
              <Leaf className="h-12 w-12 text-green-500" />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome back</h2>
            <p className="mt-2 text-gray-600">Sign in to your GreenRoots account</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
