
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { UserPlus, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const VolunteerOpportunity = ({ 
  title, 
  location, 
  date, 
  description, 
  spots 
}: { 
  title: string;
  location: string;
  date: string;
  description: string;
  spots: number;
}) => {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
      <h3 className="font-bold text-xl mb-2 text-green-700">{title}</h3>
      <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <MapPin className="h-4 w-4 text-green-500" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4 text-green-500" />
          <span>{date}</span>
        </div>
      </div>
      <p className="mb-4 text-gray-700">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-500">
          {spots} {t('volunteer.spotsAvailable')}
        </span>
        <Button className="bg-green-500 hover:bg-green-600">
          {t('volunteer.signUp')}
        </Button>
      </div>
    </div>
  );
};

const Volunteer = () => {
  const { t, language } = useLanguage();

  // Sample opportunities data - in a real app, this would come from an API
  const opportunities = [
    {
      id: 1,
      title: language === 'ar' ? "زراعة الأشجار في المتنزه المركزي" : "Tree Planting in Central Park",
      location: language === 'ar' ? "المتنزه المركزي" : "Central Park",
      date: language === 'ar' ? "السبت، 15 مايو، 9 صباحًا - 1 مساءً" : "Saturday, May 15, 9 AM - 1 PM",
      description: language === 'ar' ? "انضم إلينا لزراعة 100 شجرة محلية في المتنزه المركزي. سيتم توفير جميع المعدات والتدريب." : "Join us to plant 100 native trees in Central Park. All equipment and training provided.",
      spots: 15
    },
    {
      id: 2,
      title: language === 'ar' ? "تنظيف الشاطئ الشهري" : "Monthly Beach Cleanup",
      location: language === 'ar' ? "شاطئ السندباد" : "Sunset Beach",
      date: language === 'ar' ? "الأحد، 23 مايو، 8 صباحًا - 11 صباحًا" : "Sunday, May 23, 8 AM - 11 AM",
      description: language === 'ar' ? "ساعدنا في تنظيف شاطئنا المحلي من البلاستيك والنفايات. أحضر قفازات إذا كان لديك!" : "Help us clean our local beach from plastic and debris. Bring gloves if you have them!",
      spots: 20
    },
    {
      id: 3,
      title: language === 'ar' ? "ورشة عمل الحدائق المجتمعية" : "Community Garden Workshop",
      location: language === 'ar' ? "حديقة الحي الشرقي" : "East Neighborhood Garden",
      date: language === 'ar' ? "الثلاثاء، 18 مايو، 4 مساءً - 6 مساءً" : "Tuesday, May 18, 4 PM - 6 PM",
      description: language === 'ar' ? "تعلم كيفية زراعة الخضروات العضوية وصيانة حديقة مستدامة في هذه الورشة العملية." : "Learn how to grow organic vegetables and maintain a sustainable garden in this hands-on workshop.",
      spots: 12
    },
    {
      id: 4,
      title: language === 'ar' ? "تعليم الأطفال عن البيئة" : "Environmental Education for Kids",
      location: language === 'ar' ? "المدرسة الابتدائية المركزية" : "Central Elementary School",
      date: language === 'ar' ? "الخميس، 20 مايو، 1 مساءً - 3 مساءً" : "Thursday, May 20, 1 PM - 3 PM",
      description: language === 'ar' ? "كن مرشدًا متطوعًا في برنامجنا التعليمي البيئي للأطفال. سيتم توفير جميع المواد." : "Be a volunteer guide in our environmental education program for kids. All materials provided.",
      spots: 8
    }
  ];

  return (
    <MainLayout>
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {t('volunteer.title')}
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            {t('volunteer.description')}
          </p>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        {/* Opportunities Section - Now FIRST */}
        <h2 className="text-3xl font-bold text-center mb-8 text-green-700">{t('volunteer.opportunitiesTitle')}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {opportunities.length > 0 ? (
            opportunities.map((opportunity) => (
              <VolunteerOpportunity key={opportunity.id} {...opportunity} />
            ))
          ) : (
            <div className="col-span-2 text-center p-8 bg-gray-50 rounded-lg">
              <p className="text-gray-600">{t('volunteer.noOpportunities')}</p>
            </div>
          )}
        </div>

        {/* Why Volunteer Section - Now SECOND */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-700">{t('volunteer.whyTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 text-green-600 rounded-full p-4 inline-flex mb-4">
                <UserPlus className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('volunteer.reason1Title')}</h3>
              <p className="text-gray-600">{t('volunteer.reason1Text')}</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 text-green-600 rounded-full p-4 inline-flex mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('volunteer.reason2Title')}</h3>
              <p className="text-gray-600">{t('volunteer.reason2Text')}</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 text-green-600 rounded-full p-4 inline-flex mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('volunteer.reason3Title')}</h3>
              <p className="text-gray-600">{t('volunteer.reason3Text')}</p>
            </div>
          </div>
        </div>

        {/* Can't find section */}
        <div className="bg-green-50 rounded-lg p-8 text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-green-700">{t('volunteer.cantFindTitle')}</h3>
          <p className="mb-6 max-w-2xl mx-auto text-gray-700">
            {t('volunteer.cantFindText')}
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-green-500 hover:bg-green-600">
              {t('volunteer.contactUs')}
            </Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default Volunteer;
