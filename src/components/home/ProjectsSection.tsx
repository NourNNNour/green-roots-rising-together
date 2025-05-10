
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ imageUrl, title, description, link }: ProjectCardProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden card-hover">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 text-green-700 dark:text-green-400">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <Link to={link} className="text-green-500 font-medium inline-flex items-center hover:text-green-700 dark:hover:text-green-300 transition-colors">
          {t('projects.learnMore')} <ArrowUp className="w-4 h-4 ml-1 rotate-45" />
        </Link>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const { t, language } = useLanguage();
  
  // Sample project data - handle null/empty case
  const projects = [
    {
      id: "urban-forest",
      imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
      title: language === 'ar' ? "مبادرة الغابة الحضرية" : "Urban Forest Initiative",
      description: language === 'ar' ? "تحويل المساحات الحضرية بأشجار محلية لتحسين جودة الهواء وخلق بيئات حضرية خضراء." : "Transforming city spaces with native trees to improve air quality and create green urban environments.",
      link: "/projects/urban-forest"
    },
    {
      id: "watershed",
      imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
      title: language === 'ar' ? "استعادة مستجمعات المياه" : "Watershed Restoration",
      description: language === 'ar' ? "إعادة تأهيل مستجمعات المياه المحلية من خلال زراعة حواجز ضفافية وإزالة الأنواع الغازية." : "Rehabilitating local watersheds by planting riparian buffers and removing invasive species.",
      link: "/projects/watershed"
    },
    {
      id: "gardens",
      imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80",
      title: language === 'ar' ? "حدائق المجتمع" : "Community Gardens",
      description: language === 'ar' ? "إنشاء مصادر غذاء مستدامة ومساحات تعليمية من خلال حدائق يديرها المجتمع." : "Creating sustainable food sources and educational spaces through community-managed gardens.",
      link: "/projects/gardens"
    },
  ];
  
  return (
    <section className="section-padding bg-green-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">{t('projects.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('projects.description')}
          </p>
        </div>

        {projects && projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {projects.map(project => (
              <ProjectCard 
                key={project.id} 
                imageUrl={project.imageUrl} 
                title={project.title} 
                description={project.description} 
                link={project.link} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center p-12 bg-white dark:bg-gray-800 rounded-lg mb-12 shadow">
            <p className="text-gray-600 dark:text-gray-400">No projects available at the moment.</p>
          </div>
        )}

        <div className="text-center">
          <Link to="/projects">
            <Button className="bg-green-500 hover:bg-green-600">{t('blog.readAll')}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
