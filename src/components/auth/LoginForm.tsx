
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import GoogleLoginButton from './GoogleLoginButton';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login API call
    setTimeout(() => {
      toast({
        title: "Login Successful",
        description: "Welcome back to " + t('project.name') + "!",
      });
      setIsLoading(false);
      // In a real app, we would redirect or update auth state here
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-6">
        <GoogleLoginButton className="mb-4" />
        <div className="relative flex items-center justify-center">
          <div className="w-full border-t border-gray-300"></div>
          <div className="relative px-4 bg-white text-sm text-gray-500">{t('auth.continue')}</div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">{t('auth.emailAddress')}</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="password">{t('auth.password')}</Label>
            <Link to="/forgot-password" className="text-sm text-green-600 hover:text-green-700">
              {t('auth.forgotPassword')}
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "..." : t('nav.login')}
        </Button>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            {t('auth.signup')}{" "}
            <Link to="/register" className="text-green-600 hover:text-green-700 font-medium">
              {t('auth.createAccount')}
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
