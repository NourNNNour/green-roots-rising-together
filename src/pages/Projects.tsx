
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Projector } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  progress: number;
  location: string;
  category: string;
}

const ProjectCard = ({ title, description, imageUrl, progress, location, category, id }: ProjectCardProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-xl text-green-700">{title}</h3>
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">{category}</span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="font-medium">{t('projects.progress')}</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
        <div className="text-sm text-gray-500 mb-4">
          <span>{location}</span>
        </div>
        <Link to={`/projects/${id}`} className="block text-center">
          <Button className="w-full bg-green-500 hover:bg-green-600">
            {t('projects.learnMore')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Projects = () => {
  const { t, language } = useLanguage();
  
  // Sample project data - in a real app, this would come from an API
  const projects = [
    {
      id: "urban-forest",
      title: language === 'ar' ? "مبادرة الغابة الحضرية" : "Urban Forest Initiative",
      description: language === 'ar' ? "تحويل المساحات الحضرية بأشجار محلية لتحسين جودة الهواء وخلق بيئات حضرية خضراء." : "Transforming city spaces with native trees to improve air quality and create green urban environments.",
      imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
      progress: 65,
      location: language === 'ar' ? "وسط المدينة" : "Downtown District",
      category: language === 'ar' ? "إعادة التشجير" : "Reforestation"
    },
    {
      id: "watershed",
      title: language === 'ar' ? "استعادة مستجمعات المياه" : "Watershed Restoration",
      description: language === 'ar' ? "إعادة تأهيل مستجمعات المياه المحلية من خلال زراعة حواجز ضفافية وإزالة الأنواع الغازية." : "Rehabilitating local watersheds by planting riparian buffers and removing invasive species.",
      imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
      progress: 42,
      location: language === 'ar' ? "منطقة وادي النهر" : "River Valley Region",
      category: language === 'ar' ? "الحفاظ على المياه" : "Water Conservation"
    },
    {
      id: "gardens",
      title: language === 'ar' ? "حدائق المجتمع" : "Community Gardens",
      description: language === 'ar' ? "إنشاء مصادر غذاء مستدامة ومساحات تعليمية من خلال حدائق يديرها المجتمع." : "Creating sustainable food sources and educational spaces through community-managed gardens.",
      imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80",
      progress: 88,
      location: language === 'ar' ? "أحياء متعددة" : "Multiple Neighborhoods",
      category: language === 'ar' ? "الأمن الغذائي" : "Food Security"
    },
    {
      id: "school-program",
      title: language === 'ar' ? "برنامج تخضير المدارس" : "School Greening Program",
      description: language === 'ar' ? "العمل مع المدارس المحلية لإنشاء مساحات خضراء وبيئات تعلم خارجية للطلاب." : "Working with local schools to create green spaces and outdoor learning environments for students.",
      imageUrl: "https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&w=800&q=80",
      progress: 25,
      location: language === 'ar' ? "مناطق مدرسية مختلفة" : "Various School Districts",
      category: language === 'ar' ? "التعليم" : "Education"
    },
    {
      id: "pollinator",
      title: language === 'ar' ? "مشروع مسار الملقحات" : "Pollinator Pathway Project",
      description: language === 'ar' ? "إنشاء حدائق متصلة من النباتات المحلية لدعم النحل والفراشات وغيرها من الملقحات." : "Establishing connected gardens of native plants to support bees, butterflies, and other pollinators.",
      imageUrl: "https://images.unsplash.com/photo-1551957402-b691e90e4541?auto=format&fit=crop&w=800&q=80",
      progress: 53,
      location: language === 'ar' ? "مبادرة على مستوى المدينة" : "Citywide Initiative",
      category: language === 'ar' ? "التنوع البيولوجي" : "Biodiversity"
    },
    {
      id: "carbon-capture",
      title: language === 'ar' ? "غابات امتصاص الكربون" : "Carbon Capture Woodlands",
      description: language === 'ar' ? "مشروع زراعة أشجار على نطاق واسع مصمم خصيصًا لزيادة امتصاص الكربون وتعويض الانبعاثات." : "Large-scale tree planting project designed specifically to maximize carbon sequestration and offset emissions.",
      imageUrl: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80",
      progress: 12,
      location: language === 'ar' ? "الضواحي الريفية" : "Rural Outskirts",
      category: language === 'ar' ? "العمل المناخي" : "Climate Action"
    }
  ];

  return (
    <MainLayout>
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-700">{t('projects.title')}</h1>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              {t('projects.description')}
            </p>
          </div>
          
          <div className="mb-12">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-green-600">{t('projects.active')}</h2>
              <div className="flex items-center gap-2">
                {/* Filters could be added here in a future enhancement */}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
          
          <div className="bg-green-50 rounded-lg p-8 md:p-12 text-center">
            <div className="mb-6 flex justify-center">
              <div className="bg-green-500 text-white rounded-full p-3">
                <Projector className="w-8 h-8" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-green-700">{t('projects.idea.title')}</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-700">
              {t('projects.idea.description')}
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-green-500 hover:bg-green-600">
                {t('projects.idea.button')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Projects;
