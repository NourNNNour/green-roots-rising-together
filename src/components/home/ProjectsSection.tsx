
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ imageUrl, title, description, link }: ProjectCardProps) => (
  <div className="bg-white rounded-lg shadow overflow-hidden card-hover">
    <img 
      src={imageUrl} 
      alt={title} 
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="font-bold text-xl mb-2 text-green-700">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={link} className="text-green-500 font-medium inline-flex items-center hover:text-green-700 transition-colors">
        Learn more <ArrowUp className="w-4 h-4 ml-1 rotate-45" />
      </Link>
    </div>
  </div>
);

const ProjectsSection = () => {
  return (
    <section className="section-padding bg-green-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the environmental initiatives we're currently working on and how they're helping restore our local ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <ProjectCard
            imageUrl="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80"
            title="Urban Forest Initiative"
            description="Transforming city spaces with native trees to improve air quality and create green urban environments."
            link="/projects/urban-forest"
          />
          <ProjectCard
            imageUrl="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80"
            title="Watershed Restoration"
            description="Rehabilitating local watersheds by planting riparian buffers and removing invasive species."
            link="/projects/watershed"
          />
          <ProjectCard
            imageUrl="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80"
            title="Community Gardens"
            description="Creating sustainable food sources and educational spaces through community-managed gardens."
            link="/projects/gardens"
          />
        </div>

        <div className="text-center">
          <Link to="/projects">
            <Button className="bg-green-500 hover:bg-green-600">View All Projects</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
