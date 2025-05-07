
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import BlogList from '@/components/blog/BlogList';
import { useLanguage } from '@/contexts/LanguageContext';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const { t, language } = useLanguage();

  // Filter categories (these would come from the backend in a real app)
  const categories = language === 'ar' 
    ? ['الكل', 'التعليم', 'قصص المتطوعين', 'البحث', 'أدلة', 'العمل المناخي']
    : ['All', 'Education', 'Volunteer Stories', 'Research', 'Guides', 'Climate Action'];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this might trigger an API call
  };

  return (
    <MainLayout>
      {/* Hero section */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {language === 'ar' ? 'مدونتنا' : 'Our Blog'}
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'القصص والتحديثات والرؤى من رحلة الحفاظ على البيئة.'
              : 'Stories, updates, and insights from our environmental conservation journey.'}
          </p>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        {/* Search and filters */}
        <div className="mb-12 space-y-6">
          <form onSubmit={handleSearch} className="flex max-w-lg mx-auto">
            <Input
              type="text"
              placeholder={language === 'ar' ? 'بحث في المقالات...' : 'Search articles...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-r-none"
            />
            <Button type="submit" className="rounded-l-none bg-green-500 hover:bg-green-600">
              <Search className="h-4 w-4" />
            </Button>
          </form>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`
                  ${activeCategory === category ? 'bg-green-500 hover:bg-green-600' : 'border-green-500 text-green-500 hover:bg-green-50'}
                `}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog post list */}
        <BlogList searchQuery={searchQuery} activeCategory={activeCategory} />
      </div>
    </MainLayout>
  );
};

export default Blog;
