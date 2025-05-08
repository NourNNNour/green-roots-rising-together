
import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, MapPin, Users, ArrowLeft, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { safelyGetItem, handleEmptyArray } from '@/lib/utils';

interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  fullDescription: string[];
  imageUrl: string;
  galleryImages: string[];
  progress: number;
  location: string;
  category: string;
  startDate: string;
  endDate: string;
  volunteers: number;
  impact: string[];
  objectives: string[];
  partners: { name: string; logo: string }[];
}

const projectsData = {
  en: {
    "urban-forest": {
      id: "urban-forest",
      title: "Urban Forest Initiative",
      description: "Transforming city spaces with native trees to improve air quality and create green urban environments.",
      fullDescription: [
        "The Urban Forest Initiative aims to increase the tree canopy across our city's most densely populated neighborhoods. By strategically planting native trees, we're creating corridors of greenery that improve air quality, reduce the urban heat island effect, and provide habitat for local wildlife.",
        "Our approach involves working closely with city planners, local businesses, and residents to identify optimal planting locations that maximize environmental benefits while enhancing community spaces.",
        "The initiative includes educational components where community members learn about tree care, the importance of urban forests, and how to become stewards of their neighborhood trees."
      ],
      imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
      galleryImages: [
        "https://images.unsplash.com/photo-1552252952-c5b73c7d7fae?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1541865079429-5d647402c0ec?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=800&q=80",
      ],
      progress: 65,
      location: "Downtown District",
      category: "Reforestation",
      startDate: "January 2025",
      endDate: "December 2026",
      volunteers: 87,
      impact: [
        "Planting 1,200 native trees across 15 urban neighborhoods",
        "Reducing urban temperatures by up to 4°F in target areas",
        "Creating 800 hours of paid work opportunities for local youth",
        "Capturing an estimated 240,000 pounds of CO2 annually when trees mature"
      ],
      objectives: [
        "Increase urban tree canopy by 15% in priority neighborhoods",
        "Establish community tree care teams in each district",
        "Create a tree inventory and monitoring system for long-term care",
        "Implement stormwater management features with tree plantings"
      ],
      partners: [
        { name: "City Parks Department", logo: "https://placehold.co/200x100?text=Parks+Dept" },
        { name: "Urban Planning Institute", logo: "https://placehold.co/200x100?text=UPI" },
        { name: "Northwest Community College", logo: "https://placehold.co/200x100?text=NCC" }
      ]
    },
    "watershed": {
      id: "watershed",
      title: "Watershed Restoration",
      description: "Rehabilitating local watersheds by planting riparian buffers and removing invasive species.",
      fullDescription: [
        "Our Watershed Restoration project focuses on improving water quality and ecosystem health in the River Valley watershed. Through strategic revegetation of stream banks with native plants, we create natural buffers that filter pollutants, prevent erosion, and provide crucial wildlife habitat.",
        "A major component of this project involves the removal of invasive plant species that have overtaken riparian areas and crowded out beneficial native vegetation. Our team of ecologists and trained volunteers carefully identify and remove these species while replanting with appropriate native alternatives.",
        "The project also includes water quality monitoring to track improvements over time and community education initiatives to help residents understand how their actions impact watershed health."
      ],
      imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
      galleryImages: [
        "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1532087233528-32b6775e6b1c?auto=format&fit=crop&w=800&q=80",
      ],
      progress: 42,
      location: "River Valley Region",
      category: "Water Conservation",
      startDate: "March 2025",
      endDate: "October 2027",
      volunteers: 53,
      impact: [
        "Restoring 5 miles of riparian habitat along critical waterways",
        "Removing 12 acres of invasive plant species",
        "Planting 8,000 native trees, shrubs, and herbaceous plants",
        "Improving water quality for downstream communities and aquatic ecosystems"
      ],
      objectives: [
        "Reduce stream bank erosion by 60% in target areas",
        "Increase native plant biodiversity by 40% in restored areas",
        "Establish 100-foot vegetative buffers along priority stream segments",
        "Train 200 community members in watershed stewardship practices"
      ],
      partners: [
        { name: "River Conservation Trust", logo: "https://placehold.co/200x100?text=RCT" },
        { name: "State Environmental Agency", logo: "https://placehold.co/200x100?text=SEA" },
        { name: "Streamside Property Owners Association", logo: "https://placehold.co/200x100?text=SPOA" }
      ]
    },
    "gardens": {
      id: "gardens",
      title: "Community Gardens",
      description: "Creating sustainable food sources and educational spaces through community-managed gardens.",
      fullDescription: [
        "Our Community Gardens initiative transforms vacant lots and underutilized spaces into productive food-growing areas that serve multiple community needs. Each garden is designed to be a hub for food production, education, and community gathering.",
        "Gardens are planned and maintained through a collaborative process with neighborhood residents, ensuring that the spaces reflect local needs and cultural preferences. We provide infrastructure such as raised beds, water systems, tool sheds, and composting facilities.",
        "Regular workshops cover seasonal planting, organic growing methods, food preservation, and cooking with garden harvests. Special programs engage local schools, teaching students about food systems, nutrition, and environmental stewardship."
      ],
      imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80",
      galleryImages: [
        "https://images.unsplash.com/photo-1512584521429-0d2b808c7837?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1611843467160-25afb8df1074?auto=format&fit=crop&w=800&q=80",
      ],
      progress: 88,
      location: "Multiple Neighborhoods",
      category: "Food Security",
      startDate: "April 2024",
      endDate: "Ongoing",
      volunteers: 125,
      impact: [
        "Establishing 12 community gardens across underserved neighborhoods",
        "Producing 8,000 pounds of fresh produce annually",
        "Engaging 300+ community members in sustainable food production",
        "Donating 30% of harvest to local food assistance programs"
      ],
      objectives: [
        "Create accessible growing spaces within a 10-minute walk for residents",
        "Establish garden leadership committees in each neighborhood",
        "Implement water-efficient irrigation systems in all gardens",
        "Host monthly skill-sharing workshops at each garden site"
      ],
      partners: [
        { name: "Community Food Network", logo: "https://placehold.co/200x100?text=CFN" },
        { name: "Urban Growers Association", logo: "https://placehold.co/200x100?text=UGA" },
        { name: "Local Health Initiative", logo: "https://placehold.co/200x100?text=LHI" }
      ]
    },
    "school-program": {
      id: "school-program",
      title: "School Greening Program",
      description: "Working with local schools to create green spaces and outdoor learning environments for students.",
      fullDescription: [
        "The School Greening Program transforms barren school grounds into vibrant outdoor learning spaces that enhance education while improving environmental conditions. Each school site receives a customized design based on input from teachers, students, and parents.",
        "Projects may include native plant gardens, vegetable plots, rain gardens, outdoor classrooms, shade trees, and natural play areas. All features are designed to serve both educational and ecological functions while being suitable for student participation in maintenance.",
        "Our education team works with teachers to develop curriculum connections that utilize these outdoor spaces for science, art, math, and other subjects. Regular after-school gardening clubs ensure the spaces remain well-maintained while providing additional learning opportunities."
      ],
      imageUrl: "https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&w=800&q=80",
      galleryImages: [
        "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1610834295339-76eef3cc6c8a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=800&q=80",
      ],
      progress: 25,
      location: "Various School Districts",
      category: "Education",
      startDate: "September 2025",
      endDate: "June 2028",
      volunteers: 45,
      impact: [
        "Transforming 15 school campuses with native landscapes and learning gardens",
        "Creating outdoor education opportunities for 7,500+ students",
        "Increasing green space on school grounds by an average of 35%",
        "Training 120 teachers in outdoor education techniques"
      ],
      objectives: [
        "Implement sustainable landscape features at 5 schools per year",
        "Develop curriculum-aligned outdoor learning modules for all grade levels",
        "Establish student-led green teams at each participating school",
        "Create maintenance plans for long-term sustainability of school gardens"
      ],
      partners: [
        { name: "School District Foundation", logo: "https://placehold.co/200x100?text=SDF" },
        { name: "Environmental Education Coalition", logo: "https://placehold.co/200x100?text=EEC" },
        { name: "Parent-Teacher Association", logo: "https://placehold.co/200x100?text=PTA" }
      ]
    },
    "pollinator": {
      id: "pollinator",
      title: "Pollinator Pathway Project",
      description: "Establishing connected gardens of native plants to support bees, butterflies, and other pollinators.",
      fullDescription: [
        "The Pollinator Pathway Project creates a network of pollinator-friendly habitats throughout urban and suburban areas. We work with homeowners, businesses, schools, and public land managers to establish gardens specifically designed to support bees, butterflies, and other essential pollinators.",
        "These interconnected gardens create 'pathways' that allow pollinators to move safely through developed areas, accessing food and nesting sites throughout the season. Each garden contains at least 75% native plant species selected for their value to local pollinator species.",
        "The project includes public education campaigns about the importance of pollinators, the dangers of pesticides, and how to create pollinator-friendly landscapes. We distribute native plant kits, offer garden design consultations, and maintain an interactive map of pathway locations."
      ],
      imageUrl: "https://images.unsplash.com/photo-1551957402-b691e90e4541?auto=format&fit=crop&w=800&q=80",
      galleryImages: [
        "https://images.unsplash.com/photo-1496429862132-5ab36b6ae330?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1558441440-d4111d18d48f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?auto=format&fit=crop&w=800&q=80",
      ],
      progress: 53,
      location: "Citywide Initiative",
      category: "Biodiversity",
      startDate: "March 2025",
      endDate: "November 2027",
      volunteers: 94,
      impact: [
        "Establishing 250+ pollinator gardens across the metropolitan area",
        "Creating 120 continuous miles of pollinator pathways",
        "Supporting 100+ species of native bees and butterflies",
        "Distributing 15,000 native pollinator plants to community members"
      ],
      objectives: [
        "Create a connected network of gardens no more than 1/2 mile apart",
        "Register at least 200 private properties in the pathway network",
        "Develop identification guides for common pollinators and native plants",
        "Reduce pesticide use in participating gardens to zero"
      ],
      partners: [
        { name: "Pollinator Partnership", logo: "https://placehold.co/200x100?text=PP" },
        { name: "Native Plant Society", logo: "https://placehold.co/200x100?text=NPS" },
        { name: "Department of Parks and Recreation", logo: "https://placehold.co/200x100?text=DPR" }
      ]
    },
    "carbon-capture": {
      id: "carbon-capture",
      title: "Carbon Capture Woodlands",
      description: "Large-scale tree planting project designed specifically to maximize carbon sequestration and offset emissions.",
      fullDescription: [
        "Our Carbon Capture Woodlands project is establishing new forests specifically designed to maximize carbon sequestration while creating valuable wildlife habitat. Sites are carefully selected based on soil conditions, connectivity to existing natural areas, and long-term conservation potential.",
        "The planting design uses a diverse mix of fast-growing and long-lived native tree species, planted at optimal density for carbon capture. Understory shrubs and groundcovers are included to enhance biodiversity and ensure ecosystem resilience.",
        "Each woodland is protected through conservation easements or land trust partnerships to ensure permanent protection. Carbon sequestration is measured and monitored over time, with results available to support local carbon offset programs for businesses and individuals."
      ],
      imageUrl: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80",
      galleryImages: [
        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
      ],
      progress: 12,
      location: "Rural Outskirts",
      category: "Climate Action",
      startDate: "October 2025",
      endDate: "December 2035",
      volunteers: 32,
      impact: [
        "Planting 50,000 trees across 200 acres of former agricultural land",
        "Sequestering an estimated 25,000 metric tons of CO2 over 25 years",
        "Creating habitat for 75+ species of birds and wildlife",
        "Improving soil health and reducing erosion in degraded areas"
      ],
      objectives: [
        "Secure conservation easements for all project lands",
        "Achieve 85% survival rate for planted trees after 3 years",
        "Implement monitoring protocol to track carbon sequestration over time",
        "Create opportunities for corporate carbon offset partnerships"
      ],
      partners: [
        { name: "Regional Land Trust", logo: "https://placehold.co/200x100?text=RLT" },
        { name: "Climate Action Network", logo: "https://placehold.co/200x100?text=CAN" },
        { name: "Sustainable Business Council", logo: "https://placehold.co/200x100?text=SBC" }
      ]
    }
  },
  ar: {
    "urban-forest": {
      id: "urban-forest",
      title: "مبادرة الغابة الحضرية",
      description: "تحويل المساحات الحضرية بأشجار محلية لتحسين جودة الهواء وخلق بيئات حضرية خضراء.",
      fullDescription: [
        "تهدف مبادرة الغابة الحضرية إلى زيادة الغطاء الشجري عبر أكثر أحياء مدينتنا اكتظاظًا بالسكان. من خلال زراعة الأشجار المحلية بشكل استراتيجي، نقوم بإنشاء ممرات من المساحات الخضراء التي تحسن جودة الهواء، وتقلل من تأثير الجزيرة الحرارية الحضرية، وتوفر موطنًا للحياة البرية المحلية.",
        "يتضمن نهجنا العمل بشكل وثيق مع مخططي المدن والشركات المحلية والسكان لتحديد مواقع الزراعة المثلى التي تزيد من الفوائد البيئية مع تعزيز المساحات المجتمعية.",
        "تتضمن المبادرة مكونات تعليمية حيث يتعلم أفراد المجتمع عن رعاية الأشجار، وأهمية الغابات الحضرية، وكيفية أن يصبحوا مشرفين على أشجار حيهم."
      ],
      imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
      galleryImages: [
        "https://images.unsplash.com/photo-1552252952-c5b73c7d7fae?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1541865079429-5d647402c0ec?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=800&q=80",
      ],
      progress: 65,
      location: "وسط المدينة",
      category: "إعادة التشجير",
      startDate: "يناير ٢٠٢٥",
      endDate: "ديسمبر ٢٠٢٦",
      volunteers: 87,
      impact: [
        "زراعة ١،٢٠٠ شجرة محلية عبر ١٥ حيًا حضريًا",
        "تقليل درجات الحرارة الحضرية بما يصل إلى ٤ درجات فهرنهايت في المناطق المستهدفة",
        "خلق ٨٠٠ ساعة من فرص العمل المدفوعة للشباب المحلي",
        "التقاط ما يقدر بـ ٢٤٠،٠٠٠ رطل من ثاني أكسيد الكربون سنويًا عند نضوج الأشجار"
      ],
      objectives: [
        "زيادة الغطاء الشجري الحضري بنسبة ١٥٪ في الأحياء ذات الأولوية",
        "إنشاء فرق رعاية الأشجار المجتمعية في كل منطقة",
        "إنشاء نظام جرد ومراقبة للأشجار للرعاية طويلة الأمد",
        "تنفيذ ميزات إدارة مياه الأمطار مع زراعة الأشجار"
      ],
      partners: [
        { name: "قسم حدائق المدينة", logo: "https://placehold.co/200x100?text=قسم+الحدائق" },
        { name: "معهد التخطيط الحضري", logo: "https://placehold.co/200x100?text=معهد+التخطيط" },
        { name: "كلية شمال غرب المجتمعية", logo: "https://placehold.co/200x100?text=كلية+المجتمع" }
      ]
    },
    "watershed": {
      id: "watershed",
      title: "استعادة مستجمعات المياه",
      description: "إعادة تأهيل مستجمعات المياه المحلية من خلال زراعة حواجز ضفافية وإزالة الأنواع الغازية.",
      fullDescription: [
        "يركز مشروع استعادة مستجمعات المياه على تحسين جودة المياه وصحة النظام البيئي في حوض وادي النهر. من خلال إعادة الغطاء النباتي الاستراتيجي لضفاف الجداول بالنباتات المحلية، نقوم بإنشاء حواجز طبيعية تعمل على تصفية الملوثات، ومنع التآكل، وتوفير موطن حيوي للحياة البرية.",
        "يتضمن مكون رئيسي من هذا المشروع إزالة أنواع النباتات الغازية التي استولت على المناطق الضفافية وازدحمت النباتات المحلية المفيدة. يقوم فريق علماء البيئة والمتطوعين المدربين بتحديد هذه الأنواع وإزالتها بعناية مع إعادة زراعتها بالبدائل المحلية المناسبة.",
        "يتضمن المشروع أيضًا مراقبة جودة المياه لتتبع التحسينات بمرور الوقت ومبادرات تعليمية مجتمعية لمساعدة السكان على فهم كيفية تأثير أفعالهم على صحة مستجمعات المياه."
      ],
      imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
      galleryImages: [
        "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1532087233528-32b6775e6b1c?auto=format&fit=crop&w=800&q=80",
      ],
      progress: 42,
      location: "منطقة وادي النهر",
      category: "الحفاظ على المياه",
      startDate: "مارس ٢٠٢٥",
      endDate: "أكتوبر ٢٠٢٧",
      volunteers: 53,
      impact: [
        "استعادة ٥ أميال من الموائل الضفافية على طول المجاري المائية الحرجة",
        "إزالة ١٢ فدان من أنواع النباتات الغازية",
        "زراعة ٨،٠٠٠ شجرة محلية، شجيرات، ونباتات عشبية",
        "تحسين جودة المياه للمجتمعات والأنظمة البيئية المائية في اتجاه مجرى النهر"
      ],
      objectives: [
        "تقليل تآكل ضفاف الجداول بنسبة ٦٠٪ في المناطق المستهدفة",
        "زيادة التنوع البيولوجي للنباتات المحلية بنسبة ٤٠٪ في المناطق المستعادة",
        "إنشاء حواجز نباتية بطول ١٠٠ قدم على طول مقاطع الجداول ذات الأولوية",
        "تدريب ٢٠٠ فرد من المجتمع على ممارسات الإشراف على مستجمعات المياه"
      ],
      partners: [
        { name: "صندوق الحفاظ على النهر", logo: "https://placehold.co/200x100?text=صندوق+النهر" },
        { name: "وكالة البيئة الحكومية", logo: "https://placehold.co/200x100?text=وكالة+البيئة" },
        { name: "جمعية أصحاب العقارات المجاورة للجداول", logo: "https://placehold.co/200x100?text=جمعية+العقارات" }
      ]
    },
    "gardens": {
      id: "gardens",
      title: "حدائق المجتمع",
      description: "إنشاء مصادر غذاء مستدامة ومساحات تعليمية من خلال حدائق يديرها المجتمع.",
      fullDescription: [
        "تقوم مبادرة حدائق المجتمع بتحويل الأراضي الشاغرة والمساحات غير المستغلة إلى مناطق إنتاج غذائي تخدم احتياجات المجتمع المتعددة. كل حديقة مصممة لتكون مركزًا لإنتاج الغذاء والتعليم وتجمع المجتمع.",
        "يتم تخطيط الحدائق وصيانتها من خلال عملية تعاونية مع سكان الحي، لضمان أن المساحات تعكس الاحتياجات المحلية والتفضيلات الثقافية. نقدم البنية التحتية مثل أسرَّة مرتفعة، وأنظمة مياه، ومخازن أدوات، ومرافق للسماد.",
        "تغطي ورش العمل المنتظمة الزراعة الموسمية، وطرق الزراعة العضوية، وحفظ الطعام، والطهي بمحاصيل الحديقة. تشرك البرامج الخاصة المدارس المحلية، وتعلم الطلاب عن أنظمة الغذاء والتغذية والإشراف البيئي."
      ],
      imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80",
      galleryImages: [
        "https://images.unsplash.com/photo-1512584521429-0d2b808c7837?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1611843467160-25afb8df1074?auto=format&fit=crop&w=800&q=80",
      ],
      progress: 88,
      location: "أحياء متعددة",
      category: "الأمن الغذائي",
      startDate: "أبريل ٢٠٢٤",
      endDate: "مستمر",
      volunteers: 125,
      impact: [
        "إنشاء ١٢ حديقة مجتمعية عبر الأحياء المحرومة من الخدمات",
        "إنتاج ٨،٠٠٠ رطل من المنتجات الطازجة سنويًا",
        "إشراك أكثر من ٣٠٠ فرد من المجتمع في إنتاج الغذاء المستدام",
        "التبرع بـ ٣٠٪ من الحصاد لبرامج المساعدة الغذائية المحلية"
      ],
      objectives: [
        "إنشاء مساحات نمو يمكن الوصول إليها في غضون ١٠ دقائق سيرًا على الأقدام للمقيمين",
        "إنشاء لجان قيادة للحدائق في كل حي",
        "تنفيذ أنظمة ري فعالة في استخدام المياه في جميع الحدائق",
        "استضافة ورش عمل شهرية لتبادل المهارات في كل موقع حديقة"
      ],
      partners: [
        { name: "شبكة الغذاء المجتمعية", logo: "https://placehold.co/200x100?text=شبكة+الغذاء" },
        { name: "جمعية المزارعين الحضريين", logo: "https://placehold.co/200x100?text=جمعية+المزارعين" },
        { name: "مبادرة الصحة المحلية", logo: "https://placehold.co/200x100?text=مبادرة+الصحة" }
      ]
    },
    "school-program": {
      id: "school-program",
      title: "برنامج تخضير المدارس",
      description: "العمل مع المدارس المحلية لإنشاء مساحات خضراء وبيئات تعلم خارجية للطلاب.",
      fullDescription: [
        "يقوم برنامج تخضير المدارس بتحويل ساحات المدارس الجرداء إلى مساحات تعلم خارجية نابضة بالحياة تعزز التعليم مع تحسين الظروف البيئية. يتلقى كل موقع مدرسة تصميمًا مخصصًا بناءً على مدخلات من المعلمين والطلاب وأولياء الأمور.",
        "قد تشمل المشاريع حدائق النباتات المحلية، وقطع الخضروات، وحدائق المطر، والفصول الدراسية الخارجية، وأشجار الظل، ومناطق اللعب الطبيعية. جميع الميزات مصممة لخدمة الوظائف التعليمية والبيئية مع كونها مناسبة لمشاركة الطلاب في الصيانة.",
        "يعمل فريق التعليم لدينا مع المعلمين لتطوير روابط المناهج الدراسية التي تستخدم هذه المساحات الخارجية للعلوم والفنون والرياضيات وغيرها من المواد. تضمن نوادي البستنة المنتظمة بعد المدرسة بقاء المساحات في حالة جيدة من الصيانة مع توفير فرص تعليمية إضافية."
      ],
      imageUrl: "https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&w=800&q=80",
      galleryImages: [
        "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1610834295339-76eef3cc6c8a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=800&q=80",
      ],
      progress: 25,
      location: "مناطق مدرسية مختلفة",
      category: "التعليم",
      startDate: "سبتمبر ٢٠٢٥",
      endDate: "يونيو ٢٠٢٨",
      volunteers: 45,
      impact: [
        "تحويل ١٥ حرم مدرسي بمناظر طبيعية محلية وحدائق تعليمية",
        "خلق فرص تعليمية خارجية لأكثر من ٧،٥٠٠ طالب",
        "زيادة المساحات الخضراء في ساحات المدارس بمتوسط ٣٥٪",
        "تدريب ١٢٠ معلمًا على تقنيات التعليم الخارجي"
      ],
      objectives: [
        "تنفيذ ميزات المناظر الطبيعية المستدامة في ٥ مدارس سنويًا",
        "تطوير وحدات تعلم خارجية متوافقة مع المنهج لجميع المستويات الصفية",
        "إنشاء فرق خضراء يقودها الطلاب في كل مدرسة مشاركة",
        "إنشاء خطط صيانة للاستدامة طويلة الأمد لحدائق المدارس"
      ],
      partners: [
        { name: "مؤسسة المنطقة التعليمية", logo: "https://placehold.co/200x100?text=مؤسسة+التعليم" },
        { name: "تحالف التعليم البيئي", logo: "https://placehold.co/200x100?text=تحالف+البيئة" },
        { name: "جمعية أولياء الأمور والمعلمين", logo: "https://placehold.co/200x100?text=جمعية+الأهالي" }
      ]
    },
    "pollinator": {
      id: "pollinator",
      title: "مشروع مسار الملقحات",
      description: "إنشاء حدائق متصلة من النباتات المحلية لدعم النحل والفراشات وغيرها من الملقحات.",
      fullDescription: [
        "ينشئ مشروع مسار الملقحات شبكة من الموائل الصديقة للملقحات في جميع أنحاء المناطق الحضرية والضواحي. نعمل مع أصحاب المنازل والشركات والمدارس ومديري الأراضي العامة لإنشاء حدائق مصممة خصيصًا لدعم النحل والفراشات وغيرها من الملقحات الأساسية.",
        "تخلق هذه الحدائق المترابطة 'مسارات' تسمح للملقحات بالتحرك بأمان عبر المناطق المطورة، والوصول إلى الغذاء ومواقع التعشيش طوال الموسم. تحتوي كل حديقة على ما لا يقل عن ٧٥٪ من أنواع النباتات المحلية المختارة لقيمتها لأنواع الملقحات المحلية.",
        "يتضمن المشروع حملات توعية عامة حول أهمية الملقحات، ومخاطر المبيدات، وكيفية إنشاء مناظر طبيعية صديقة للملقحات. نوزع مجموعات من النباتات المحلية، ونقدم استشارات تصميم الحدائق، ونحتفظ بخريطة تفاعلية لمواقع المسارات."
      ],
      imageUrl: "https://images.unsplash.com/photo-1551957402-b691e90e4541?auto=format&fit=crop&w=800&q=80",
      galleryImages: [
        "https://images.unsplash.com/photo-1496429862132-5ab36b6ae330?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1558441440-d4111d18d48f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?auto=format&fit=crop&w=800&q=80",
      ],
      progress: 53,
      location: "مبادرة على مستوى المدينة",
      category: "التنوع البيولوجي",
      startDate: "مارس ٢٠٢٥",
      endDate: "نوفمبر ٢٠٢٧",
      volunteers: 94,
      impact: [
        "إنشاء أكثر من ٢٥٠ حديقة ملقحات عبر المنطقة الحضرية",
        "إنشاء ١٢٠ ميلاً متصلاً من مسارات الملقحات",
        "دعم أكثر من ١٠٠ نوع من النحل والفراشات المحلية",
        "توزيع ١٥،٠٠٠ نبات ملقح محلي على أفراد المجتمع"
      ],
      objectives: [
        "إنشاء شبكة متصلة من الحدائق لا تبعد عن بعضها أكثر من ١/٢ ميل",
        "تسجيل ما لا يقل عن ٢٠٠ عقار خاص في شبكة المسارات",
        "تطوير أدلة تعريفية للملقحات الشائعة والنباتات المحلية",
        "تقليل استخدام المبيدات في الحدائق المشاركة إلى الصفر"
      ],
      partners: [
        { name: "شراكة الملقحات", logo: "https://placehold.co/200x100?text=شراكة+الملقحات" },
        { name: "جمعية النباتات المحلية", logo: "https://placehold.co/200x100?text=جمعية+النباتات" },
        { name: "إدارة الحدائق والترفيه", logo: "https://placehold.co/200x100?text=إدارة+الحدائق" }
      ]
    },
    "carbon-capture": {
      id: "carbon-capture",
      title: "غابات امتصاص الكربون",
      description: "مشروع زراعة أشجار على نطاق واسع مصمم خصيصًا لزيادة امتصاص الكربون وتعويض الانبعاثات.",
      fullDescription: [
        "مشروع غابات امتصاص الكربون لدينا ينشئ غابات جديدة مصممة خصيصًا لتكون فعالة في امتصاص الكربون مع خلق موائل قيمة للحياة البرية. يتم اختيار المواقع بعناية بناءً على ظروف التربة، والاتصال بالمناطق الطبيعية الموجودة، وإمكانات الحفظ على المدى الطويل.",
        "يستخدم تصميم الزراعة مزيجًا متنوعًا من أنواع الأشجار المحلية سريعة النمو وطويلة العمر، مزروعة بكثافة مثالية لامتصاص الكربون. تم تضمين شجيرات وأغطية أرضية في طبقة تحت الظل لتعزيز التنوع البيولوجي وضمان مرونة النظام البيئي.",
        "كل غابة محمية من خلال حقوق ارتفاق الحفظ أو شراكات صناديق الأراضي لضمان الحماية الدائمة. يتم قياس امتصاص الكربون ومراقبته بمرور الوقت، مع إتاحة النتائج لدعم برامج تعويض الكربون المحلية للشركات والأفراد."
      ],
      imageUrl: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80",
      galleryImages: [
        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
      ],
      progress: 12,
      location: "الضواحي الريفية",
      category: "العمل المناخي",
      startDate: "أكتوبر ٢٠٢٥",
      endDate: "ديسمبر ٢٠٣٥",
      volunteers: 32,
      impact: [
        "زراعة ٥٠،٠٠٠ شجرة عبر ٢٠٠ فدان من الأراضي الزراعية السابقة",
        "امتصاص ما يقدر بـ ٢٥،٠٠٠ طن متري من ثاني أكسيد الكربون خلال ٢٥ عامًا",
        "خلق موائل لأكثر من ٧٥ نوعًا من الطيور والحياة البرية",
        "تحسين صحة التربة وتقليل التآكل في المناطق المتدهورة"
      ],
      objectives: [
        "تأمين حقوق ارتفاق الحفظ لجميع أراضي المشروع",
        "تحقيق معدل بقاء ٨٥٪ للأشجار المزروعة بعد ٣ سنوات",
        "تنفيذ بروتوكول المراقبة لتتبع امتصاص الكربون بمرور الوقت",
        "خلق فرص لشراكات تعويض الكربون للشركات"
      ],
      partners: [
        { name: "صندوق الأراضي الإقليمي", logo: "https://placehold.co/200x100?text=صندوق+الأراضي" },
        { name: "شبكة العمل المناخي", logo: "https://placehold.co/200x100?text=العمل+المناخي" },
        { name: "مجلس الأعمال المستدامة", logo: "https://placehold.co/200x100?text=مجلس+الأعمال" }
      ]
    }
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  
  const projects = language === 'ar' ? projectsData.ar : projectsData.en;
  const project = id ? projects[id as keyof typeof projects] : null;

  if (!project) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">
            {language === 'ar' ? 'المشروع غير موجود' : 'Project Not Found'}
          </h1>
          <p>
            {language === 'ar' 
              ? 'عذرًا، المشروع الذي تبحث عنه غير موجود.' 
              : 'Sorry, the project you are looking for does not exist.'}
          </p>
          <div className="mt-8">
            <Link to="/projects" className="inline-block">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                {language === 'ar' ? 'العودة إلى المشاريع' : 'Back to Projects'}
              </Button>
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* Hero section */}
      <div className="relative h-[60vh] w-full">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="container mx-auto px-4 py-12">
            <div className="flex space-x-2 mb-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {project.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
            <div className="flex flex-wrap items-center text-white/90 gap-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{project.startDate} - {project.endDate}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>{project.volunteers} {language === 'ar' ? 'متطوع' : 'volunteers'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main content */}
          <div className="md:w-2/3">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'ar' ? 'حول المشروع' : 'About This Project'}
              </h2>
              <div className="space-y-4">
                {project.fullDescription.map((paragraph, index) => (
                  <p key={index} className="text-gray-700">{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Project gallery */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'ar' ? 'معرض الصور' : 'Project Gallery'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {handleEmptyArray(project.galleryImages, []).map((image, index) => (
                  <img 
                    key={index}
                    src={image}
                    alt={`${project.title} - ${index}`}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                ))}
              </div>
            </div>

            {/* Project objectives */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'ar' ? 'أهداف المشروع' : 'Project Objectives'}
              </h2>
              <ul className="space-y-2">
                {handleEmptyArray(project.objectives, []).map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <Leaf className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Environmental impact */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'ar' ? 'التأثير البيئي' : 'Environmental Impact'}
              </h2>
              <ul className="space-y-2">
                {handleEmptyArray(project.impact, []).map((impact, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-500 text-white flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span>{impact}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project partners */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'ar' ? 'شركاؤنا' : 'Our Partners'}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {handleEmptyArray(project.partners, []).map((partner, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg flex flex-col items-center text-center">
                    <img 
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 mb-2 object-contain"
                    />
                    <span className="text-sm font-medium">{partner.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:w-1/3 space-y-6">
            {/* Progress card */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">
                  {language === 'ar' ? 'تقدم المشروع' : 'Project Progress'}
                </h3>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">
                      {language === 'ar' ? 'الإكتمال' : 'Completion'}
                    </span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Call to action card */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">
                  {language === 'ar' ? 'كيف يمكنك المساعدة' : 'How You Can Help'}
                </h3>
                <div className="space-y-4">
                  <Link to="/volunteer" className="block w-full">
                    <Button className="w-full bg-green-500 hover:bg-green-600">
                      {language === 'ar' ? 'تطوع لهذا المشروع' : 'Volunteer for this Project'}
                    </Button>
                  </Link>
                  <Link to="/donate" className="block w-full">
                    <Button variant="outline" className="w-full border-green-500 text-green-500 hover:bg-green-50">
                      {language === 'ar' ? 'تبرع لدعم هذا المشروع' : 'Donate to Support this Project'}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Share card */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-4">
                  {language === 'ar' ? 'مشاركة هذا المشروع' : 'Share This Project'}
                </h3>
                <div className="flex space-x-4">
                  {/* These would be actual social sharing buttons in a real app */}
                  <button className="text-gray-600 hover:text-green-500">Twitter</button>
                  <button className="text-gray-600 hover:text-green-500">Facebook</button>
                  <button className="text-gray-600 hover:text-green-500">LinkedIn</button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/projects" className="inline-block">
            <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-50">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === 'ar' ? 'العودة إلى كل المشاريع' : 'Back to All Projects'}
            </Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProjectDetail;
