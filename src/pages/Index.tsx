
import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/home/Hero';
import ImpactSection from '@/components/home/ImpactSection';
import HowToHelp from '@/components/home/HowToHelp';
import ProjectsSection from '@/components/home/ProjectsSection';
import BlogPreview from '@/components/home/BlogPreview';
import CallToAction from '@/components/home/CallToAction';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { language } = useLanguage();
  
  const pageTitle = language === 'ar' 
    ? 'الأخضر - فريق الحفاظ على البيئة' 
    : 'Alakhdar - Environmental Conservation Team';
  
  const pageDescription = language === 'ar'
    ? 'انضم إلى مهمتنا لاستعادة النظم البيئية المحلية من خلال مشاريع زراعة الأشجار والحفاظ على البيئة بقيادة المجتمع.'
    : 'Join our mission to restore local ecosystems through community-driven tree planting and environmental conservation projects.';

  return (
    <MainLayout 
      title={pageTitle}
      description={pageDescription}
      image="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80"
    >
      <Hero />
      <ImpactSection />
      <HowToHelp />
      <ProjectsSection />
      <BlogPreview />
      <CallToAction />
    </MainLayout>
  );
};

export default Index;
