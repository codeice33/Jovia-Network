import { Navigate } from 'react-router-dom';
import PaymentDetails from '@/components/PaymentDetails';
import { getAccount } from '@/lib/account';

export default function Payment() {
  const user = getAccount();

  if (!user) return <Navigate to="/register" replace />;

  return (
    <main className="min-h-screen bg-[#FBF8FF] px-5 py-10 sm:py-14">
      <div className="mx-auto max-w-md">
        <PaymentDetails user={user} />
      </div>
    </main>
  );
}