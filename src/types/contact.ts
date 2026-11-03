export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
  /** honeypot — real people never see or fill it */
  hp: string;
};

export type ContactField = "name" | "email" | "phone" | "message";
export type ContactErrors = Partial<Record<ContactField, string>>;

export type ContactResponse = {
  success: boolean;
  message: string;
  errors?: ContactErrors;
};
