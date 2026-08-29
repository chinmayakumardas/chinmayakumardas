export interface PersonSchema {
  "@context": "https://schema.org";
  "@type": "Person";
  "@id": string;

  name: string;
  givenName: string;
  familyName: string;

  url: string;
  image: string;

  jobTitle: string;
  description: string;

  sameAs: string[];
  knowsAbout: string[];
}

export interface WebsiteSchema {
  "@context": "https://schema.org";
  "@type": "WebSite";
  "@id": string;

  name: string;
  url: string;
  description: string;
  inLanguage: string;

  publisher: {
    "@id": string;
  };

  author: {
    "@id": string;
  };

  mainEntity: {
    "@id": string;
  };

  copyrightHolder: {
    "@id": string;
  };
}