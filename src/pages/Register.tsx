
import MainLayout from '@/components/layout/MainLayout';
import RegisterForm from '@/components/auth/RegisterForm';
import { Leaf } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Register = () => {
  const { t } = useLanguage();
  
  return (
    <MainLayout>
      <div className="min-h-[80vh] py-12 px-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="text-center">
            <div className="flex justify-center">
              <Leaf className="h-12 w-12 text-green-500" />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">{t('auth.createAccount')}</h2>
            <p className="mt-2 text-gray-600">{t('project.name')}</p>
          </div>
          <RegisterForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
