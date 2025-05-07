
import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/home/Hero';
import ImpactSection from '@/components/home/ImpactSection';
import HowToHelp from '@/components/home/HowToHelp';
import ProjectsSection from '@/components/home/ProjectsSection';
import BlogPreview from '@/components/home/BlogPreview';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  return (
    <MainLayout>
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
