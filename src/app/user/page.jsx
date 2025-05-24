import User from '../../components/UserComponents/User';
import { RoleGuard } from '@/components/RoleGuard';

const UserPage = () => {
  return (
    <RoleGuard roles={['participant']}>
      <User></User>
    </RoleGuard>
  );
};

export default UserPage;
