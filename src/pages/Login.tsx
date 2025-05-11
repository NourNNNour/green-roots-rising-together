
import MainLayout from '@/components/layout/MainLayout';
import LoginForm from '@/components/auth/LoginForm';
import { Leaf } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Login = () => {
  const { t, language } = useLanguage();
  
  // SEO metadata
  const pageTitle = language === 'ar' ? 'تسجيل الدخول | الأخضر' : 'Log In | Alakhdar';
  const pageDescription = language === 'ar'
    ? 'تسجيل الدخول إلى حسابك في الأخضر للمساعدة في حماية كوكبنا من خلال مبادرات الحفاظ على البيئة.'
    : 'Log in to your Alakhdar account to help protect our planet through environmental conservation initiatives.';
  
  return (
    <MainLayout
      title={pageTitle}
      description={pageDescription}
      noindex={false} // Allow indexing for login page
    >
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div className="text-center">
            <div className="flex justify-center">
              <Leaf className="h-12 w-12 text-green-500" />
            </div>
            <h1 className="mt-6 text-3xl font-bold text-gray-900">{t('nav.login')}</h1>
            <p className="mt-2 text-gray-600">{t('project.name')}</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
