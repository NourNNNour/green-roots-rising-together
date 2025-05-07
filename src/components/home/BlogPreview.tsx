
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface BlogPostCardProps {
  imageUrl: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  link: string;
}

const BlogPostCard = ({ imageUrl, title, excerpt, date, category, link }: BlogPostCardProps) => (
  <div className="bg-white rounded-lg shadow overflow-hidden card-hover">
    <img 
      src={imageUrl} 
      alt={title} 
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <div className="flex justify-between items-center mb-3">
        <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">{category}</span>
        <span className="text-gray-500 text-sm">{date}</span>
      </div>
      <h3 className="font-bold text-xl mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
      <Link to={link} className="text-green-500 font-medium hover:text-green-700 transition-colors">
        Read more
      </Link>
    </div>
  </div>
);

const BlogPreview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest from Our Blog</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest projects, volunteer stories, and environmental insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <BlogPostCard
            imageUrl="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80"
            title="10 Native Trees That Thrive in Our Region"
            excerpt="Discover which tree species are best suited for our local climate and how they benefit the ecosystem."
            date="May 5, 2025"
            category="Education"
            link="/blog/native-trees"
          />
          <BlogPostCard
            imageUrl="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80"
            title="Volunteer Spotlight: Meet Sarah"
            excerpt="Learn how Sarah turned her passion for the environment into meaningful action with our team."
            date="April 28, 2025"
            category="Volunteer Stories"
            link="/blog/volunteer-spotlight-sarah"
          />
          <BlogPostCard
            imageUrl="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
            title="The Impact of Urban Green Spaces"
            excerpt="Research shows that increasing urban tree cover can dramatically improve city living conditions."
            date="April 15, 2025"
            category="Research"
            link="/blog/urban-green-spaces"
          />
        </div>

        <div className="text-center">
          <Link to="/blog">
            <Button className="bg-green-500 hover:bg-green-600">Read All Articles</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
