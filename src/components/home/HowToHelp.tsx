
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { UserPlus, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HowToHelp = () => {
  const { t } = useLanguage();
  
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('help.title')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('help.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Volunteer */}
          <div className="bg-green-500/10 rounded-lg p-8">
            <div className="mb-6 flex justify-center">
              <div className="bg-green-500 text-white rounded-full p-3">
                <UserPlus size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">{t('help.volunteer.title')}</h3>
            <p className="text-gray-700 mb-6 text-center">
              {t('help.volunteer.description')}
            </p>
            <div className="flex justify-center">
              <Link to="/volunteer">
                <Button className="bg-green-500 hover:bg-green-600">{t('help.volunteer.button')}</Button>
              </Link>
            </div>
          </div>

          {/* Donate */}
          <div className="bg-earth-500/10 rounded-lg p-8">
            <div className="mb-6 flex justify-center">
              <div className="bg-earth-500 text-white rounded-full p-3">
                <Heart size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">{t('help.donate.title')}</h3>
            <p className="text-gray-700 mb-6 text-center">
              {t('help.donate.description')}
            </p>
            <div className="flex justify-center">
              <Link to="/donate">
                <Button className="bg-earth-500 hover:bg-earth-600">{t('help.donate.button')}</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
