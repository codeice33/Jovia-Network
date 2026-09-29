import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ArrowLeft, LogOut, ShieldCheck } from 'lucide-react';
import { PLANS } from '@/lib/constants';
import { clearAccount, getAccount } from '@/lib/account';

export default function Account() {
  const navigate = useNavigate();
  const user = getAccount();

  if (!user) return <Navigate to="/register" replace />;

  const plan = PLANS.find((item) => item.id === user.plan);

  function handleSignOut() {
    clearAccount();
    navigate('/register', { replace: true });
  }

  return (
    <main className="min-h-screen bg-[#F6F3F9] px-5 py-7 text-[#21152D] sm:px-8 sm:py-10">
      <div className="mx-auto max-w-3xl">
        <header className="flex items-center justify-between gap-4 border-b border-[#E5DDEB] pb-5">
          <Link to="/dashboard" className="inline-flex items-center gap-2 text-sm font-semibold text-[#542B6C] hover:text-[#2B0A43]"><ArrowLeft size={17} /> Dashboard</Link>
          <button type="button" onClick={handleSignOut} aria-label="Sign out" title="Sign out" className="grid h-10 w-10 place-items-center rounded-lg border border-[#E5DDEB] bg-white text-[#4D3B5C] transition hover:bg-[#F7F1FA]"><LogOut size={17} /></button>
        </header>

        <section className="mt-8" aria-labelledby="account-title">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#F4ECF8] text-[#542B6C]"><ShieldCheck size={21} /></span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#725F7F]">Member profile</p>
              <h1 id="account-title" className="mt-1 font-display text-2xl font-bold">Account details</h1>
            </div>
          </div>

          <dl className="mt-6 grid gap-x-8 border-y border-[#E5DDEB] bg-white px-5 py-2 sm:grid-cols-2 sm:px-6">
            <div className="border-b border-[#EEE8F1] py-4 sm:col-span-2"><dt className="text-xs text-[#8B8092]">Full name</dt><dd className="mt-1 font-semibold">{user.name}</dd></div>
            <div className="border-b border-[#EEE8F1] py-4"><dt className="text-xs text-[#8B8092]">Email</dt><dd className="mt-1 break-all font-semibold">{user.email}</dd></div>
            <div className="border-b border-[#EEE8F1] py-4"><dt className="text-xs text-[#8B8092]">Phone number</dt><dd className="mt-1 font-semibold">{user.phone || 'Not provided'}</dd></div>
            <div className="border-b border-[#EEE8F1] py-4"><dt className="text-xs text-[#8B8092]">Membership</dt><dd className="mt-1 font-semibold">{plan?.name || user.plan}</dd></div>
            <div className="border-b border-[#EEE8F1] py-4"><dt className="text-xs text-[#8B8092]">Subscription</dt><dd className="mt-1 font-semibold">{plan?.price || 'Not selected'}</dd></div>
            <div className="border-b border-[#EEE8F1] py-4"><dt className="text-xs text-[#8B8092]">Account status</dt><dd className="mt-1 font-semibold">{user.status === 'active' ? 'Active' : 'Pending review'}</dd></div>
            <div className="border-b border-[#EEE8F1] py-4"><dt className="text-xs text-[#8B8092]">Referral code</dt><dd className="mt-1 font-semibold">{user.referralCode}</dd></div>
          </dl>
          <p className="mt-4 text-xs leading-relaxed text-[#756A7D]">This profile is stored in this browser only. Account status and activity are not verified or synchronized with a server.</p>
        </section>
      </div>
    </main>
  );
}