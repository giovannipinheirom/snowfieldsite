export type TargetAudience = 'filho' | 'mim' | 'empresa';

export interface SiteContactInfo {
  name: string;
  sinceYear: number;
  audienceRange: string;
  differentials: string[];
  modalities: {
    presential: string;
    condos: string;
    corporate: string;
    online: string;
  };
  locationDescription: string;
  whatsapp: {
    number: string;
    display: string;
    cleanNumber: string;
    defaultMessage: string;
  };
  email: string;
  instagram: {
    handle: string;
    url: string;
  };
  officeHours: {
    time: string;
    daysPlaceholder: string; // [DIAS DA SEMANA]
  };
  languagesPlaceholder: string; // [LISTAR IDIOMAS]
  services: string[];
  peakEnrollmentMonths: string[];
  seasonalBanner: {
    enabled: boolean;
    text: string;
    linkUrl: string;
    linkText: string;
    startDate: string; // YYYY-MM-DD
    endDate: string;   // YYYY-MM-DD
  };
}

export interface LanguageLevelDescription {
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  title: string;
  whatYouLearn: string;
}

export interface UsefulPhrase {
  phrase: string;
  hint?: string;
  translation: string;
}

export interface LanguageItem {
  id: string;
  slug: string;
  name: string;
  badge: string;
  shortDescription: string;
  longDescription: string;
  targetAudience: string;
  typicalActivities: string[];
  levels: LanguageLevelDescription[];
  usefulPhrases: UsefulPhrase[];
  highlights: string[];
}

export interface CourseItem {
  id: string;
  slug: string;
  title: string;
  language: string;
  audience: string;
  format: 'Online' | 'Presencial (SBC)' | 'Híbrido' | 'In-Company';
  duration: string;
  workload: string;
  price?: string; // Optional: se não preenchido, não aparece
  checkoutUrl?: string; // Optional: se preenchido, botão Comprar Agora; se não, WhatsApp
  features: string[];
  highlight?: boolean;
}

export interface TestimonialItem {
  id: string;
  authorName: string;
  roleOrProfile: string;
  languageOrCourse: string;
  content: string;
  isPlaceholder?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: 'geral' | 'aulas' | 'condominios' | 'empresas' | 'matricula';
}

export interface TestQuestion {
  id: number;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
  question: string;
  readingPassage?: string;
  options: {
    id: string;
    text: string;
  }[];
  correctOptionId: string;
  category: 'grammar' | 'vocabulary' | 'reading';
}

export interface CefrResultRange {
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
  title: string;
  scoreRange: [number, number];
  practicalMeaning: string;
  recommendedCourse: string;
  courseSlug?: string;
}

export interface LeadFormData {
  name: string;
  phone: string;
  audience: TargetAudience;
  language: string;
  lgpdConsent: boolean;
  email?: string;
  studentAge?: string;
  companyName?: string;
  employeeCount?: string;
  jobTitle?: string;
  modality?: string;
  goal?: string;
  bestTimeToContact?: string;
  message?: string;
  condoName?: string;
  neighborhood?: string;
  approximateInterestedCount?: string;
  pageSource?: string;
  utmParams?: Record<string, string>;
  _gotcha?: string;
  _renderedAt?: number;
}
