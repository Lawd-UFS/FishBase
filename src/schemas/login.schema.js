import { z } from 'zod';

import pt from '@/locales/pt.json';
import en from '@/locales/en.json';

export const createLoginSchema = (language) => {
  const messages =
    language === 'pt' ? pt.register.messages : en.register.messages;

  return z.object({
    email: z
      .string()
      .min(1, messages.email.required)
      .email(messages.email.invalid),
    password: z.string(),
  });
};
