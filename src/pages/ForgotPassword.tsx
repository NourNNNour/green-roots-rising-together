
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Leaf, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call for password reset
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: t('auth.resetLinkSent'),
        description: email,
      });
    }, 1500);
  };

  return (
    <MainLayout>
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div className="text-center">
            <div className="flex justify-center">
              <Leaf className="h-12 w-12 text-green-500" />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              {t('auth.resetPassword')}
            </h2>
            <p className="mt-2 text-gray-600">
              {t('auth.resetInstructions')}
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">{t('auth.emailAddress')}</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? '...' : t('auth.sendResetLink')}
              </Button>
              
              <div className="text-center">
                <Link 
                  to="/login" 
                  className="inline-flex items-center text-sm text-green-600 hover:text-green-700"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t('auth.backToLogin')}
                </Link>
              </div>
            </form>
          ) : (
            <div className="text-center p-6">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                {t('auth.resetLinkSent')}
              </h3>
              <p className="mt-2 text-gray-500 mb-6">
                {t('auth.resetInstructions')}
              </p>
              <Link to="/login">
                <Button variant="outline">
                  {t('auth.backToLogin')}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default ForgotPassword;
