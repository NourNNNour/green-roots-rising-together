
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Volunteer, Heart } from 'lucide-react';

const HowToHelp = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How You Can Help</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everyone can make a difference. Join our community and contribute to a healthier planet through these simple actions:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Volunteer */}
          <div className="bg-green-500/10 rounded-lg p-8">
            <div className="mb-6 flex justify-center">
              <div className="bg-green-500 text-white rounded-full p-3">
                <Volunteer size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">Become a Volunteer</h3>
            <p className="text-gray-700 mb-6 text-center">
              Join our dedicated team of volunteers to plant trees, restore ecosystems, and educate communities. No experience necessary – just bring your enthusiasm and we'll provide the guidance.
            </p>
            <div className="flex justify-center">
              <Link to="/volunteer">
                <Button className="bg-green-500 hover:bg-green-600">Get Started</Button>
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
            <h3 className="text-2xl font-bold text-center mb-4">Make a Donation</h3>
            <p className="text-gray-700 mb-6 text-center">
              Your financial support helps us purchase saplings, tools, and resources needed for our environmental projects. Every contribution, no matter the size, makes a significant impact.
            </p>
            <div className="flex justify-center">
              <Link to="/donate">
                <Button className="bg-earth-500 hover:bg-earth-600">Donate Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
