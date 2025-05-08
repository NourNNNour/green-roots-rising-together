
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail } from "lucide-react";

interface GoogleLoginButtonProps {
  className?: string;
}

const GoogleLoginButton = ({ className = "" }: GoogleLoginButtonProps) => {
  const { t } = useLanguage();
  
  const handleGoogleLogin = async () => {
    try {
      // This would integrate with a real authentication provider in a real app
      console.log("Google login clicked");
      // In a real app with Supabase or Firebase, this would call their auth methods
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      className={`w-full ${className}`}
      onClick={handleGoogleLogin}
    >
      <Mail className="mr-2 h-4 w-4" />
      {t('auth.login')}
    </Button>
  );
};

export default GoogleLoginButton;
