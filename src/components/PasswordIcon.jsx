import { Eye, EyeOff } from 'lucide-react';

export default function PasswordIcon({ isVisible, setIsVisible, color }) {
  const Icon = isVisible ? Eye : EyeOff;

  return (
    <Icon
      size={24}
      color={color}
      onClick={() => setIsVisible(!isVisible)}
      style={{ cursor: 'pointer' }}
    />
  );
}
