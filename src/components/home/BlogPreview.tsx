
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface BlogPostCardProps {
  imageUrl: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  link: string;
}

const BlogPostCard = ({ imageUrl, title, excerpt, date, category, link }: BlogPostCardProps) => {
  const { t } = useLanguage();
  
  return (
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
          {t('blog.readMore')}
        </Link>
      </div>
    </div>
  );
};

const BlogPreview = () => {
  const { t, language } = useLanguage();
  
  // Sample blog post data - handle null/empty case
  const blogPosts = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
      title: language === 'ar' ? "10 أشجار محلية تزدهر في منطقتنا" : "10 Native Trees That Thrive in Our Region",
      excerpt: language === 'ar' ? "اكتشف أي أنواع الأشجار هي الأفضل لمناخنا المحلي وكيف تفيد النظام البيئي." : "Discover which tree species are best suited for our local climate and how they benefit the ecosystem.",
      date: language === 'ar' ? "5 مايو 2025" : "May 5, 2025",
      category: language === 'ar' ? "تعليم" : "Education",
      link: "/blog/native-trees"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
      title: language === 'ar' ? "تسليط الضوء على المتطوعين: تعرف على سارة" : "Volunteer Spotlight: Meet Sarah",
      excerpt: language === 'ar' ? "تعرف كيف حولت سارة شغفها بالبيئة إلى عمل هادف مع فريقنا." : "Learn how Sarah turned her passion for the environment into meaningful action with our team.",
      date: language === 'ar' ? "28 أبريل 2025" : "April 28, 2025",
      category: language === 'ar' ? "قصص المتطوعين" : "Volunteer Stories",
      link: "/blog/volunteer-spotlight-sarah"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      title: language === 'ar' ? "تأثير المساحات الخضراء الحضرية" : "The Impact of Urban Green Spaces",
      excerpt: language === 'ar' ? "تُظهر الأبحاث أن زيادة الغطاء الشجري الحضري يمكن أن يحسن بشكل كبير ظروف المعيشة في المدينة." : "Research shows that increasing urban tree cover can dramatically improve city living conditions.",
      date: language === 'ar' ? "15 أبريل 2025" : "April 15, 2025",
      category: language === 'ar' ? "بحث" : "Research",
      link: "/blog/urban-green-spaces"
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('blog.latestTitle')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('blog.latestDescription')}
          </p>
        </div>

        {blogPosts && blogPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map(post => (
              <BlogPostCard key={post.id} {...post} />
            ))}
          </div>
        ) : (
          <div className="text-center p-12 bg-gray-50 rounded-lg mb-12">
            <p className="text-gray-600">{t('blog.noResults')}</p>
            <p className="mt-2 text-gray-500">{t('blog.tryAgain')}</p>
          </div>
        )}

        <div className="text-center">
          <Link to="/blog">
            <Button className="bg-green-500 hover:bg-green-600">{t('blog.readAll')}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
