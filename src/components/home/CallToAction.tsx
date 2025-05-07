
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="bg-green-600 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Mission Today</h2>
        <p className="text-xl md:max-w-2xl mx-auto mb-8">
          Together, we can make a lasting impact on our environment. 
          Whether you plant with us or support our cause, every action counts.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/register">
            <Button size="lg" className="bg-white text-green-600 hover:bg-cream-300">Sign Up Now</Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">Contact Us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
