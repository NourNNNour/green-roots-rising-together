
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Record<string, Record<string, string>>;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.login": "Log In",
    "nav.join": "Join Us",
    
    // Home Page
    "hero.title": "Cultivating Change: Growing a Greener Future Together",
    "hero.description": "Join our mission to restore local ecosystems through community-driven tree planting and environmental conservation projects.",
    "hero.volunteer": "Volunteer Now",
    "hero.donate": "Donate",
    
    // Impact Section
    "impact.title": "Our Impact",
    "impact.description": "Since our inception, we've made significant strides in environmental conservation. Here's how our collective efforts are making a difference:",
    "impact.trees": "Trees Planted",
    "impact.volunteers": "Active Volunteers",
    "impact.projects": "Projects Completed",
    
    // How To Help
    "help.title": "How You Can Help",
    "help.description": "Everyone can make a difference. Join our community and contribute to a healthier planet through these simple actions:",
    "help.volunteer.title": "Become a Volunteer",
    "help.volunteer.description": "Join our dedicated team of volunteers to plant trees, restore ecosystems, and educate communities. No experience necessary – just bring your enthusiasm and we'll provide the guidance.",
    "help.volunteer.button": "Get Started",
    "help.donate.title": "Make a Donation",
    "help.donate.description": "Your financial support helps us purchase saplings, tools, and resources needed for our environmental projects. Every contribution, no matter the size, makes a significant impact.",
    "help.donate.button": "Donate Now",
    
    // CTA
    "cta.title": "Join Our Mission Today",
    "cta.description": "Together, we can make a lasting impact on our environment. Whether you plant with us or support our cause, every action counts.",
    "cta.signup": "Sign Up Now",
    "cta.contact": "Contact Us",

    // Projects
    "projects.title": "Our Projects",
    "projects.description": "Explore our active environmental initiatives and discover how we're making a difference in communities across the region.",
    "projects.active": "Active Projects",
    "projects.progress": "Progress",
    "projects.learnMore": "Learn More",
    "projects.idea.title": "Have a Project Idea?",
    "projects.idea.description": "We're always looking for new projects and collaboration opportunities. If you have an idea for an environmental initiative in your community, we'd love to hear from you!",
    "projects.idea.button": "Get in Touch",

    // Footer
    "footer.mission": "Cultivating change and growing a greener future together through community-driven environmental projects.",
    "footer.quickLinks": "Quick Links",
    "footer.getInvolved": "Get Involved",
    "footer.contactUs": "Contact Us",
    "footer.rights": "All rights reserved.",
    "footer.made": "Made with",
    "footer.planet": "for our planet",

    // Language
    "language": "Language",
    "language.en": "English",
    "language.ar": "Arabic",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.projects": "المشاريع",
    "nav.blog": "المدونة",
    "nav.contact": "اتصل بنا",
    "nav.login": "تسجيل الدخول",
    "nav.join": "انضم إلينا",
    
    // Home Page
    "hero.title": "زراعة التغيير: نمو مستقبل أكثر اخضرارًا معًا",
    "hero.description": "انضم إلى مهمتنا لاستعادة النظم البيئية المحلية من خلال مشاريع زراعة الأشجار والحفاظ على البيئة التي يقودها المجتمع.",
    "hero.volunteer": "تطوع الآن",
    "hero.donate": "تبرع",
    
    // Impact Section
    "impact.title": "تأثيرنا",
    "impact.description": "منذ إنشائنا، حققنا خطوات كبيرة في الحفاظ على البيئة. إليك كيف تحدث جهودنا الجماعية فرقًا:",
    "impact.trees": "الأشجار المزروعة",
    "impact.volunteers": "متطوعون نشطون",
    "impact.projects": "المشاريع المكتملة",
    
    // How To Help
    "help.title": "كيف يمكنك المساعدة",
    "help.description": "يمكن للجميع إحداث فرق. انضم إلى مجتمعنا وساهم في كوكب أكثر صحة من خلال هذه الإجراءات البسيطة:",
    "help.volunteer.title": "كن متطوعًا",
    "help.volunteer.description": "انضم إلى فريق المتطوعين المتفانين لدينا لزراعة الأشجار واستعادة النظم البيئية وتثقيف المجتمعات. لا حاجة للخبرة - فقط أحضر حماسك وسنقدم التوجيه.",
    "help.volunteer.button": "ابدأ الآن",
    "help.donate.title": "قدم تبرعًا",
    "help.donate.description": "يساعد دعمك المالي في شراء الشتلات والأدوات والموارد اللازمة لمشاريعنا البيئية. كل مساهمة، مهما كان حجمها، تحدث تأثيرًا كبيرًا.",
    "help.donate.button": "تبرع الآن",
    
    // CTA
    "cta.title": "انضم إلى مهمتنا اليوم",
    "cta.description": "معًا، يمكننا إحداث تأثير دائم على بيئتنا. سواء زرعت معنا أو دعمت قضيتنا، كل إجراء مهم.",
    "cta.signup": "سجل الآن",
    "cta.contact": "اتصل بنا",

    // Projects
    "projects.title": "مشاريعنا",
    "projects.description": "استكشف مبادراتنا البيئية النشطة واكتشف كيف نحدث فرقًا في المجتمعات عبر المنطقة.",
    "projects.active": "المشاريع النشطة",
    "projects.progress": "التقدم",
    "projects.learnMore": "اقرأ المزيد",
    "projects.idea.title": "هل لديك فكرة مشروع؟",
    "projects.idea.description": "نحن دائمًا نبحث عن مشاريع جديدة وفرص للتعاون. إذا كان لديك فكرة لمبادرة بيئية في مجتمعك، نود أن نسمع منك!",
    "projects.idea.button": "تواصل معنا",

    // Footer
    "footer.mission": "زراعة التغيير وتنمية مستقبل أكثر اخضرارًا معًا من خلال مشاريع بيئية يقودها المجتمع.",
    "footer.quickLinks": "روابط سريعة",
    "footer.getInvolved": "شارك معنا",
    "footer.contactUs": "اتصل بنا",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.made": "صنع بـ",
    "footer.planet": "من أجل كوكبنا",

    // Language
    "language": "اللغة",
    "language.en": "الإنجليزية",
    "language.ar": "العربية",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ar'); // Arabic as default

  // Function to get translation
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen">
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
