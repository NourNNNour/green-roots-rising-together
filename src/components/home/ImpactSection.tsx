
import { Leaf, Users, Earth } from 'lucide-react';

interface ImpactCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
}

const ImpactCard = ({ icon, number, label }: ImpactCardProps) => (
  <div className="bg-white rounded-lg shadow p-8 text-center card-hover">
    <div className="flex justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{number}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

const ImpactSection = () => {
  return (
    <section className="bg-cream-300/50 section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Since our inception, we've made significant strides in environmental conservation. Here's how our collective efforts are making a difference:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ImpactCard
            icon={<Leaf className="w-12 h-12 text-green-500" />}
            number="10,000+"
            label="Trees Planted"
          />
          <ImpactCard
            icon={<Users className="w-12 h-12 text-green-500" />}
            number="500+"
            label="Active Volunteers"
          />
          <ImpactCard
            icon={<Earth className="w-12 h-12 text-green-500" />}
            number="25+"
            label="Projects Completed"
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
