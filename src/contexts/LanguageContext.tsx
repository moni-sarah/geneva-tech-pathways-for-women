import React, { createContext, useContext, useState } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.about": "About",
    "nav.program": "Program",
    "nav.benefits": "Benefits",
    "nav.eligibility": "Eligibility",
    "nav.timeline": "Timeline",
    "nav.partners": "Partners",
    "nav.apply": "Apply Now",

    // Hero
    "hero.title": "Future Enabled Tech Careers for Women",
    "hero.subtitle": "Empowering migrant, refugee, and newcomer women in Geneva to build sustainable careers in Switzerland's growing tech sector.",
    "hero.cta1": "Apply Now",
    "hero.cta2": "Learn More",

    // About
    "about.tag": "About the Program",
    "about.title": "Enabling Sustainable Career Futures",
    "about.description": "FE Hub Geneva is a career-transition and digital upskilling initiative designed to support migrant, refugee, and newcomer women in Geneva who aim to enter Switzerland's growing tech sector.",
    "about.mission.title": "Our Mission",
    "about.mission.text": "Despite Switzerland's strong digital economy, many qualified women with international backgrounds face structural barriers to accessing IT careers. We address this gap through accessible digital training combined with employability preparation.",
    "about.who.title": "Who It's For",
    "about.who.text": "Migrant, refugee, and newcomer women living in Geneva who want to transition into tech careers. No prior tech experience required — just motivation and basic digital access.",
    "about.gain.title": "What You'll Gain",
    "about.gain.text": "Market-relevant digital skills, professional mentorship, career guidance tailored to Swiss hiring standards, and access to Geneva's thriving tech ecosystem.",

    // Program
    "program.tag": "Program Overview",
    "program.title": "Your 3-Month Pathway to Tech",
    "program.month1.title": "Month 1",
    "program.month1.name": "Digital Foundations",
    "program.month1.desc": "Build your digital literacy, explore tech career paths, and receive your personalized AI skill assessment to guide your learning journey.",
    "program.month2.title": "Month 2",
    "program.month2.name": "Technical Skills",
    "program.month2.desc": "Dive into hands-on training in Web & Mobile Development, Data Analysis, or AI & Digital Skills based on your interests and assessment results.",
    "program.month3.title": "Month 3",
    "program.month3.name": "Career Preparation",
    "program.month3.desc": "Polish your CV, build your portfolio, practice interviews, and connect with Swiss tech employers through our partner network.",

    // Benefits
    "benefits.tag": "What Participants Receive",
    "benefits.title": "Everything You Need to Succeed",
    "benefits.ai": "AI Skill Assessment",
    "benefits.ai.desc": "Personalized evaluation of your skills, interests, and readiness to create a tailored learning pathway.",
    "benefits.training": "Structured Training",
    "benefits.training.desc": "12 weeks of guided, hands-on learning in high-demand digital fields with real-world projects.",
    "benefits.mentorship": "Mentorship Program",
    "benefits.mentorship.desc": "Connect with experienced women in tech who will guide and support your career transition.",
    "benefits.career": "Career Guidance",
    "benefits.career.desc": "CV building, interview prep, and job search strategies tailored to the Swiss market.",
    "benefits.ecosystem": "Tech Ecosystem Access",
    "benefits.ecosystem.desc": "Introductions to Swiss tech companies, networking events, and internship opportunities.",
    "benefits.community": "Peer Community",
    "benefits.community.desc": "Join a supportive community of women on the same journey — learn, grow, and succeed together.",

    // Eligibility
    "eligibility.tag": "Eligibility Criteria",
    "eligibility.title": "Who Can Apply?",
    "eligibility.subtitle": "Our program is designed for women who meet the following criteria:",
    "eligibility.1": "Live in the Canton of Geneva",
    "eligibility.2": "Identify as a woman",
    "eligibility.3": "Be a migrant, refugee, or newcomer to Switzerland",
    "eligibility.4": "Have basic digital access (laptop & internet)",
    "eligibility.5": "Be motivated to pursue a career in tech",
    "eligibility.cta": "Check Your Eligibility & Apply",

    // Timeline
    "timeline.tag": "Program Timeline",
    "timeline.title": "Key Dates",
    "timeline.1.date": "May 2026",
    "timeline.1.title": "Applications Open",
    "timeline.1.desc": "Submit your application and complete the initial assessment.",
    "timeline.2.date": "June 2026",
    "timeline.2.title": "Cohort Starts",
    "timeline.2.desc": "Onboarding, orientation, and AI skill assessment.",
    "timeline.3.date": "June – August 2026",
    "timeline.3.title": "Program Duration",
    "timeline.3.desc": "12 weeks of intensive training and career preparation.",
    "timeline.4.date": "September 2026",
    "timeline.4.title": "Graduation & Career Launch",
    "timeline.4.desc": "Showcase projects, connect with employers, and launch your career.",

    // Partners
    "partners.tag": "Partners & Supporters",
    "partners.title": "Building Together",
    "partners.subtitle": "FE Hub Geneva is made possible through partnerships with local organizations, tech companies, and training institutions committed to inclusion and diversity.",
    "partners.ngos": "Local NGOs",
    "partners.ngos.desc": "Community organizations supporting integration and social inclusion in Geneva.",
    "partners.tech": "Tech Companies",
    "partners.tech.desc": "Leading Swiss tech firms providing mentorship, internships, and career pathways.",
    "partners.training": "Training Partners",
    "partners.training.desc": "Educational institutions offering curriculum support and certification.",
    "partners.cta": "Become a Partner",

    // Footer
    "footer.tagline": "We don't only train. We enable sustainable career futures.",
    "footer.program": "Program",
    "footer.connect": "Connect",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.rights": "All rights reserved.",

    // Impact
    "impact.title": "Our Impact",
    "impact.members": "Participants",
    "impact.mentors": "Mentors",
    "impact.events": "Events",
    "impact.partners": "Partners",
  },
  fr: {
    // Nav
    "nav.about": "À Propos",
    "nav.program": "Programme",
    "nav.benefits": "Avantages",
    "nav.eligibility": "Éligibilité",
    "nav.timeline": "Calendrier",
    "nav.partners": "Partenaires",
    "nav.apply": "Postuler",

    // Hero
    "hero.title": "Carrières Tech du Futur pour les Femmes",
    "hero.subtitle": "Accompagner les femmes migrantes, réfugiées et nouvellement arrivées à Genève vers des carrières durables dans le secteur tech suisse.",
    "hero.cta1": "Postuler Maintenant",
    "hero.cta2": "En Savoir Plus",

    // About
    "about.tag": "À Propos du Programme",
    "about.title": "Des Carrières Durables pour l'Avenir",
    "about.description": "FE Hub Geneva est une initiative de transition de carrière et de montée en compétences numériques conçue pour les femmes migrantes, réfugiées et nouvellement arrivées à Genève qui souhaitent intégrer le secteur tech suisse.",
    "about.mission.title": "Notre Mission",
    "about.mission.text": "Malgré la forte économie numérique de la Suisse, de nombreuses femmes qualifiées issues de l'immigration font face à des obstacles structurels. Nous comblons ce fossé par une formation numérique accessible combinée à une préparation à l'employabilité.",
    "about.who.title": "Pour Qui ?",
    "about.who.text": "Femmes migrantes, réfugiées et nouvellement arrivées vivant à Genève qui souhaitent se reconvertir dans la tech. Aucune expérience préalable requise — juste de la motivation et un accès numérique de base.",
    "about.gain.title": "Ce Que Vous Gagnerez",
    "about.gain.text": "Des compétences numériques adaptées au marché, un mentorat professionnel, un accompagnement carrière adapté aux standards suisses, et un accès à l'écosystème tech genevois.",

    // Program
    "program.tag": "Aperçu du Programme",
    "program.title": "Votre Parcours de 3 Mois",
    "program.month1.title": "Mois 1",
    "program.month1.name": "Fondamentaux Numériques",
    "program.month1.desc": "Développez votre culture numérique, explorez les métiers tech et recevez votre évaluation personnalisée par IA.",
    "program.month2.title": "Mois 2",
    "program.month2.name": "Compétences Techniques",
    "program.month2.desc": "Formation pratique en développement Web & Mobile, analyse de données ou IA & compétences numériques.",
    "program.month3.title": "Mois 3",
    "program.month3.name": "Préparation Carrière",
    "program.month3.desc": "Perfectionnez votre CV, construisez votre portfolio, préparez vos entretiens et connectez-vous avec les employeurs tech suisses.",

    // Benefits
    "benefits.tag": "Ce Que Vous Recevez",
    "benefits.title": "Tout Pour Réussir",
    "benefits.ai": "Évaluation IA",
    "benefits.ai.desc": "Évaluation personnalisée de vos compétences et intérêts pour créer un parcours d'apprentissage sur mesure.",
    "benefits.training": "Formation Structurée",
    "benefits.training.desc": "12 semaines de formation guidée et pratique dans les domaines numériques les plus demandés.",
    "benefits.mentorship": "Programme de Mentorat",
    "benefits.mentorship.desc": "Connectez-vous avec des femmes expérimentées dans la tech qui guideront votre transition.",
    "benefits.career": "Accompagnement Carrière",
    "benefits.career.desc": "Création de CV, préparation aux entretiens et stratégies adaptées au marché suisse.",
    "benefits.ecosystem": "Accès à l'Écosystème Tech",
    "benefits.ecosystem.desc": "Introductions aux entreprises tech suisses, événements de networking et opportunités de stages.",
    "benefits.community": "Communauté de Pairs",
    "benefits.community.desc": "Rejoignez une communauté solidaire de femmes en transition — apprenez, grandissez et réussissez ensemble.",

    // Eligibility
    "eligibility.tag": "Critères d'Éligibilité",
    "eligibility.title": "Qui Peut Postuler ?",
    "eligibility.subtitle": "Notre programme s'adresse aux femmes qui répondent aux critères suivants :",
    "eligibility.1": "Résider dans le Canton de Genève",
    "eligibility.2": "S'identifier comme femme",
    "eligibility.3": "Être migrante, réfugiée ou nouvellement arrivée en Suisse",
    "eligibility.4": "Avoir un accès numérique de base (ordinateur & internet)",
    "eligibility.5": "Être motivée pour poursuivre une carrière dans la tech",
    "eligibility.cta": "Vérifier Votre Éligibilité & Postuler",

    // Timeline
    "timeline.tag": "Calendrier du Programme",
    "timeline.title": "Dates Clés",
    "timeline.1.date": "Mai 2026",
    "timeline.1.title": "Ouverture des Candidatures",
    "timeline.1.desc": "Soumettez votre candidature et complétez l'évaluation initiale.",
    "timeline.2.date": "Juin 2026",
    "timeline.2.title": "Début de la Cohorte",
    "timeline.2.desc": "Accueil, orientation et évaluation des compétences par IA.",
    "timeline.3.date": "Juin – Août 2026",
    "timeline.3.title": "Durée du Programme",
    "timeline.3.desc": "12 semaines de formation intensive et de préparation professionnelle.",
    "timeline.4.date": "Septembre 2026",
    "timeline.4.title": "Diplôme & Lancement de Carrière",
    "timeline.4.desc": "Présentez vos projets, connectez-vous avec les employeurs et lancez votre carrière.",

    // Partners
    "partners.tag": "Partenaires & Soutiens",
    "partners.title": "Construire Ensemble",
    "partners.subtitle": "FE Hub Geneva est rendu possible grâce à des partenariats avec des organisations locales, des entreprises tech et des institutions de formation engagées pour l'inclusion et la diversité.",
    "partners.ngos": "ONG Locales",
    "partners.ngos.desc": "Organisations communautaires soutenant l'intégration et l'inclusion sociale à Genève.",
    "partners.tech": "Entreprises Tech",
    "partners.tech.desc": "Entreprises tech suisses de premier plan offrant mentorat, stages et perspectives de carrière.",
    "partners.training": "Partenaires de Formation",
    "partners.training.desc": "Institutions éducatives offrant un soutien pédagogique et des certifications.",
    "partners.cta": "Devenir Partenaire",

    // Footer
    "footer.tagline": "Nous ne formons pas seulement. Nous créons des avenirs professionnels durables.",
    "footer.program": "Programme",
    "footer.connect": "Contact",
    "footer.legal": "Légal",
    "footer.privacy": "Politique de Confidentialité",
    "footer.terms": "Conditions d'Utilisation",
    "footer.rights": "Tous droits réservés.",

    // Impact
    "impact.title": "Notre Impact",
    "impact.members": "Participantes",
    "impact.mentors": "Mentors",
    "impact.events": "Événements",
    "impact.partners": "Partenaires",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
