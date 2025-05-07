
import MainLayout from '@/components/layout/MainLayout';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();
  
  const content = {
    en: {
      title: "About GreenRoots",
      intro: "GreenRoots was founded in 2018 by a group of passionate environmentalists who wanted to make a tangible difference in their local community. What started as weekend tree-planting events has grown into a full-fledged environmental organization with multiple ongoing projects and hundreds of dedicated volunteers.",
      missionTitle: "Our Mission",
      mission: "We are committed to fostering environmental stewardship through direct action, education, and community engagement. Our mission is to restore and protect local ecosystems, combat climate change through strategic tree planting, and empower individuals to become environmental advocates in their own communities.",
      visionTitle: "Our Vision",
      vision: "We envision a world where humans live in harmony with nature, where urban areas are green and sustainable, and where community members of all ages are actively engaged in environmental conservation efforts.",
      valuesTitle: "Our Values",
      values: [
        {
          title: "Sustainability",
          description: "We prioritize long-term environmental health over short-term gains, ensuring our projects create lasting positive impact."
        },
        {
          title: "Community",
          description: "We believe that environmental change is most effective when it's driven by local communities working together."
        },
        {
          title: "Education",
          description: "We're committed to sharing knowledge and raising awareness about environmental issues and solutions."
        },
        {
          title: "Inclusivity",
          description: "We welcome volunteers and supporters from all backgrounds, ages, and skill levels to join our community."
        }
      ],
      teamTitle: "Our Team",
      team: "GreenRoots is powered by a small but dedicated team of staff and a large community of volunteers. Our diverse team brings together expertise in ecology, community organizing, education, and more."
    },
    ar: {
      title: "عن جرين روتس",
      intro: "تأسست جرين روتس في عام 2018 من قبل مجموعة من المهتمين بالبيئة الذين أرادوا إحداث فرق ملموس في مجتمعهم المحلي. ما بدأ كفعاليات لزراعة الأشجار في عطلة نهاية الأسبوع تطور إلى منظمة بيئية كاملة مع مشاريع مستمرة متعددة ومئات المتطوعين المتفانين.",
      missionTitle: "مهمتنا",
      mission: "نحن ملتزمون بتعزيز الإشراف البيئي من خلال العمل المباشر والتعليم والمشاركة المجتمعية. مهمتنا هي استعادة وحماية النظم البيئية المحلية، ومكافحة تغير المناخ من خلال زراعة الأشجار الاستراتيجية، وتمكين الأفراد ليصبحوا مدافعين عن البيئة في مجتمعاتهم.",
      visionTitle: "رؤيتنا",
      vision: "نتصور عالمًا يعيش فيه البشر في وئام مع الطبيعة، حيث تكون المناطق الحضرية خضراء ومستدامة، وحيث يشارك أفراد المجتمع من جميع الأعمار بنشاط في جهود الحفاظ على البيئة.",
      valuesTitle: "قيمنا",
      values: [
        {
          title: "الاستدامة",
          description: "نعطي الأولوية للصحة البيئية على المدى الطويل على المكاسب قصيرة المدى، مما يضمن أن مشاريعنا تخلق تأثيرًا إيجابيًا دائمًا."
        },
        {
          title: "المجتمع",
          description: "نؤمن بأن التغيير البيئي يكون أكثر فعالية عندما تقوده المجتمعات المحلية التي تعمل معًا."
        },
        {
          title: "التعليم",
          description: "نحن ملتزمون بتبادل المعرفة ورفع الوعي حول القضايا والحلول البيئية."
        },
        {
          title: "الشمولية",
          description: "نرحب بالمتطوعين والداعمين من جميع الخلفيات والأعمار ومستويات المهارة للانضمام إلى مجتمعنا."
        }
      ],
      teamTitle: "فريقنا",
      team: "تعمل جرين روتس بواسطة فريق صغير ولكنه مخلص من الموظفين ومجتمع كبير من المتطوعين. يجمع فريقنا المتنوع بين الخبرة في علم البيئة وتنظيم المجتمع والتعليم والمزيد."
    }
  };
  
  const currentLang = language as 'en' | 'ar';
  const c = content[currentLang];
  
  return (
    <MainLayout>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-green-700">{c.title}</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg mb-6 text-gray-700">
                {c.intro}
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-600">{c.missionTitle}</h2>
              <p className="text-lg mb-6 text-gray-700">
                {c.mission}
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-600">{c.visionTitle}</h2>
              <p className="text-lg mb-6 text-gray-700">
                {c.vision}
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-600">{c.valuesTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-10">
                {c.values.map((value, index) => (
                  <div key={index} className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-3 text-green-700">{value.title}</h3>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                ))}
              </div>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-600">{c.teamTitle}</h2>
              <p className="text-lg mb-6 text-gray-700">
                {c.team}
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
