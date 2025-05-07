
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "10 Native Trees That Thrive in Our Region",
    excerpt: "Discover which tree species are best suited for our local climate and how they benefit the ecosystem.",
    imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    date: "May 5, 2025",
    category: "Education",
    slug: "native-trees"
  },
  {
    id: 2,
    title: "Volunteer Spotlight: Meet Sarah",
    excerpt: "Learn how Sarah turned her passion for the environment into meaningful action with our team.",
    imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
    date: "April 28, 2025",
    category: "Volunteer Stories",
    slug: "volunteer-spotlight-sarah"
  },
  {
    id: 3,
    title: "The Impact of Urban Green Spaces",
    excerpt: "Research shows that increasing urban tree cover can dramatically improve city living conditions.",
    imageUrl: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
    date: "April 15, 2025",
    category: "Research",
    slug: "urban-green-spaces"
  },
  {
    id: 4,
    title: "How to Start a Community Garden",
    excerpt: "A step-by-step guide to creating a thriving community garden in your neighborhood.",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
    date: "April 5, 2025",
    category: "Guides",
    slug: "community-garden-guide"
  },
  {
    id: 5,
    title: "The Benefits of Tree Planting for Climate Change",
    excerpt: "Exploring how large-scale tree planting initiatives can help combat rising global temperatures.",
    imageUrl: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&w=800&q=80",
    date: "March 22, 2025",
    category: "Climate Action",
    slug: "tree-planting-climate-change"
  },
];

// Filter categories from blog posts
const categories = [...new Set(blogPosts.map(post => post.category))];

interface BlogListProps {
  searchQuery?: string;
  activeCategory?: string;
}

const BlogList = ({ searchQuery = '', activeCategory = 'All' }: BlogListProps) => {
  // Filter posts based on search query and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredPosts.map(post => (
        <div key={post.id} className="bg-white rounded-lg shadow overflow-hidden card-hover">
          <Link to={`/blog/${post.slug}`}>
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-48 object-cover"
            />
          </Link>
          <div className="p-6">
            <div className="flex justify-between items-center mb-3">
              <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm">{post.date}</span>
            </div>
            <Link to={`/blog/${post.slug}`}>
              <h3 className="font-bold text-xl mb-2 text-gray-800 hover:text-green-600 transition-colors">
                {post.title}
              </h3>
            </Link>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            <Link to={`/blog/${post.slug}`} className="text-green-500 font-medium hover:text-green-700 transition-colors">
              Read more
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
