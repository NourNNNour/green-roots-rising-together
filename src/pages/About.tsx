
import MainLayout from '@/components/layout/MainLayout';

const About = () => {
  return (
    <MainLayout>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-green-700">About GreenRoots</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg mb-6 text-gray-700">
                GreenRoots was founded in 2018 by a group of passionate environmentalists who wanted to make a tangible difference in their local community. What started as weekend tree-planting events has grown into a full-fledged environmental organization with multiple ongoing projects and hundreds of dedicated volunteers.
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-600">Our Mission</h2>
              <p className="text-lg mb-6 text-gray-700">
                We are committed to fostering environmental stewardship through direct action, education, and community engagement. Our mission is to restore and protect local ecosystems, combat climate change through strategic tree planting, and empower individuals to become environmental advocates in their own communities.
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-600">Our Vision</h2>
              <p className="text-lg mb-6 text-gray-700">
                We envision a world where humans live in harmony with nature, where urban areas are green and sustainable, and where community members of all ages are actively engaged in environmental conservation efforts.
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-600">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-10">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3 text-green-700">Sustainability</h3>
                  <p className="text-gray-700">We prioritize long-term environmental health over short-term gains, ensuring our projects create lasting positive impact.</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3 text-green-700">Community</h3>
                  <p className="text-gray-700">We believe that environmental change is most effective when it's driven by local communities working together.</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3 text-green-700">Education</h3>
                  <p className="text-gray-700">We're committed to sharing knowledge and raising awareness about environmental issues and solutions.</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3 text-green-700">Inclusivity</h3>
                  <p className="text-gray-700">We welcome volunteers and supporters from all backgrounds, ages, and skill levels to join our community.</p>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-600">Our Team</h2>
              <p className="text-lg mb-6 text-gray-700">
                GreenRoots is powered by a small but dedicated team of staff and a large community of volunteers. Our diverse team brings together expertise in ecology, community organizing, education, and more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
