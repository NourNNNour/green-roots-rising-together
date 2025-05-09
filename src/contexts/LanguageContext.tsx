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
    
    // Project name
    "project.name": "Alakhdar",
    
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
    
    // Theme
    "theme.light": "Light Mode",
    "theme.dark": "Dark Mode",
    
    // Blog
    "blog.title": "Our Blog",
    "blog.description": "Stories, updates, and insights from our environmental conservation journey.",
    "blog.latestTitle": "Latest from Our Blog",
    "blog.latestDescription": "Stay updated with our latest projects, volunteer stories, and environmental insights.",
    "blog.readAll": "Read All Articles",
    "blog.readMore": "Read more",
    "blog.search": "Search articles...",
    "blog.noResults": "No articles found matching your search criteria.",
    "blog.tryAgain": "Please try a different search term or browse all articles.",
    
    // Volunteer Page
    "volunteer.title": "Volunteer With Us",
    "volunteer.description": "Join our community of environmental changemakers and help us build a more sustainable future.",
    "volunteer.whyTitle": "Why Volunteer?",
    "volunteer.reason1Title": "Make a Real Impact",
    "volunteer.reason1Text": "Your time and effort directly contribute to environmental restoration and conservation in our community.",
    "volunteer.reason2Title": "Connect with Nature",
    "volunteer.reason2Text": "Spend time outdoors, learn about local ecosystems, and develop a deeper connection with the natural world.",
    "volunteer.reason3Title": "Build Community",
    "volunteer.reason3Text": "Meet like-minded people, share experiences, and work together toward common environmental goals.",
    "volunteer.opportunitiesTitle": "Current Opportunities",
    "volunteer.spotsAvailable": "spots available",
    "volunteer.signUp": "Sign Up",
    "volunteer.noOpportunities": "There are currently no volunteer opportunities available.",
    "volunteer.cantFindTitle": "Can't find what you're looking for?",
    "volunteer.cantFindText": "We're constantly developing new volunteer opportunities. Contact us to discuss how your skills and interests can contribute to our mission.",
    "volunteer.contactUs": "Contact Us",
    
    // Donate Page
    "donate.title": "Support Our Mission",
    "donate.description": "Your donation directly funds tree planting, ecosystem restoration, and environmental education initiatives.",
    "donate.oneTime": "One-time Donation",
    "donate.monthly": "Monthly Donation",
    "donate.oneTimeTitle": "Make a One-time Gift",
    "donate.oneTimeDescription": "Your one-time contribution helps us fund immediate environmental projects and initiatives.",
    "donate.monthlyTitle": "Become a Monthly Supporter",
    "donate.monthlyDescription": "Provide sustainable, ongoing support for our environmental mission with a recurring monthly donation.",
    "donate.amount": "Select Amount",
    "donate.custom": "Custom Amount:",
    "donate.reset": "Reset",
    "donate.donateNow": "Donate Now",
    "donate.subscribeDonation": "Subscribe",
    "donate.processing": "Processing...",
    "donate.success": "Thank you for your donation!",
    "donate.thankYou": "Your contribution will help us make a positive environmental impact.",
    "donate.error": "Donation Error",
    "donate.minAmount": "Please enter a minimum donation amount of $1.",
    "donate.tryAgain": "There was an error processing your donation. Please try again.",
    "donate.impactTitle": "Your Donation's Impact",
    "donate.impact1": "Plants 5 native trees to help restore local ecosystems and improve air quality.",
    "donate.impact2": "Provides educational materials for 10 students to learn about environmental conservation.",
    "donate.impact3": "Sponsors a community cleanup event to remove pollution from local waterways.",
    
    // Events Page
    "events.title": "Upcoming Events",
    "events.description": "Join us at our community events to learn, connect, and take action for the environment.",
    "events.full": "Full",
    "events.register": "Register",
    "events.noEvents": "No events found",
    "events.checkBack": "Please check back later for upcoming events.",
    "events.stayUpdated": "Stay Updated",
    "events.calendarDescription": "Never miss an event! Subscribe to our calendar to get notifications about upcoming volunteer opportunities and community gatherings.",
    "events.subscribeCalendar": "Subscribe to Calendar",
    
    // Authentication
    "auth.login": "Log in with Google",
    "auth.continue": "or continue with email",
    "auth.signup": "Don't have an account?",
    "auth.createAccount": "Create an account",
    "auth.alreadyAccount": "Already have an account?",
    "auth.loginInstead": "Log in instead",
    "auth.forgotPassword": "Forgot password?",
    "auth.resetPassword": "Reset Password",
    "auth.resetInstructions": "Enter your email address and we'll send you instructions to reset your password.",
    "auth.emailAddress": "Email Address",
    "auth.password": "Password",
    "auth.confirmPassword": "Confirm Password",
    "auth.fullName": "Full Name",
    "auth.phoneNumber": "Phone Number (optional)",
    "auth.country": "Country/Region",
    "auth.volunteerInterest": "I am interested in volunteering",
    "auth.areasOfInterest": "Areas of Interest",
    "auth.createPasswordAccount": "Create Password",
    "auth.backToLogin": "Back to login",
    "auth.sendResetLink": "Send Reset Link",
    "auth.resetLinkSent": "Reset link sent! Check your email.",
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
    
    // Project name
    "project.name": "الأخضر",
    
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
    
    // Theme
    "theme.light": "الوضع المضيء",
    "theme.dark": "الوضع المظلم",
    
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
    
    // Blog
    "blog.title": "مدونتنا",
    "blog.description": "القصص والتحديثات والرؤى من رحلة الحفاظ على البيئة.",
    "blog.latestTitle": "أحدث المقالات",
    "blog.latestDescription": "ابق على اطلاع بآخر مشاريعنا، وقصص المتطوعين، والرؤى البيئية.",
    "blog.readAll": "قراءة جميع المقالات",
    "blog.readMore": "اقرأ المزيد",
    "blog.search": "بحث في المقالات...",
    "blog.noResults": "لم يتم العثور على مقالات تطابق معايير البحث الخاصة بك.",
    "blog.tryAgain": "يرجى تجربة مصطلح بحث مختلف أو تصفح جميع المقالات.",
    
    // Volunteer Page
    "volunteer.title": "تطوع معنا",
    "volunteer.description": "انضم إلى مجتمعنا من صانعي التغيير البيئي وساعدنا في بناء مستقبل أكثر استدامة.",
    "volunteer.whyTitle": "لماذا التطوع؟",
    "volunteer.reason1Title": "أحدث تأثيرًا حقيقيًا",
    "volunteer.reason1Text": "وقتك وجهودك تساهم مباشرة في استعادة البيئة والحفاظ عليها في مجتمعنا.",
    "volunteer.reason2Title": "تواصل مع الطبيعة",
    "volunteer.reason2Text": "قضاء الوقت في الهواء الطلق، والتعرف على النظم البيئية المحلية، وتطوير علاقة أعمق مع العالم الطبيعي.",
    "volunteer.reason3Title": "بناء المجتمع",
    "volunteer.reason3Text": "التقِ بأشخاص يشاركونك نفس التفكير، وتبادل الخبرات، والعمل معًا نحو أهداف بيئية مشتركة.",
    "volunteer.opportunitiesTitle": "الفرص الحالية",
    "volunteer.spotsAvailable": "أماكن متاحة",
    "volunteer.signUp": "سجل الآن",
    "volunteer.noOpportunities": "لا توجد حاليًا فرص تطوع متاحة.",
    "volunteer.cantFindTitle": "لم تجد ما تبحث عنه؟",
    "volunteer.cantFindText": "نحن نطور باستمرار فرص تطوع جديدة. اتصل بنا لمناقشة كيف يمكن لمهاراتك واهتماماتك أن تساهم في مهمتنا.",
    "volunteer.contactUs": "اتصل بنا",
    
    // Donate Page
    "donate.title": "ادعم مهمتنا",
    "donate.description": "تبرعك يمول مباشرة زراعة الأشجار، واستعادة النظام البيئي، ومبادرات التثقيف البيئي.",
    "donate.oneTime": "تبرع لمرة واحدة",
    "donate.monthly": "تبرع شهري",
    "donate.oneTimeTitle": "قدم هدية لمرة واحدة",
    "donate.oneTimeDescription": "مساهمتك لمرة واحدة تساعدنا في تمويل المشاريع والمبادرات البيئية الفورية.",
    "donate.monthlyTitle": "كن داعمًا شهريًا",
    "donate.monthlyDescription": "قدم دعمًا مستدامًا ومستمرًا لمهمتنا البيئية من خلال تبرع شهري متكرر.",
    "donate.amount": "اختر المبلغ",
    "donate.custom": "مبلغ مخصص:",
    "donate.reset": "إعادة تعيين",
    "donate.donateNow": "تبرع الآن",
    "donate.subscribeDonation": "اشترك",
    "donate.processing": "جاري المعالجة...",
    "donate.success": "شكرا لتبرعك!",
    "donate.thankYou": "مساهمتك ستساعدنا على إحداث تأثير بيئي إيجابي.",
    "donate.error": "خطأ في التبرع",
    "donate.minAmount": "الرجاء إدخال الحد الأدنى للتبرع وهو 1 دولار.",
    "donate.tryAgain": "حدث خطأ أثناء معالجة تبرعك. يرجى المحاولة مرة أخرى.",
    "donate.impactTitle": "تأثير تبرعك",
    "donate.impact1": "يزرع 5 أشجار محلية للمساعدة في استعادة النظم البيئية المحلية وتحسين جودة الهواء.",
    "donate.impact2": "توفير مواد تعليمية لـ 10 طلاب للتعلم عن الحفاظ على البيئة.",
    "donate.impact3": "رعاية حدث تنظيف مجتمعي لإزالة التلوث من المجاري المائية المحلية.",
    
    // Events Page
    "events.title": "الأحداث القادمة",
    "events.description": "انضم إلينا في فعالياتنا المجتمعية للتعلم والتواصل واتخاذ إجراءات من أجل البيئة.",
    "events.full": "ممتلئ",
    "events.register": "التسجيل",
    "events.noEvents": "لم يتم العثور على فعاليات",
    "events.checkBack": "يرجى التحقق لاحقًا للاطلاع على الأحداث القادمة.",
    "events.stayUpdated": "ابق على اطلاع",
    "events.calendarDescription": "لا تفوت أي حدث! اشترك في تقويمنا للحصول على إشعارات حول فرص التطوع المقبلة والتجمعات المجتمعية.",
    "events.subscribeCalendar": "اشترك في التقويم",
    
    // Authentication
    "auth.login": "تسجيل الدخول بواسطة جوجل",
    "auth.continue": "أو المتابعة باستخدام البريد الإلكتروني",
    "auth.signup": "ليس لديك حساب؟",
    "auth.createAccount": "إنشاء حساب",
    "auth.alreadyAccount": "لديك حساب بالفعل؟",
    "auth.loginInstead": "تسجيل الدخول بدلاً من ذلك",
    "auth.forgotPassword": "نسيت كلمة المرور؟",
    "auth.resetPassword": "إعادة تعيين كلمة المرور",
    "auth.resetInstructions": "أدخل عنوان بريدك الإلكتروني وسنرسل لك تعليمات لإعادة تعيين كلمة المرور الخاصة بك.",
    "auth.emailAddress": "عنوان البريد الإلكتروني",
    "auth.password": "كلمة المرور",
    "auth.confirmPassword": "تأكيد كلمة المرور",
    "auth.fullName": "الاسم الكامل",
    "auth.phoneNumber": "رقم الهاتف (اختياري)",
    "auth.country": "البلد/المنطقة",
    "auth.volunteerInterest": "أنا مهتم بالتطوع",
    "auth.areasOfInterest": "مجالات الاهتمام",
    "auth.createPasswordAccount": "إنشاء كلمة المرور",
    "auth.backToLogin": "العودة إلى تسجيل الدخول",
    "auth.sendResetLink": "إرسال رابط إعادة التعيين",
    "auth.resetLinkSent": "تم إرسال رابط إعادة التعيين! تحقق من بريدك الإلكتروني.",
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
