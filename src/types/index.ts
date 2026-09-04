

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  url: string;
  title: string;
  description: string;
  role: string;
  image: string;
  ogImage: string;
  twitter: string;
  locale: string;
}




/** Contact form shape — kept in sync with the Zod schema in `lib/validation.ts`. */
export interface ContactFormValues {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget?: string;
  message: string;
}

