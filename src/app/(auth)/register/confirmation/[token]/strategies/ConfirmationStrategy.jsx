import { EnrollmentNotFound } from '@/app/(auth)/register/confirmation/[token]/strategies/EnrollmentNotFound';
import { ExpiredToken } from '@/app/(auth)/register/confirmation/[token]/strategies/ExpiredToken';
import { InvalidToken } from '@/app/(auth)/register/confirmation/[token]/strategies/InvalidToken';
import { Success } from '@/app/(auth)/register/confirmation/[token]/strategies/Success';
import { UnknownError } from '@/app/(auth)/register/confirmation/[token]/strategies/UnknownError';

const strategies = {
  success: Success,
  invalidToken: InvalidToken,
  expiredToken: ExpiredToken,
  enrollmentNotFound: EnrollmentNotFound,
  unknownError: UnknownError,
  loading: null,
};

export function ConfirmationStrategy({ strategy, ...props }) {
  const StrategyComponent = strategies[strategy];

  if (!StrategyComponent) return null;

  return <StrategyComponent {...props} />;
}
