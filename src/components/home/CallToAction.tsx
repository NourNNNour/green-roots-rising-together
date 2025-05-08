
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const CallToAction = () => {
  const { t } = useLanguage();
  
  return (
    <section className="bg-green-600 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cta.title')}</h2>
        <p className="text-xl md:max-w-2xl mx-auto mb-8">
          {t('cta.description')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/volunteer">
            <Button size="lg" className="bg-white text-green-600 hover:bg-cream-300">{t('cta.signup')}</Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">{t('cta.contact')}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
