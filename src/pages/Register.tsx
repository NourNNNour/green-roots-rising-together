
import MainLayout from '@/components/layout/MainLayout';
import RegisterForm from '@/components/auth/RegisterForm';
import { Leaf } from 'lucide-react';

const Register = () => {
  return (
    <MainLayout>
      <div className="min-h-[80vh] py-12 px-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="text-center">
            <div className="flex justify-center">
              <Leaf className="h-12 w-12 text-green-500" />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">Join GreenRoots</h2>
            <p className="mt-2 text-gray-600">Create your account and be part of the change</p>
          </div>
          <RegisterForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
