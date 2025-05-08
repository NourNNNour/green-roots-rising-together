
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, Clock, Users, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';

interface EventType {
  id: string;
  title: string;
  date: Date;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
  attendees: number;
  capacity: number;
  category: string;
}

const Events = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  // Sample events data - in a real app, this would come from an API
  const events: EventType[] = [
    {
      id: "tree-planting-day",
      title: language === 'ar' ? "يوم زراعة الأشجار المجتمعي" : "Community Tree Planting Day",
      date: new Date(2025, 4, 15),
      time: language === 'ar' ? "9:00 صباحًا - 1:00 مساءً" : "9:00 AM - 1:00 PM",
      location: language === 'ar' ? "المتنزه المركزي" : "Central Park",
      description: language === 'ar' ? "انضم إلينا لزراعة 100 شجرة محلية في متنزهنا المركزي. سيتم توفير جميع المعدات والتدريب والغداء للمتطوعين." : "Join us to plant 100 native trees in our central park. All equipment, training, and lunch will be provided for volunteers.",
      imageUrl: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&w=800&q=80",
      attendees: 42,
      capacity: 75,
      category: "planting"
    },
    {
      id: "workshop-composting",
      title: language === 'ar' ? "ورشة عمل: السماد المنزلي" : "Workshop: Home Composting",
      date: new Date(2025, 4, 22),
      time: language === 'ar' ? "3:00 مساءً - 5:00 مساءً" : "3:00 PM - 5:00 PM",
      location: language === 'ar' ? "المركز المجتمعي" : "Community Center",
      description: language === 'ar' ? "تعلم كيفية إنشاء وصيانة نظام سماد منزلي في هذه الورشة العملية. سيحصل كل مشارك على مجموعة أدوات للبدء." : "Learn how to create and maintain a home composting system in this hands-on workshop. Each participant will receive a starter kit.",
      imageUrl: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=800&q=80",
      attendees: 18,
      capacity: 30,
      category: "education"
    },
    {
      id: "beach-cleanup",
      title: language === 'ar' ? "حملة تنظيف الشاطئ" : "Beach Cleanup Drive",
      date: new Date(2025, 5, 5),
      time: language === 'ar' ? "8:00 صباحًا - 12:00 ظهرًا" : "8:00 AM - 12:00 PM",
      location: language === 'ar' ? "شاطئ السندباد" : "Sunset Beach",
      description: language === 'ar' ? "ساعدنا في تنظيف شاطئنا المحلي من البلاستيك والمخلفات. سيتم توفير القفازات وأكياس القمامة وأدوات التقاط." : "Help us clean our local beach from plastic and debris. Gloves, trash bags, and pickup tools will be provided.",
      imageUrl: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=800&q=80",
      attendees: 30,
      capacity: 50,
      category: "cleanup"
    },
    {
      id: "fundraiser-dinner",
      title: language === 'ar' ? "عشاء جمع التبرعات السنوي" : "Annual Fundraising Dinner",
      date: new Date(2025, 5, 15),
      time: language === 'ar' ? "7:00 مساءً - 10:00 مساءً" : "7:00 PM - 10:00 PM",
      location: language === 'ar' ? "فندق غرين فيو" : "Green View Hotel",
      description: language === 'ar' ? "انضم إلينا لعشاء راقٍ مع محاضرين رئيسيين ومزاد صامت لدعم مبادراتنا البيئية المستمرة. تذاكر بقيمة 75 دولارًا للشخص الواحد." : "Join us for an elegant dinner with keynote speakers and a silent auction to support our ongoing environmental initiatives. Tickets are $75 per person.",
      imageUrl: "https://images.unsplash.com/photo-1565533620429-f15402136cf7?auto=format&fit=crop&w=800&q=80",
      attendees: 85,
      capacity: 120,
      category: "fundraiser"
    },
    {
      id: "nature-walk",
      title: language === 'ar' ? "مشي طبيعي مع خبير بيئي" : "Nature Walk with Environmental Expert",
      date: new Date(2025, 5, 26),
      time: language === 'ar' ? "10:00 صباحًا - 12:00 ظهرًا" : "10:00 AM - 12:00 PM",
      location: language === 'ar' ? "محمية أوك ريدج" : "Oak Ridge Nature Reserve",
      description: language === 'ar' ? "انضم إلى عالم البيئة د. سارة لي في جولة تعليمية من خلال محميتنا المحلية، مع التركيز على النباتات والحيوانات المحلية." : "Join environmental scientist Dr. Sarah Lee on an educational tour through our local reserve, focusing on native plants and animals.",
      imageUrl: "https://images.unsplash.com/photo-1507623502571-5fda9a16e914?auto=format&fit=crop&w=800&q=80",
      attendees: 22,
      capacity: 25,
      category: "education"
    }
  ];

  // Filter events by category
  const filteredEvents = activeCategory === 'all' 
    ? events 
    : events.filter(event => event.category === activeCategory);

  // Group events by month
  const eventsByMonth: { [key: string]: EventType[] } = {};
  
  filteredEvents.forEach(event => {
    // Format the month name according to language
    const monthKey = format(event.date, 'MMMM yyyy', { locale: language === 'ar' ? ar : undefined });
    
    if (!eventsByMonth[monthKey]) {
      eventsByMonth[monthKey] = [];
    }
    eventsByMonth[monthKey].push(event);
  });

  // Render event cards
  const renderEventCard = (event: EventType) => {
    const formattedDate = format(event.date, language === 'ar' ? 'dd MMMM' : 'MMMM dd', { locale: language === 'ar' ? ar : undefined });
    const percentFull = (event.attendees / event.capacity) * 100;
    
    return (
      <Card key={event.id} className="overflow-hidden">
        <div className="h-48 overflow-hidden">
          <img 
            src={event.imageUrl} 
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle>{event.title}</CardTitle>
          <div className="text-sm text-gray-500 space-y-1">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4" />
              <span>{event.location}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">{event.description}</p>
          
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium flex items-center">
                <Users className="mr-1 h-4 w-4" />
                {event.attendees} / {event.capacity}
              </span>
              <span className="font-medium">{percentFull.toFixed(0)}% {t('events.full')}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${percentFull > 80 ? 'bg-orange-500' : 'bg-green-500'}`} 
                style={{ width: `${percentFull}%` }}
              ></div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-green-500 hover:bg-green-600">
            {t('events.register')}
          </Button>
        </CardFooter>
      </Card>
    );
  };

  // Category options
  const categories = [
    { id: 'all', label: language === 'ar' ? 'الكل' : 'All Events' },
    { id: 'planting', label: language === 'ar' ? 'زراعة' : 'Planting' },
    { id: 'cleanup', label: language === 'ar' ? 'تنظيف' : 'Cleanup' },
    { id: 'education', label: language === 'ar' ? 'تعليم' : 'Education' },
    { id: 'fundraiser', label: language === 'ar' ? 'جمع تبرعات' : 'Fundraiser' }
  ];

  return (
    <MainLayout>
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {t('events.title')}
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            {t('events.description')}
          </p>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        {/* Category filter */}
        <div className="mb-8 flex justify-center">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full max-w-2xl">
            <TabsList className="grid grid-cols-3 md:grid-cols-5">
              {categories.map(category => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Events by month */}
        {Object.keys(eventsByMonth).length > 0 ? (
          Object.entries(eventsByMonth).map(([month, monthEvents]) => (
            <div key={month} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-green-700 border-b pb-2">{month}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {monthEvents.map(event => renderEventCard(event))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center p-12 bg-gray-50 rounded-lg">
            <User className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">{t('events.noEvents')}</h3>
            <p className="mt-2 text-gray-500">{t('events.checkBack')}</p>
          </div>
        )}

        {/* Subscribe to calendar */}
        <div className="bg-green-50 rounded-lg p-8 text-center mt-12">
          <div className="mb-4 flex justify-center">
            <div className="bg-green-100 text-green-600 rounded-full p-3">
              <Calendar className="h-6 w-6" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-green-700">{t('events.stayUpdated')}</h3>
          <p className="mb-6 max-w-2xl mx-auto text-gray-700">
            {t('events.calendarDescription')}
          </p>
          <Button size="lg" className="bg-green-500 hover:bg-green-600">
            {t('events.subscribeCalendar')}
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Events;
