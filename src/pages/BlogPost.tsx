
import { useParams } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { useLanguage } from '@/contexts/LanguageContext';

// Sample blog posts data (this would come from an API in a real app)
const blogPostsData = {
  en: {
    'native-trees': {
      title: "10 Native Trees That Thrive in Our Region",
      date: "May 5, 2025",
      author: "Elena Rodriguez",
      category: "Education",
      imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80",
      content: `
        <p class="mb-4">Trees are the backbone of our ecosystems, providing habitat for wildlife, purifying our air, and enhancing the beauty of our landscapes. Choosing native trees for planting is especially important as they're adapted to local conditions and support local wildlife.</p>
        
        <p class="mb-4">Here are ten native trees that thrive in our region:</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">1. Red Maple (Acer rubrum)</h3>
        <p class="mb-4">Known for its stunning fall colors, the Red Maple adapts to various soil conditions and provides important early spring pollen for bees.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">2. White Oak (Quercus alba)</h3>
        <p class="mb-4">A long-lived species that supports over 500 species of caterpillars, making it a powerhouse for biodiversity.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">3. Eastern Redbud (Cercis canadensis)</h3>
        <p class="mb-4">This smaller tree produces beautiful pink-purple flowers in early spring and thrives in partially shaded areas.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">4. River Birch (Betula nigra)</h3>
        <p class="mb-4">With attractive exfoliating bark, this tree is perfect for wet areas and is resistant to many common birch pests.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">5. American Hornbeam (Carpinus caroliniana)</h3>
        <p class="mb-4">A slow-growing understory tree with beautiful fall color and interesting muscle-like bark texture.</p>
        
        <p class="mb-4">When planting native trees, remember to consider the specific site conditions including sun exposure, soil moisture, and available space for the mature tree size. Proper planting techniques and early care are essential for tree success.</p>
        
        <p class="mb-4">Join our next volunteer planting event to help increase the native tree population in our community!</p>
      `
    },
    'urban-green-spaces': {
      title: "The Impact of Urban Green Spaces",
      date: "April 15, 2025",
      author: "Marcus Chen",
      category: "Research",
      imageUrl: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1600&q=80",
      content: `
        <p class="mb-4">Urban green spaces are becoming increasingly important as our cities grow and densify. These areas provide numerous benefits to city dwellers and the environment alike.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">Environmental Benefits</h3>
        <p class="mb-4">Urban forests help filter air pollution, reduce the urban heat island effect, and manage stormwater. A single mature tree can absorb up to 48 pounds of carbon dioxide per year, helping combat climate change at the local level.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">Mental Health Impacts</h3>
        <p class="mb-4">Research has consistently shown that access to green spaces reduces stress, anxiety, and depression. Even brief exposure to natural environments can improve mood and cognitive function.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">Community Building</h3>
        <p class="mb-4">Parks and community gardens create gathering spaces that foster social connections and community engagement. These spaces become venues for recreation, education, and cultural events.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">Economic Value</h3>
        <p class="mb-4">Properties near well-maintained green spaces typically have higher values. Urban trees alone provide millions of dollars in ecosystem services through energy conservation, air quality improvement, and stormwater management.</p>
        
        <p class="mb-4">Our organization is committed to expanding and enhancing urban green spaces through strategic tree planting initiatives and community garden projects.</p>
        
        <p class="mb-4">Contact us to learn how you can support green space development in your neighborhood!</p>
      `
    }
  },
  ar: {
    'native-trees': {
      title: "١٠ أشجار محلية تزدهر في منطقتنا",
      date: "٥ مايو ٢٠٢٥",
      author: "إيلينا رودريغيز",
      category: "التعليم",
      imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80",
      content: `
        <p class="mb-4">الأشجار هي العمود الفقري لنظمنا البيئية، توفر موطنًا للحياة البرية، وتنقي هواءنا، وتعزز جمال مناظرنا الطبيعية. اختيار الأشجار المحلية للزراعة مهم بشكل خاص لأنها متكيفة مع الظروف المحلية وتدعم الحياة البرية المحلية.</p>
        
        <p class="mb-4">فيما يلي عشرة أشجار محلية تزدهر في منطقتنا:</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">١. القيقب الأحمر (Acer rubrum)</h3>
        <p class="mb-4">معروف بألوان الخريف المذهلة، يتكيف القيقب الأحمر مع ظروف التربة المختلفة ويوفر حبوب اللقاح المهمة في أوائل الربيع للنحل.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">٢. البلوط الأبيض (Quercus alba)</h3>
        <p class="mb-4">نوع طويل العمر يدعم أكثر من 500 نوع من اليرقات، مما يجعله قوة دافعة للتنوع البيولوجي.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">٣. برعم الشرق (Cercis canadensis)</h3>
        <p class="mb-4">تنتج هذه الشجرة الصغيرة زهورًا وردية-أرجوانية جميلة في أوائل الربيع وتزدهر في المناطق المظللة جزئيًا.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">٤. بتولا النهر (Betula nigra)</h3>
        <p class="mb-4">مع لحاء متقشر جذاب، هذه الشجرة مثالية للمناطق الرطبة ومقاومة للعديد من آفات البتولا الشائعة.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">٥. القرانيا الأمريكية (Carpinus caroliniana)</h3>
        <p class="mb-4">شجرة بطيئة النمو تحت المظلة مع لون خريف جميل ونسيج لحاء مثير للاهتمام يشبه العضلات.</p>
        
        <p class="mb-4">عند زراعة الأشجار المحلية، تذكر أن تأخذ في الاعتبار ظروف الموقع المحددة بما في ذلك التعرض للشمس، ورطوبة التربة، والمساحة المتاحة لحجم الشجرة الناضجة. تقنيات الزراعة المناسبة والرعاية المبكرة ضرورية لنجاح الشجرة.</p>
        
        <p class="mb-4">انضم إلى فعالية الزراعة التطوعية القادمة للمساعدة في زيادة عدد الأشجار المحلية في مجتمعنا!</p>
      `
    },
    'urban-green-spaces': {
      title: "تأثير المساحات الخضراء الحضرية",
      date: "١٥ أبريل ٢٠٢٥",
      author: "ماركوس تشن",
      category: "البحث",
      imageUrl: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1600&q=80",
      content: `
        <p class="mb-4">أصبحت المساحات الخضراء الحضرية مهمة بشكل متزايد مع نمو مدننا وازديادها. توفر هذه المناطق فوائد عديدة لسكان المدن والبيئة على حد سواء.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">الفوائد البيئية</h3>
        <p class="mb-4">تساعد الغابات الحضرية في تصفية تلوث الهواء، وتقليل تأثير الجزيرة الحرارية الحضرية، وإدارة مياه الأمطار. يمكن لشجرة ناضجة واحدة امتصاص ما يصل إلى 48 رطلاً من ثاني أكسيد الكربون سنويًا، مما يساعد في مكافحة تغير المناخ على المستوى المحلي.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">تأثيرات الصحة النفسية</h3>
        <p class="mb-4">أظهرت الأبحاث باستمرار أن الوصول إلى المساحات الخضراء يقلل من التوتر والقلق والاكتئاب. حتى التعرض القصير للبيئات الطبيعية يمكن أن يحسن المزاج والوظيفة المعرفية.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">بناء المجتمع</h3>
        <p class="mb-4">تخلق الحدائق والحدائق المجتمعية مساحات للتجمع تعزز الروابط الاجتماعية والمشاركة المجتمعية. تصبح هذه المساحات أماكن للترفيه والتعليم والفعاليات الثقافية.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">القيمة الاقتصادية</h3>
        <p class="mb-4">عادة ما تكون للعقارات القريبة من المساحات الخضراء المحافظ عليها جيدًا قيم أعلى. توفر الأشجار الحضرية وحدها ملايين الدولارات في خدمات النظام البيئي من خلال الحفاظ على الطاقة وتحسين جودة الهواء وإدارة مياه الأمطار.</p>
        
        <p class="mb-4">تلتزم منظمتنا بتوسيع وتعزيز المساحات الخضراء الحضرية من خلال مبادرات استراتيجية لزراعة الأشجار ومشاريع الحدائق المجتمعية.</p>
        
        <p class="mb-4">اتصل بنا لمعرفة كيف يمكنك دعم تطوير المساحات الخضراء في حيك!</p>
      `
    }
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  
  // Get the correct posts data for the current language
  const postsForLanguage = language === 'ar' ? blogPostsData.ar : blogPostsData.en;
  const post = slug ? postsForLanguage[slug as keyof typeof postsForLanguage] : null;

  const ui = {
    en: {
      notFound: "Article Not Found",
      notFoundDesc: "Sorry, the blog post you're looking for doesn't exist.",
      share: "Share this article:",
      relatedTopics: "Related Topics:",
      environment: "Environment",
      trees: "Trees",
      conservation: "Conservation"
    },
    ar: {
      notFound: "المقال غير موجود",
      notFoundDesc: "عذرًا، المقال الذي تبحث عنه غير موجود.",
      share: "مشاركة هذا المقال:",
      relatedTopics: "مواضيع ذات صلة:",
      environment: "البيئة",
      trees: "أشجار",
      conservation: "الحفاظ على البيئة"
    }
  };

  const t = language === 'ar' ? ui.ar : ui.en;

  if (!post) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">{t.notFound}</h1>
          <p>{t.notFoundDesc}</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* Hero image */}
      <div className="w-full h-[50vh] relative">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="container mx-auto px-4 py-12">
            <div className="flex space-x-2 mb-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">{post.category}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
            <div className="flex items-center text-white/90">
              <span className="mr-4">{language === 'ar' ? `بواسطة ${post.author}` : `By ${post.author}`}</span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article content */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share and tags section */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-semibold text-gray-700 mb-2">{t.share}</p>
              <div className="flex space-x-4">
                {/* Social share buttons would go here */}
                <button className="text-gray-600 hover:text-green-500">Twitter</button>
                <button className="text-gray-600 hover:text-green-500">Facebook</button>
                <button className="text-gray-600 hover:text-green-500">LinkedIn</button>
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-700 mb-2">{t.relatedTopics}</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">{t.environment}</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">{t.trees}</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">{t.conservation}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </MainLayout>
  );
};

export default BlogPost;
