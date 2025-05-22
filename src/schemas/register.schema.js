import { z } from 'zod';

import pt from '@/locales/pt.json';
import en from '@/locales/en.json';

export const createAccountSchema = (language) => {
  const messages =
    language === 'pt' ? pt.register.messages : en.register.messages;

  return z
    .object({
      firstName: z
        .string()
        .min(2, messages.firstName.minLength)
        .min(1, messages.firstName.required),

      lastName: z
        .string()
        .min(2, messages.lastName.minLength)
        .min(1, messages.lastName.required),

      email: z
        .string()
        .min(1, messages.email.required)
        .email(messages.email.invalid),

      password: z
        .string()
        .min(6, messages.password.minLength)
        .min(1, messages.password.required)
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
          messages.password.strong
        ),

      confirmPassword: z
        .string()
        .min(6, messages.confirmPassword.minLength)
        .min(1, messages.confirmPassword.required),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ['confirmPassword'],
      message: messages.confirmPassword.notMatch,
    });
};

export const createAdditionalInfoSchema = (language) => {
  const messages =
    language === 'pt' ? pt.register.messages : en.register.messages;

  return z.object({
    institution: z
      .string()
      .min(2, messages.institution.minLength)
      .min(1, messages.institution.required),

    country: z
      .string()
      .min(2, messages.country.minLength)
      .min(1, messages.country.required),

    state: z
      .string()
      .min(2, messages.state.minLength)
      .min(1, messages.state.required),

    city: z
      .string()
      .min(2, messages.city.minLength)
      .min(1, messages.city.required),

    gender: z.enum(
      [
        'female',
        'male',
        'transgender',
        'agender',
        'non-binary',
        'not declared',
      ],
      {
        required_error: messages.gender.required,
        invalid_type_error: messages.gender.required,
      }
    ),

    modality: z.enum(['', 'in-person', 'remote'], {
      required_error: messages.modality.required,
      invalid_type_error: messages.modality.required,
    }),
  });
};
