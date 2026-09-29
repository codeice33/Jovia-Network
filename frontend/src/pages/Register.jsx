import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupForm from '@/components/SignupForm';
import { getAccount, saveAccount } from '@/lib/account';

export default function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    if (getAccount()) navigate('/dashboard', { replace: true });
  }, [navigate]);

  function handleSuccess(user) {
    saveAccount({ ...user, status: 'pending' });
    navigate('/dashboard', { replace: true });
  }

  return (
    <div className="bg-[#FBF8FF] min-h-screen">
      <main className="max-w-md mx-auto px-5 sm:px-0 py-10 sm:py-14">
        <section className="fade-in">
          <SignupForm onSuccess={handleSuccess} />
        </section>
      </main>
    </div>
  );
}
