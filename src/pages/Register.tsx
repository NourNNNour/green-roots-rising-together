
import MainLayout from '@/components/layout/MainLayout';
import RegisterForm from '@/components/auth/RegisterForm';
import { Leaf } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Register = () => {
  const { t, language } = useLanguage();
  
  // SEO metadata
  const pageTitle = language === 'ar' ? 'إنشاء حساب | الأخضر' : 'Create an Account | Alakhdar';
  const pageDescription = language === 'ar'
    ? 'انضم إلى مجتمع الأخضر وساعدنا في بناء بيئة أفضل. سجل الآن للمشاركة في مبادرات الحفاظ على البيئة.'
    : 'Join the Alakhdar community and help us build a better environment. Register now to participate in environmental conservation initiatives.';
  
  return (
    <MainLayout
      title={pageTitle}
      description={pageDescription}
      noindex={false} // Allow indexing for registration page to improve conversion
    >
      <div className="min-h-[80vh] py-12 px-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="text-center">
            <div className="flex justify-center">
              <Leaf className="h-12 w-12 text-green-500" />
            </div>
            <h1 className="mt-6 text-3xl font-bold text-gray-900">{t('auth.createAccount')}</h1>
            <p className="mt-2 text-gray-600">{t('project.name')}</p>
          </div>
          <RegisterForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
