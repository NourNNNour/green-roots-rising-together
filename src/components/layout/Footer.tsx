
import { Link } from 'react-router-dom';
import { Leaf, Heart, Twitter, Facebook } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();
  
  return (
    <footer className="bg-green-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and mission statement */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-6 w-6" />
              <span className="font-montserrat font-bold text-xl">{t('project.name')}</span>
            </div>
            <p className="text-green-50 mb-4">
              {t('footer.mission')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-cream-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-cream-300 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-green-50 hover:text-white transition-colors">{t('nav.home')}</Link>
              </li>
              <li>
                <Link to="/about" className="text-green-50 hover:text-white transition-colors">{t('nav.about')}</Link>
              </li>
              <li>
                <Link to="/projects" className="text-green-50 hover:text-white transition-colors">{t('nav.projects')}</Link>
              </li>
              <li>
                <Link to="/blog" className="text-green-50 hover:text-white transition-colors">{t('nav.blog')}</Link>
              </li>
              <li>
                <Link to="/contact" className="text-green-50 hover:text-white transition-colors">{t('nav.contact')}</Link>
              </li>
            </ul>
          </div>

          {/* Get involved */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.getInvolved')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/volunteer" className="text-green-50 hover:text-white transition-colors">{t('hero.volunteer')}</Link>
              </li>
              <li>
                <Link to="/donate" className="text-green-50 hover:text-white transition-colors">{t('hero.donate')}</Link>
              </li>
              <li>
                <Link to="/events" className="text-green-50 hover:text-white transition-colors">{language === 'ar' ? 'الفعاليات' : 'Events'}</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.contactUs')}</h3>
            <address className="not-italic text-green-50">
              <p>123 Green Street</p>
              <p>Earth City, Planet 12345</p>
              <p className="mt-2">Email: info@alakhdar.org</p>
              <p>Phone: (555) 123-4567</p>
            </address>
          </div>
        </div>

        <div className="border-t border-green-500 mt-8 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-green-50">&copy; {new Date().getFullYear()} {t('project.name')}. {t('footer.rights')}</p>
          <p className="text-green-50 mt-2 md:mt-0">
            {t('footer.made')} <Heart className="inline-block h-4 w-4 text-red-400" fill="currentColor" /> {t('footer.planet')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
