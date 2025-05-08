
import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Calendar, Clock, User, Share2, MessageSquare } from 'lucide-react';
import { calculateReadingTime, formatDate, handleEmptyArray } from '@/lib/utils';

// Sample blog posts data (this would come from an API in a real app)
const blogPostsData = {
  en: {
    'native-trees': {
      title: "10 Native Trees That Thrive in Our Region",
      date: "May 5, 2025",
      author: "Elena Rodriguez",
      authorTitle: "Forestry Specialist",
      authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      category: "Education",
      imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80",
      content: `
        <p class="mb-4">Trees are the backbone of our ecosystems, providing habitat for wildlife, purifying our air, and enhancing the beauty of our landscapes. Choosing native trees for planting is especially important as they're adapted to local conditions and support local wildlife.</p>
        
        <p class="mb-4">Here are ten native trees that thrive in our region:</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">1. Red Maple (Acer rubrum)</h3>
        <p class="mb-4">Known for its stunning fall colors, the Red Maple adapts to various soil conditions and provides important early spring pollen for bees. This versatile tree can grow in both wet and dry sites, making it an excellent choice for many landscapes. Its vibrant red flowers appear in early spring before the leaves emerge, creating a striking display against the late winter sky.</p>
        
        <div class="my-6 bg-gray-50 p-4 rounded-lg">
          <p class="italic text-gray-700">"Red maples are one of the most adaptable trees in our native forest. Their ability to thrive in various conditions makes them perfect for urban and suburban landscapes." — Regional Forestry Department</p>
        </div>
        
        <h3 class="text-xl font-bold mb-2 mt-6">2. White Oak (Quercus alba)</h3>
        <p class="mb-4">A long-lived species that supports over 500 species of caterpillars, making it a powerhouse for biodiversity. White oaks can live for centuries, with some specimens known to be over 600 years old. Their acorns are an important food source for wildlife including deer, squirrels, and many bird species. The wood of white oak has been prized for furniture, flooring, and barrel-making due to its tight grain and durability.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">3. Eastern Redbud (Cercis canadensis)</h3>
        <p class="mb-4">This smaller tree produces beautiful pink-purple flowers in early spring and thrives in partially shaded areas. Eastern redbuds are perfect for understory planting and create a stunning display when planted alongside white-flowering dogwoods. After flowering, their heart-shaped leaves emerge with a reddish tint before turning green. In the fall, the leaves turn a brilliant yellow, providing multi-season interest.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">4. River Birch (Betula nigra)</h3>
        <p class="mb-4">With attractive exfoliating bark, this tree is perfect for wet areas and is resistant to many common birch pests. The cinnamon-colored peeling bark provides year-round visual interest, especially in winter when the tree is bare. River birches can be grown as single-trunk specimens or in multi-stemmed clumps, offering flexibility in landscape design. They grow rapidly and can provide quick shade in newly developed areas.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">5. American Hornbeam (Carpinus caroliniana)</h3>
        <p class="mb-4">A slow-growing understory tree with beautiful fall color and interesting muscle-like bark texture. Also known as musclewood or blue beech, this tree has exceptionally hard wood that early American settlers used for tool handles and other applications requiring strength. Its tolerance of shade makes it ideal for planting beneath larger trees, where it adds a layer of beauty and ecological function to the landscape.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">6. Flowering Dogwood (Cornus florida)</h3>
        <p class="mb-4">This iconic flowering tree produces white or pink bracts in spring and bright red berries in fall that are valuable to wildlife. Flowering dogwoods are understory trees in their native woodland habitats, thriving in the dappled shade of taller trees. Their shallow root systems make them ideal for planting near patios and foundations where deeper-rooted trees might cause problems.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">7. American Sweetgum (Liquidambar styraciflua)</h3>
        <p class="mb-4">Known for its star-shaped leaves that turn brilliant colors in autumn, sweetgums adapt well to various soil types. While some homeowners dislike their spiky seed balls, these provide food for wildlife and can be removed through careful variety selection. The distinctive star-shaped leaves and corky ridges on the branches make sweetgums easily identifiable even in winter.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">8. Black Tupelo (Nyssa sylvatica)</h3>
        <p class="mb-4">One of the first trees to display fall color, black tupelos have glossy leaves that turn vibrant red early in the season. These trees have a distinctive horizontal branching pattern that creates strong visual interest, especially in winter. Black tupelos are particularly valuable for their abundant small fruits that provide critical nutrition for migrating birds in the fall.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">9. American Sycamore (Platanus occidentalis)</h3>
        <p class="mb-4">With its distinctive mottled bark and massive size, the sycamore makes a statement in large landscapes and along waterways. These trees can live for hundreds of years and develop massive trunks with hollow cavities that provide shelter for wildlife. Sycamores are often found along riverbanks where their extensive root systems help prevent erosion.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">10. Bald Cypress (Taxodium distichum)</h3>
        <p class="mb-4">Despite being a conifer, this tree loses its needles in winter. It's highly adaptable and can grow in standing water or on dry land. Bald cypresses develop "knees" when grown in wet conditions, which are thought to help provide oxygen to the roots. These ancient trees can live for over a thousand years and are remarkably resistant to wind damage, making them valuable in hurricane-prone areas.</p>
        
        <div class="my-6">
          <img src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1600&q=80" alt="A forest of native trees" class="rounded-lg w-full" />
          <p class="text-sm text-gray-500 mt-2">A healthy forest ecosystem with diverse native tree species provides habitat for countless organisms.</p>
        </div>
        
        <p class="mb-4">When planting native trees, remember to consider the specific site conditions including sun exposure, soil moisture, and available space for the mature tree size. Proper planting techniques and early care are essential for tree success.</p>
        
        <p class="mb-4">Join our next volunteer planting event to help increase the native tree population in our community!</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">Why Native Trees Matter</h3>
        <p class="mb-4">Native trees have co-evolved with local wildlife and are part of the ecological web that sustains biodiversity. Non-native species, while sometimes attractive, don't provide the same ecological benefits and can sometimes become invasive, displacing native vegetation.</p>
        
        <p class="mb-4">By choosing native trees for your landscape, you're not just planting a tree – you're supporting entire ecosystems of insects, birds, and other wildlife that depend on these specific plant species for survival. You're also preserving the unique character and heritage of our regional landscapes.</p>
        
        <p class="mb-4">Contact our team for advice on selecting the right native trees for your specific site conditions and landscape goals.</p>
      `,
      comments: 12,
      relatedPosts: ['urban-green-spaces', 'tree-planting-climate-change'],
      tags: ['Native Species', 'Tree Planting', 'Biodiversity', 'Landscaping'],
      moreResources: [
        { 
          title: "Native Trees Identification Guide", 
          url: "#", 
          description: "A comprehensive guide to identifying native tree species in your area."
        },
        { 
          title: "Tree Planting Best Practices", 
          url: "#", 
          description: "Learn the proper techniques for planting and caring for young trees."
        }
      ]
    },
    'urban-green-spaces': {
      title: "The Impact of Urban Green Spaces",
      date: "April 15, 2025",
      author: "Marcus Chen",
      authorTitle: "Urban Planning Specialist",
      authorImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=200&q=80",
      category: "Research",
      imageUrl: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1600&q=80",
      content: `
        <p class="mb-4">Urban green spaces are becoming increasingly important as our cities grow and densify. These areas provide numerous benefits to city dwellers and the environment alike, creating healthier, more sustainable urban environments.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">Environmental Benefits</h3>
        <p class="mb-4">Urban forests help filter air pollution, reduce the urban heat island effect, and manage stormwater. A single mature tree can absorb up to 48 pounds of carbon dioxide per year, helping combat climate change at the local level.</p>
        
        <p class="mb-4">City parks, community gardens, and even small pocket parks work together to create an urban ecosystem that supports biodiversity while providing critical environmental services. Research has shown that neighborhoods with more tree canopy experience lower temperatures during heat waves, reduced flooding during heavy rain events, and improved air quality year-round.</p>
        
        <div class="my-6">
          <img src="https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?auto=format&fit=crop&w=1600&q=80" alt="Urban park with trees and green space" class="rounded-lg w-full" />
          <p class="text-sm text-gray-500 mt-2">Urban parks provide vital green space in densely populated areas, offering environmental and social benefits.</p>
        </div>
        
        <h3 class="text-xl font-bold mb-2 mt-6">Mental Health Impacts</h3>
        <p class="mb-4">Research has consistently shown that access to green spaces reduces stress, anxiety, and depression. Even brief exposure to natural environments can improve mood and cognitive function.</p>
        
        <p class="mb-4">A landmark study by the University of Exeter found that people who spend at least two hours a week in nature report significantly better health and psychological wellbeing. This effect was observed regardless of whether the time was spent in a single visit or spread across multiple shorter visits.</p>
        
        <div class="my-6 bg-gray-50 p-4 rounded-lg">
          <p class="italic text-gray-700">"There is growing evidence to suggest that access to safe, natural areas improves health outcomes by providing psychological relaxation and stress reduction, stimulating social cohesion, supporting physical activity, and reducing exposure to air pollutants, noise and excessive heat." — World Health Organization</p>
        </div>
        
        <h3 class="text-xl font-bold mb-2 mt-6">Community Building</h3>
        <p class="mb-4">Parks and community gardens create gathering spaces that foster social connections and community engagement. These spaces become venues for recreation, education, and cultural events.</p>
        
        <p class="mb-4">Well-designed green spaces can help bridge social divides by bringing together people from different backgrounds who might not otherwise interact. They provide neutral ground where neighbors can meet, children can play together, and community bonds can form naturally.</p>
        
        <p class="mb-4">Community gardens in particular have shown remarkable success in building neighborhood cohesion while addressing issues of food security and nutrition education. These shared spaces create opportunities for knowledge transfer between generations and cultures, preserving and sharing valuable gardening traditions.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">Economic Value</h3>
        <p class="mb-4">Properties near well-maintained green spaces typically have higher values. Urban trees alone provide millions of dollars in ecosystem services through energy conservation, air quality improvement, and stormwater management.</p>
        
        <p class="mb-4">A study by the National Recreation and Park Association found that homes adjacent to parks and protected open spaces are typically valued 8-20% higher than comparable properties without such amenities. Similarly, commercial districts with green elements like street trees and pocket parks typically see higher retail activity and customer satisfaction.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">Health Benefits</h3>
        <p class="mb-4">Green spaces encourage physical activity and provide opportunities for exercise. Regular access to parks is associated with reduced rates of obesity and related health conditions.</p>
        
        <p class="mb-4">Children with access to natural play areas show improved motor skills, attention span, and cognitive development compared to those limited to built environments. For adults, regular exposure to green spaces is associated with lower blood pressure, reduced stress hormones, and improved immune function.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">Climate Resilience</h3>
        <p class="mb-4">Urban green spaces play a crucial role in climate adaptation strategies. They help cities manage increasingly frequent extreme weather events by absorbing excess rainfall, providing cooling during heat waves, and buffering strong winds.</p>
        
        <p class="mb-4">Forward-thinking cities are incorporating green infrastructure networks into their development plans, creating interconnected systems of parks, greenways, rain gardens, and green roofs that work together to build resilience against climate impacts.</p>
        
        <p class="mb-4">Our organization is committed to expanding and enhancing urban green spaces through strategic tree planting initiatives and community garden projects.</p>
        
        <p class="mb-4">Contact us to learn how you can support green space development in your neighborhood!</p>
      `,
      comments: 8,
      relatedPosts: ['native-trees', 'community-garden-guide'],
      tags: ['Urban Planning', 'Public Health', 'Green Infrastructure', 'Community Development'],
      moreResources: [
        { 
          title: "Urban Green Space Planning Guide", 
          url: "#", 
          description: "A resource for community advocates and planners."
        },
        { 
          title: "Benefits of Green Spaces Research Summary", 
          url: "#", 
          description: "Collection of key research findings on urban green spaces."
        }
      ]
    }
  },
  ar: {
    'native-trees': {
      title: "١٠ أشجار محلية تزدهر في منطقتنا",
      date: "٥ مايو ٢٠٢٥",
      author: "إيلينا رودريغيز",
      authorTitle: "أخصائية الغابات",
      authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      category: "التعليم",
      imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80",
      content: `
        <p class="mb-4">الأشجار هي العمود الفقري لنظمنا البيئية، توفر موطنًا للحياة البرية، وتنقي هواءنا، وتعزز جمال مناظرنا الطبيعية. اختيار الأشجار المحلية للزراعة مهم بشكل خاص لأنها متكيفة مع الظروف المحلية وتدعم الحياة البرية المحلية.</p>
        
        <p class="mb-4">فيما يلي عشرة أشجار محلية تزدهر في منطقتنا:</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">١. القيقب الأحمر (Acer rubrum)</h3>
        <p class="mb-4">معروف بألوان الخريف المذهلة، يتكيف القيقب الأحمر مع ظروف التربة المختلفة ويوفر حبوب اللقاح المهمة في أوائل الربيع للنحل. هذه الشجرة متعددة الاستخدامات يمكن أن تنمو في المواقع الرطبة والجافة على حد سواء، مما يجعلها خيارًا ممتازًا للعديد من المناظر الطبيعية. تظهر أزهارها الحمراء النابضة بالحياة في أوائل الربيع قبل ظهور الأوراق، مما يخلق عرضًا مذهلاً على خلفية سماء أواخر الشتاء.</p>
        
        <div class="my-6 bg-gray-50 p-4 rounded-lg">
          <p class="italic text-gray-700">"القيقب الأحمر من أكثر الأشجار قدرة على التكيف في غابتنا المحلية. قدرتها على الازدهار في ظروف مختلفة يجعلها مثالية للمناظر الطبيعية الحضرية وشبه الحضرية." — قسم الغابات الإقليمي</p>
        </div>
        
        <h3 class="text-xl font-bold mb-2 mt-6">٢. البلوط الأبيض (Quercus alba)</h3>
        <p class="mb-4">نوع طويل العمر يدعم أكثر من 500 نوع من اليرقات، مما يجعله قوة دافعة للتنوع البيولوجي. يمكن أن يعيش البلوط الأبيض لقرون، مع وجود بعض العينات المعروفة بأنها تبلغ من العمر أكثر من 600 عام. تعتبر حباتها مصدر غذاء مهم للحياة البرية بما في ذلك الغزلان والسناجب والعديد من أنواع الطيور. لطالما كان خشب البلوط الأبيض مرغوبًا للأثاث والأرضيات وصناعة البراميل بسبب حبيباته المتماسكة ومتانته.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">٣. برعم الشرق (Cercis canadensis)</h3>
        <p class="mb-4">تنتج هذه الشجرة الصغيرة زهورًا وردية-أرجوانية جميلة في أوائل الربيع وتزدهر في المناطق المظللة جزئيًا. أشجار برعم الشرق مثالية للزراعة تحت المظلة وتخلق عرضًا مذهلاً عند زراعتها جنبًا إلى جنب مع أشجار الكرز ذات الأزهار البيضاء. بعد الإزهار، تظهر أوراقها على شكل قلب مع صبغة حمراء قبل أن تتحول إلى اللون الأخضر. في الخريف، تتحول الأوراق إلى اللون الأصفر اللامع، مما يوفر اهتمامًا متعدد المواسم.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">٤. بتولا النهر (Betula nigra)</h3>
        <p class="mb-4">مع لحاء متقشر جذاب، هذه الشجرة مثالية للمناطق الرطبة ومقاومة للعديد من آفات البتولا الشائعة. يوفر اللحاء المتقشر ذو اللون القرفة اهتمامًا بصريًا على مدار العام، خاصة في فصل الشتاء عندما تكون الشجرة عارية. يمكن زراعة بتولا النهر كعينات ذات جذع واحد أو في مجموعات متعددة السيقان، مما يوفر مرونة في تصميم المناظر الطبيعية. تنمو بسرعة ويمكن أن توفر ظلًا سريعًا في المناطق المطورة حديثًا.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">٥. القرانيا الأمريكية (Carpinus caroliniana)</h3>
        <p class="mb-4">شجرة بطيئة النمو تحت المظلة مع لون خريف جميل ونسيج لحاء مثير للاهتمام يشبه العضلات. المعروفة أيضًا باسم خشب العضلات أو زان أزرق، هذه الشجرة لها خشب صلب بشكل استثنائي استخدمه المستوطنون الأمريكيون الأوائل لمقابض الأدوات وتطبيقات أخرى تتطلب القوة. تحملها للظل يجعلها مثالية للزراعة تحت الأشجار الأكبر، حيث تضيف طبقة من الجمال والوظيفة البيئية إلى المناظر الطبيعية.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">٦. الكرز المزهر (Cornus florida)</h3>
        <p class="mb-4">تنتج هذه الشجرة المزهرة الأيقونية براعم بيضاء أو وردية في الربيع وتوت أحمر لامع في الخريف ذات قيمة للحياة البرية. أشجار الكرز المزهرة هي أشجار تحت المظلة في موائلها الغابات الأصلية، تزدهر في الظل المرقط للأشجار الأطول. أنظمة جذورها الضحلة تجعلها مثالية للزراعة بالقرب من الفناءات والأساسات حيث قد تسبب الأشجار ذات الجذور الأعمق مشاكل.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">٧. العبهر الأمريكي (Liquidambar styraciflua)</h3>
        <p class="mb-4">معروف بأوراقه على شكل نجمة التي تتحول إلى ألوان رائعة في الخريف، يتكيف العبهر جيدًا مع أنواع التربة المختلفة. بينما يكره بعض أصحاب المنازل كراتها البذرية الشائكة، فإنها توفر الغذاء للحياة البرية ويمكن إزالتها من خلال اختيار الأصناف بعناية. الأوراق المميزة على شكل نجمة والحواف الفلينية على الفروع تجعل العبهر سهل التعرف عليه حتى في فصل الشتاء.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">٨. التوبيلو الأسود (Nyssa sylvatica)</h3>
        <p class="mb-4">واحدة من أولى الأشجار التي تعرض ألوان الخريف، تتميز أشجار التوبيلو الأسود بأوراق لامعة تتحول إلى اللون الأحمر النابض بالحياة في وقت مبكر من الموسم. تتميز هذه الأشجار بنمط تفرع أفقي مميز يخلق اهتمامًا بصريًا قويًا، خاصة في فصل الشتاء. أشجار التوبيلو الأسود قيمة بشكل خاص لفاكهتها الصغيرة الوفيرة التي توفر تغذية حاسمة للطيور المهاجرة في الخريف.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">٩. الجميز الأمريكي (Platanus occidentalis)</h3>
        <p class="mb-4">بلحائه المرقط المميز وحجمه الضخم، يحدث الجميز تأثيرًا في المناظر الطبيعية الكبيرة وعلى طول المجاري المائية. يمكن أن تعيش هذه الأشجار لمئات السنين وتطور جذوعًا ضخمة مع تجاويف مجوفة توفر مأوى للحياة البرية. غالبًا ما توجد أشجار الجميز على طول ضفاف الأنهار حيث تساعد أنظمة جذورها الواسعة في منع التآكل.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">١٠. السرو الأصلع (Taxodium distichum)</h3>
        <p class="mb-4">على الرغم من كونها شجرة صنوبرية، فإن هذه الشجرة تفقد إبرها في فصل الشتاء. إنها قابلة للتكيف للغاية ويمكن أن تنمو في المياه الراكدة أو على اليابسة. تطور أشجار السرو الأصلع "ركب" عند نموها في ظروف رطبة، والتي يعتقد أنها تساعد في توفير الأكسجين للجذور. يمكن أن تعيش هذه الأشجار القديمة لأكثر من ألف عام وهي مقاومة بشكل ملحوظ لأضرار الرياح، مما يجعلها قيمة في المناطق المعرضة للأعاصير.</p>
        
        <div class="my-6">
          <img src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1600&q=80" alt="غابة من الأشجار المحلية" class="rounded-lg w-full" />
          <p class="text-sm text-gray-500 mt-2">نظام بيئي صحي للغابات مع أنواع متنوعة من الأشجار المحلية يوفر موطنًا للعديد من الكائنات الحية.</p>
        </div>
        
        <p class="mb-4">عند زراعة الأشجار المحلية، تذكر أن تأخذ في الاعتبار ظروف الموقع المحددة بما في ذلك التعرض للشمس، ورطوبة التربة، والمساحة المتاحة لحجم الشجرة الناضجة. تقنيات الزراعة المناسبة والرعاية المبكرة ضرورية لنجاح الشجرة.</p>
        
        <p class="mb-4">انضم إلى فعالية الزراعة التطوعية القادمة للمساعدة في زيادة عدد الأشجار المحلية في مجتمعنا!</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">لماذا تهم الأشجار المحلية</h3>
        <p class="mb-4">تطورت الأشجار المحلية جنبًا إلى جنب مع الحياة البرية المحلية وهي جزء من النسيج البيئي الذي يدعم التنوع البيولوجي. الأنواع غير المحلية، بينما تكون جذابة أحيانًا، لا توفر نفس الفوائد البيئية ويمكن أن تصبح أحيانًا غازية، مزيحة النباتات المحلية.</p>
        
        <p class="mb-4">من خلال اختيار الأشجار المحلية لمناظرك الطبيعية، فأنت لا تزرع شجرة فحسب - بل تدعم أنظمة بيئية كاملة من الحشرات والطيور وغيرها من الحياة البرية التي تعتمد على هذه الأنواع النباتية المحددة للبقاء. أنت أيضًا تحافظ على الطابع الفريد والتراث لمناظرنا الطبيعية الإقليمية.</p>
        
        <p class="mb-4">اتصل بفريقنا للحصول على نصائح حول اختيار الأشجار المحلية المناسبة لظروف موقعك المحددة وأهداف المناظر الطبيعية الخاصة بك.</p>
      `,
      comments: 12,
      relatedPosts: ['urban-green-spaces', 'tree-planting-climate-change'],
      tags: ['الأنواع المحلية', 'زراعة الأشجار', 'التنوع البيولوجي', 'تنسيق المناظر الطبيعية'],
      moreResources: [
        { 
          title: "دليل التعرف على الأشجار المحلية", 
          url: "#", 
          description: "دليل شامل للتعرف على أنواع الأشجار المحلية في منطقتك."
        },
        { 
          title: "أفضل ممارسات زراعة الأشجار", 
          url: "#", 
          description: "تعلم التقنيات المناسبة لزراعة والعناية بالأشجار الصغيرة."
        }
      ]
    },
    'urban-green-spaces': {
      title: "تأثير المساحات الخضراء الحضرية",
      date: "١٥ أبريل ٢٠٢٥",
      author: "ماركوس تشن",
      authorTitle: "أخصائي التخطيط الحضري",
      authorImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=200&q=80",
      category: "البحث",
      imageUrl: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1600&q=80",
      content: `
        <p class="mb-4">أصبحت المساحات الخضراء الحضرية مهمة بشكل متزايد مع نمو مدننا وازديادها. توفر هذه المناطق فوائد عديدة لسكان المدن والبيئة على حد سواء، مما يخلق بيئات حضرية أكثر صحة واستدامة.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">الفوائد البيئية</h3>
        <p class="mb-4">تساعد الغابات الحضرية في تصفية تلوث الهواء، وتقليل تأثير الجزيرة الحرارية الحضرية، وإدارة مياه الأمطار. يمكن لشجرة ناضجة واحدة امتصاص ما يصل إلى 48 رطلاً من ثاني أكسيد الكربون سنويًا، مما يساعد في مكافحة تغير المناخ على المستوى المحلي.</p>
        
        <p class="mb-4">تعمل حدائق المدينة والحدائق المجتمعية وحتى الحدائق الصغيرة معًا لخلق نظام بيئي حضري يدعم التنوع البيولوجي مع توفير خدمات بيئية حيوية. أظهرت الأبحاث أن الأحياء ذات الغطاء الشجري الأكبر تشهد درجات حرارة أقل خلال موجات الحرارة، وانخفاض الفيضانات خلال أحداث المطر الغزير، وتحسين جودة الهواء على مدار العام.</p>
        
        <div class="my-6">
          <img src="https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?auto=format&fit=crop&w=1600&q=80" alt="حديقة حضرية مع أشجار ومساحة خضراء" class="rounded-lg w-full" />
          <p class="text-sm text-gray-500 mt-2">توفر الحدائق الحضرية مساحة خضراء حيوية في المناطق ذات الكثافة السكانية العالية، مما يوفر فوائد بيئية واجتماعية.</p>
        </div>
        
        <h3 class="text-xl font-bold mb-2 mt-6">تأثيرات الصحة النفسية</h3>
        <p class="mb-4">أظهرت الأبحاث باستمرار أن الوصول إلى المساحات الخضراء يقلل من التوتر والقلق والاكتئاب. حتى التعرض القصير للبيئات الطبيعية يمكن أن يحسن المزاج والوظيفة المعرفية.</p>
        
        <p class="mb-4">وجدت دراسة رائدة من جامعة إكستر أن الأشخاص الذين يقضون ساعتين على الأقل أسبوعيًا في الطبيعة يبلغون عن صحة ورفاهية نفسية أفضل بكثير. لوحظ هذا التأثير بغض النظر عما إذا كان الوقت يقضى في زيارة واحدة أو موزعًا عبر زيارات متعددة أقصر.</p>
        
        <div class="my-6 bg-gray-50 p-4 rounded-lg">
          <p class="italic text-gray-700">"هناك أدلة متزايدة تشير إلى أن الوصول إلى المناطق الطبيعية الآمنة يحسن النتائج الصحية من خلال توفير الاسترخاء النفسي وتقليل التوتر، وتحفيز التماسك الاجتماعي، ودعم النشاط البدني، وتقليل التعرض لملوثات الهواء والضوضاء والحرارة المفرطة." — منظمة الصحة العالمية</p>
        </div>
        
        <h3 class="text-xl font-bold mb-2 mt-6">بناء المجتمع</h3>
        <p class="mb-4">تخلق الحدائق والحدائق المجتمعية مساحات للتجمع تعزز الروابط الاجتماعية والمشاركة المجتمعية. تصبح هذه المساحات أماكن للترفيه والتعليم والفعاليات الثقافية.</p>
        
        <p class="mb-4">يمكن للمساحات الخضراء المصممة جيدًا أن تساعد في سد الانقسامات الاجتماعية من خلال جمع أشخاص من خلفيات مختلفة قد لا يتفاعلون بطريقة أخرى. توفر أرضًا محايدة حيث يمكن للجيران أن يلتقوا، ويمكن للأطفال أن يلعبوا معًا، ويمكن أن تتشكل روابط المجتمع بشكل طبيعي.</p>
        
        <p class="mb-4">أظهرت الحدائق المجتمعية على وجه الخصوص نجاحًا ملحوظًا في بناء تماسك الحي مع معالجة قضايا الأمن الغذائي وتعليم التغذية. تخلق هذه المساحات المشتركة فرصًا لنقل المعرفة بين الأجيال والثقافات، مع الحفاظ على تقاليد البستنة القيمة ومشاركتها.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">القيمة الاقتصادية</h3>
        <p class="mb-4">عادة ما تكون للعقارات القريبة من المساحات الخضراء المحافظ عليها جيدًا قيم أعلى. توفر الأشجار الحضرية وحدها ملايين الدولارات في خدمات النظام البيئي من خلال الحفاظ على الطاقة وتحسين جودة الهواء وإدارة مياه الأمطار.</p>
        
        <p class="mb-4">وجدت دراسة من الجمعية الوطنية للترفيه والحدائق أن المنازل المجاورة للحدائق والمساحات المفتوحة المحمية عادة ما تكون قيمتها أعلى بنسبة 8-20٪ من العقارات المماثلة بدون هذه المرافق. وبالمثل، عادة ما تشهد المناطق التجارية ذات العناصر الخضراء مثل أشجار الشارع والحدائق الصغيرة نشاطًا تجاريًا أعلى ورضا العملاء.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">الفوائد الصحية</h3>
        <p class="mb-4">تشجع المساحات الخضراء النشاط البدني وتوفر فرصًا للتمرين. يرتبط الوصول المنتظم إلى الحدائق بانخفاض معدلات السمنة والحالات الصحية ذات الصلة.</p>
        
        <p class="mb-4">يظهر الأطفال الذين لديهم إمكانية الوصول إلى مناطق اللعب الطبيعية تحسنًا في المهارات الحركية، ومدة الانتباه، والتطور المعرفي مقارنة بأولئك المقيدين بالبيئات المبنية. بالنسبة للبالغين، يرتبط التعرض المنتظم للمساحات الخضراء بانخفاض ضغط الدم، وتقليل هرمونات التوتر، وتحسين وظيفة المناعة.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">مرونة المناخ</h3>
        <p class="mb-4">تلعب المساحات الخضراء الحضرية دورًا حاسمًا في استراتيجيات التكيف مع المناخ. تساعد المدن في إدارة أحداث الطقس المتطرفة المتزايدة من خلال امتصاص الأمطار الزائدة، وتوفير التبريد خلال موجات الحرارة، وتخفيف الرياح القوية.</p>
        
        <p class="mb-4">تقوم المدن ذات التفكير المستقبلي بدمج شبكات البنية التحتية الخضراء في خطط التنمية الخاصة بها، مما يخلق أنظمة مترابطة من الحدائق والممرات الخضراء وحدائق المطر والأسطح الخضراء التي تعمل معًا لبناء المرونة ضد تأثيرات المناخ.</p>
        
        <p class="mb-4">تلتزم منظمتنا بتوسيع وتعزيز المساحات الخضراء الحضرية من خلال مبادرات استراتيجية لزراعة الأشجار ومشاريع الحدائق المجتمعية.</p>
        
        <p class="mb-4">اتصل بنا لمعرفة كيف يمكنك دعم تطوير المساحات الخضراء في حيك!</p>
      `,
      comments: 8,
      relatedPosts: ['native-trees', 'community-garden-guide'],
      tags: ['التخطيط الحضري', 'الصحة العامة', 'البنية التحتية الخضراء', 'تنمية المجتمع'],
      moreResources: [
        { 
          title: "دليل تخطيط المساحات الخضراء الحضرية", 
          url: "#", 
          description: "مورد للمدافعين عن المجتمع والمخططين."
        },
        { 
          title: "ملخص أبحاث فوائد المساحات الخضراء", 
          url: "#", 
          description: "مجموعة من نتائج الأبحاث الرئيسية حول المساحات الخضراء الحضرية."
        }
      ]
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
      author: "By",
      relatedPosts: "Related Posts",
      readingTime: "min read",
      comments: "Comments",
      tags: "Tags",
      moreResources: "More Resources",
      backToBlog: "Back to Blog"
    },
    ar: {
      notFound: "المقال غير موجود",
      notFoundDesc: "عذرًا، المقال الذي تبحث عنه غير موجود.",
      share: "مشاركة هذا المقال:",
      author: "بواسطة",
      relatedPosts: "مقالات ذات صلة",
      readingTime: "دقائق قراءة",
      comments: "تعليقات",
      tags: "الوسوم",
      moreResources: "موارد إضافية",
      backToBlog: "العودة إلى المدونة"
    }
  };

  const t = language === 'ar' ? ui.ar : ui.en;
  
  const readingTime = post ? calculateReadingTime(post.content) : 0;

  if (!post) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">{t.notFound}</h1>
          <p className="mb-6">{t.notFoundDesc}</p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.backToBlog}
            </Button>
          </Link>
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
            <div className="flex items-center text-white/90 gap-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{readingTime} {t.readingTime}</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-2" />
                <span>{post.comments}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main content */}
          <article className="md:w-2/3">
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
                    {/* Social share buttons */}
                    <button className="text-gray-600 hover:text-green-500">
                      <Share2 className="h-5 w-5" />
                    </button>
                    <button className="text-gray-600 hover:text-green-500">Twitter</button>
                    <button className="text-gray-600 hover:text-green-500">Facebook</button>
                    <button className="text-gray-600 hover:text-green-500">LinkedIn</button>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-2">{t.tags}</p>
                  <div className="flex flex-wrap gap-2">
                    {handleEmptyArray(post.tags, []).map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <div className="md:w-1/3 space-y-6">
            {/* Author card */}
            <Card className="overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={post.authorImage} 
                    alt={post.author}
                    className="w-12 h-12 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <p className="font-semibold">{post.author}</p>
                    <p className="text-sm text-gray-500">{post.authorTitle}</p>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Related posts */}
            {post.relatedPosts && post.relatedPosts.length > 0 && (
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{t.relatedPosts}</h3>
                  <div className="space-y-4">
                    {post.relatedPosts.map(relatedSlug => {
                      const relatedPost = postsForLanguage[relatedSlug as keyof typeof postsForLanguage];
                      if (!relatedPost) return null;
                      
                      return (
                        <Link key={relatedSlug} to={`/blog/${relatedSlug}`} className="block group">
                          <div className="flex items-start">
                            <div className="w-16 h-16 flex-shrink-0">
                              <img 
                                src={relatedPost.imageUrl} 
                                alt={relatedPost.title}
                                className="w-full h-full object-cover rounded" 
                              />
                            </div>
                            <div className="ml-3">
                              <h4 className="font-medium group-hover:text-green-600 transition-colors line-clamp-2">
                                {relatedPost.title}
                              </h4>
                              <p className="text-sm text-gray-500">{relatedPost.date}</p>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </Card>
            )}
            
            {/* Additional resources */}
            {post.moreResources && post.moreResources.length > 0 && (
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{t.moreResources}</h3>
                  <div className="space-y-4">
                    {post.moreResources.map((resource, index) => (
                      <div key={index}>
                        <a href={resource.url} className="font-medium text-green-600 hover:text-green-800">
                          {resource.title}
                        </a>
                        <p className="text-sm text-gray-500">{resource.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>

        <div className="mt-12">
          <Link to="/blog" className="inline-flex items-center text-green-600 hover:text-green-800">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.backToBlog}
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogPost;
