import { useRef, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowDownToLine,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Copy,
  Gamepad2,
  LayoutDashboard,
  Link2,
  LockKeyhole,
  LogOut,
  Play,
  ShieldCheck,
  Wallet,
} from 'lucide-react';
import { PLANS } from '@/lib/constants';
import { clearAccount, getAccount } from '@/lib/account';

function formatNaira(amount) {
  return `₦${amount.toLocaleString('en-NG')}`;
}

export default function Dashboard() {
  const navigate = useNavigate();
  const user = getAccount();
  const balancesRef = useRef(null);
  const [balanceSlide, setBalanceSlide] = useState(0);
  const [copyStatus, setCopyStatus] = useState('');

  if (!user) return <Navigate to="/register" replace />;

  const plan = PLANS.find((item) => item.id === user.plan);
  const isActive = user.status === 'active';
  const availableBalance = 0;
  const referralUrl = `${window.location.origin}/register?ref=${encodeURIComponent(user.referralCode)}`;

  function showBalanceSlide(slide) {
    const carousel = balancesRef.current;
    if (!carousel) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    carousel.scrollTo({
      left: slide * carousel.clientWidth,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  }

  function updateBalanceSlide() {
    const carousel = balancesRef.current;
    if (carousel) {
      setBalanceSlide(Math.min(1, Math.round(carousel.scrollLeft / carousel.clientWidth)));
    }
  }

  async function copyReferralUrl() {
    try {
      await navigator.clipboard.writeText(referralUrl);
      setCopyStatus('Referral link copied.');
    } catch {
      setCopyStatus('Copy is unavailable. Select the link to copy it manually.');
    }
  }

  function handleSignOut() {
    clearAccount();
    navigate('/register', { replace: true });
  }

  return (
    <div className="min-h-screen bg-[#F6F3F9] text-[#21152D] lg:grid lg:grid-cols-[236px_minmax(0,1fr)]">
      <aside className="flex flex-col bg-[#26083D] px-5 py-5 text-white lg:min-h-screen lg:px-6 lg:py-8">
        <Link to="/dashboard" className="flex items-center gap-3" aria-label="Jovia dashboard">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#FEBD01] text-lg font-black text-[#26083D]">J</span>
          <span className="font-display text-lg font-bold">Jovia<span className="ml-1 text-[#FEBD01]">Network</span></span>
        </Link>
        <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/45 lg:mt-12">
          <LayoutDashboard size={15} /> Workspace
        </div>
        <nav className="mt-3 flex gap-2 overflow-x-auto lg:flex-col" aria-label="Dashboard navigation">
          <a href="#overview" className="flex shrink-0 items-center gap-3 rounded-lg bg-white/10 px-3 py-2.5 text-sm font-semibold text-white"><Wallet size={17} /> Overview</a>
          <a href="#earn" className="flex shrink-0 items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/65 transition hover:bg-white/10 hover:text-white"><Gamepad2 size={17} /> Earn</a>
          <Link to="/account" className="flex shrink-0 items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/65 transition hover:bg-white/10 hover:text-white"><ShieldCheck size={17} /> Account</Link>
        </nav>
        <div className="mt-auto hidden border-t border-white/10 pt-5 lg:block">
          <button onClick={handleSignOut} className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/65 transition hover:bg-white/10 hover:text-white"><LogOut size={17} /> Sign out</button>
        </div>
      </aside>

      <main className="mx-auto w-full max-w-[1180px] px-5 pb-12 pt-7 sm:px-8 lg:px-10 lg:pt-10">
        <header id="overview" className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#725F7F]">Member dashboard</p>
            <h1 className="mt-2 font-display text-2xl font-bold sm:text-3xl">Welcome, {user.name.split(' ')[0]}</h1>
            <p className="mt-1 text-sm text-[#756A7D]">Your Jovia account at a glance.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-bold ${isActive ? 'bg-emerald-100 text-emerald-800' : 'bg-[#FEBD01]/20 text-[#644900]'}`}>
              <span className={`h-2 w-2 rounded-full ${isActive ? 'bg-emerald-600' : 'bg-[#D89E00]'}`} />
              {isActive ? 'Active' : 'Awaiting activation'}
            </span>
            <button onClick={handleSignOut} title="Sign out" aria-label="Sign out" className="grid h-10 w-10 place-items-center rounded-lg border border-[#E5DDEB] bg-white text-[#4D3B5C] hover:bg-[#F7F1FA] lg:hidden"><LogOut size={17} /></button>
          </div>
        </header>

        {!isActive && (
          <section className="mt-7 flex flex-col gap-5 rounded-xl bg-[#2B0A43] p-5 text-white sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#FEBD01] text-[#26083D]"><Clock3 size={21} /></span>
              <div>
                <h2 className="font-display font-bold">Activate your account</h2>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-white/70">Your earning activities and Smash Bonus are pending. Complete your subscription payment and send proof for account review.</p>
              </div>
            </div>
            <button onClick={() => navigate('/payment')} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#FEBD01] px-5 py-3 text-sm font-bold text-[#26083D] transition hover:bg-[#FFD84A]">View payment details <ArrowUpRight size={17} /></button>
          </section>
        )}

        <section className="mt-6 grid items-stretch gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)]">
          <div>
            <div
              ref={balancesRef}
              role="region"
              aria-roledescription="carousel"
              aria-label="Member balances"
              tabIndex={0}
              onScroll={updateBalanceSlide}
              className="flex h-[232px] snap-x snap-mandatory overflow-x-auto scroll-smooth rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#542B6C] motion-reduce:scroll-auto"
              style={{ scrollbarWidth: 'none' }}
            >
              <article role="group" aria-roledescription="slide" aria-label="1 of 2: Available balance" className="h-full w-full shrink-0 snap-start rounded-xl bg-white p-5 shadow-[0_4px_20px_rgba(38,8,61,0.04)] sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#756A7D]">Available balance</span>
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#F5F0F8] text-[#542B6C]"><Wallet size={18} /></span>
                </div>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <p className="font-display text-3xl font-bold">{formatNaira(availableBalance)}</p>
                  <button
                    type="button"
                    disabled={!isActive || availableBalance <= 0}
                    title={!isActive ? 'Activate your account before withdrawing.' : 'Withdrawals are unavailable until you have funds.'}
                    aria-label="Withdraw funds"
                    className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#2B0A43] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#421760] disabled:cursor-not-allowed disabled:opacity-45"
                  >
                    <ArrowDownToLine size={16} /> Withdraw
                  </button>
                </div>
                <p className="mt-2 text-xs text-[#8B8092]">Withdrawals require an active account and a positive available balance.</p>
                <div className="mt-5 h-px bg-[#EEE8F1]" />
                <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                  <div><span className="block text-xs text-[#8B8092]">Membership</span><span className="mt-1 block font-semibold">{plan?.name || user.plan}</span></div>
                  <div><span className="block text-xs text-[#8B8092]">Account status</span><span className="mt-1 block font-semibold">{isActive ? 'Active' : 'Pending review'}</span></div>
                </div>
              </article>

              <article role="group" aria-roledescription="slide" aria-label="2 of 2: Sales earnings" className="h-full w-full shrink-0 snap-start rounded-xl bg-[#35104F] p-5 text-white shadow-[0_4px_20px_rgba(38,8,61,0.08)] sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white/75">Sales earnings</span>
                  {isActive ? <BadgeCheck size={19} className="text-[#FEBD01]" /> : <LockKeyhole size={19} className="text-[#FEBD01]" />}
                </div>
                <p className="mt-5 font-display text-3xl font-bold text-[#FEBD01]">{formatNaira(plan?.salesEarning || 0)}</p>
                <p className="mt-2 text-xs leading-relaxed text-white/75">Package earning amount for {plan?.name || user.plan}; this is not a confirmed or earned balance.</p>
                <div className="mt-5 h-px bg-white/15" />
                <p className="mt-4 flex items-center gap-2 text-sm font-semibold">
                  {!isActive && <LockKeyhole size={15} />}
                  {isActive ? 'Package amount; sales are not tracked here' : 'Locked until account activation'}
                </p>
              </article>
            </div>
            <div className="mt-3 flex items-center justify-between" aria-label="Balance carousel controls">
              <span className="text-xs font-medium text-[#8B8092]">{balanceSlide + 1} of 2</span>
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => showBalanceSlide(0)} disabled={balanceSlide === 0} aria-label="Previous balance" className="grid h-9 w-9 place-items-center rounded-lg border border-[#E5DDEB] bg-white text-[#4D3B5C] transition hover:bg-[#F7F1FA] disabled:cursor-not-allowed disabled:opacity-40"><ChevronLeft size={18} /></button>
                <button type="button" onClick={() => showBalanceSlide(1)} disabled={balanceSlide === 1} aria-label="Next balance" className="grid h-9 w-9 place-items-center rounded-lg border border-[#E5DDEB] bg-white text-[#4D3B5C] transition hover:bg-[#F7F1FA] disabled:cursor-not-allowed disabled:opacity-40"><ChevronRight size={18} /></button>
                <div className="ml-1 flex items-center gap-1.5" aria-label="Choose balance slide">
                  {[0, 1].map((slide) => (
                    <button key={slide} type="button" onClick={() => showBalanceSlide(slide)} aria-label={`Show ${slide === 0 ? 'available balance' : 'sales earnings'}`} aria-pressed={balanceSlide === slide} className={`h-2.5 w-2.5 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#542B6C] ${balanceSlide === slide ? 'bg-[#542B6C]' : 'bg-[#D7CCD9]'}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <article className="relative overflow-hidden rounded-xl bg-[#FEBD01] p-5 text-[#26083D] shadow-[0_4px_20px_rgba(38,8,61,0.04)] sm:p-6">
            <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full border-[22px] border-white/20" />
            <div className="relative flex items-center justify-between"><span className="text-sm font-bold">Smash Bonus</span><BadgeCheck size={20} /></div>
            <p className="relative mt-5 font-display text-3xl font-extrabold">{formatNaira(plan?.smashBonus || 0)}</p>
            <p className="relative mt-2 text-xs font-semibold text-[#624900]">{isActive ? 'Included with your membership' : 'Pending account activation'}</p>
            <span className="relative mt-5 inline-block rounded-full bg-[#26083D]/10 px-3 py-1 text-xs font-bold">{plan?.name || user.plan}</span>
          </article>
        </section>

        <section id="earn" className="mt-9">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <div><p className="text-xs font-bold uppercase tracking-[0.15em] text-[#8B8092]">Earning activities</p><h2 className="mt-1 font-display text-xl font-bold">Choose how to earn</h2></div>
            <span className="text-xs font-semibold text-[#8B8092]">{isActive ? 'Account active' : 'Available after activation'}</span>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <article className="rounded-xl border border-[#EAE3EE] bg-white p-5 sm:p-6">
              <div className="flex items-start justify-between"><span className="grid h-11 w-11 place-items-center rounded-lg bg-[#F4ECF8] text-[#542B6C]"><Gamepad2 size={22} /></span>{!isActive && <LockKeyhole size={18} className="text-[#93869B]" />}</div>
              <h3 className="mt-5 font-display text-lg font-bold">Play games</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#756A7D]">Take part in games and activities to earn once your account is activated.</p>
              <button disabled={!isActive} className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#F2EDF5] px-4 py-2.5 text-sm font-bold text-[#4C3A58] disabled:cursor-not-allowed disabled:opacity-70 enabled:bg-[#2B0A43] enabled:text-white">{isActive ? 'Browse games' : 'Locked until activation'} {isActive && <ArrowUpRight size={16} />}</button>
            </article>
            <article className="rounded-xl border border-[#EAE3EE] bg-white p-5 sm:p-6">
              <div className="flex items-start justify-between"><span className="grid h-11 w-11 place-items-center rounded-lg bg-[#FFF6D7] text-[#725500]"><Play size={21} /></span>{!isActive && <LockKeyhole size={18} className="text-[#93869B]" />}</div>
              <h3 className="mt-5 font-display text-lg font-bold">Watch videos</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#756A7D]">Watch eligible videos and view your verified activity rewards after activation.</p>
              <button disabled={!isActive} className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#F2EDF5] px-4 py-2.5 text-sm font-bold text-[#4C3A58] disabled:cursor-not-allowed disabled:opacity-70 enabled:bg-[#2B0A43] enabled:text-white">{isActive ? 'Browse videos' : 'Locked until activation'} {isActive && <ArrowUpRight size={16} />}</button>
            </article>
          </div>
        </section>

        <section className="mt-9 border-y border-[#E5DDEB] py-5 sm:py-6" aria-labelledby="referral-heading">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#F4ECF8] text-[#542B6C]"><Link2 size={20} /></span>
              <div>
                <h2 id="referral-heading" className="font-display font-bold">Your referral link</h2>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-[#756A7D]">Share this link to open registration with your code. Referral activity is not tracked by this local profile.</p>
              </div>
            </div>
            <span className="rounded-md bg-[#F4ECF8] px-2.5 py-1.5 text-xs font-bold text-[#542B6C]">{user.referralCode}</span>
          </div>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <input aria-label="Your referral registration link" readOnly value={referralUrl} className="min-w-0 flex-1 rounded-lg border border-[#E5DDEB] bg-white px-3 py-2.5 text-sm text-[#4D3B5C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#542B6C]" />
            <button type="button" onClick={copyReferralUrl} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#2B0A43] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#421760] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#542B6C]"><Copy size={16} /> Copy link</button>
          </div>
          <p className="mt-2 min-h-5 text-xs text-[#756A7D]" role="status" aria-live="polite">{copyStatus}</p>
        </section>
      </main>
    </div>
  );
}