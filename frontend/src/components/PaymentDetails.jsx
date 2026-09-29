import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BANK_DETAILS, PLANS, TELEGRAM_HANDLE, TELEGRAM_PREFILLED_URL } from '@/lib/constants';

export default function PaymentDetails({ user }) {
  const [copied, setCopied] = useState(false);
  const plan = PLANS.find((p) => p.id === user.plan);

  async function handleCopy() {
    const text = `Bank: ${BANK_DETAILS.bankName}\nAccount number: ${BANK_DETAILS.accountNumber}\nAccount name: ${BANK_DETAILS.accountName}`;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
  }

  return (
    <div className="bg-white rounded-3xl border border-ink/5 shadow-sm p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-1">
        <span className="w-9 h-9 rounded-full bg-brand/10 text-brand flex items-center justify-center font-display font-bold">
          ✓
        </span>
        <h1 className="font-display font-bold text-2xl tracking-tight">Account created</h1>
      </div>
      <p className="text-sm text-ink/50 mt-1 mb-6">Complete payment to activate your Jovia account.</p>

      <div className="bg-paperSoft rounded-2xl p-5 mb-5">
        <div className="flex justify-between text-sm py-1.5">
          <span className="text-ink/50">Name</span>
          <span className="font-semibold">{user.name}</span>
        </div>
        <div className="flex justify-between text-sm py-1.5 border-t border-ink/8">
          <span className="text-ink/50">Plan selected</span>
          <span className="font-semibold">{plan?.name || user.plan}</span>
        </div>
        <div className="flex justify-between text-sm py-1.5 border-t border-ink/8">
          <span className="text-ink/50">Amount due</span>
          <span className="font-semibold font-mono">{plan?.price}</span>
        </div>
        <div className="flex justify-between text-sm py-1.5 border-t border-ink/8">
          <span className="text-ink/50">Smash Bonus</span>
          <span className="font-semibold font-mono">₦{(plan?.smashBonus || 0).toLocaleString('en-NG')}</span>
        </div>
      </div>

      <div className="border border-brand/25 bg-brand/5 rounded-2xl p-5">
        <span className="font-mono text-xs uppercase tracking-widest text-brand">Bank transfer details</span>
        <div className="mt-3 space-y-2.5 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-ink/50">Bank name</span>
            <span className="font-semibold font-mono">{BANK_DETAILS.bankName}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-ink/50">Account number</span>
            <span className="font-semibold font-mono tracking-wide">{BANK_DETAILS.accountNumber}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-ink/50">Account name</span>
            <span className="font-semibold font-mono text-right">{BANK_DETAILS.accountName}</span>
          </div>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="w-full mt-4 bg-ink text-paper font-display font-semibold rounded-full py-3 hover:bg-inkSoft transition text-sm"
        >
          Copy bank details
        </button>
        {copied && (
          <p className="text-xs text-brandDeep mt-2 text-center"> Copied to clipboard!</p>
        )}
      </div>

      <div className="mt-5 flex items-start gap-3 bg-inkSoft text-paper rounded-2xl p-5">
        <span className="text-lg"></span>
        <p className="text-sm leading-relaxed text-paper/80">
          Once you've made payment, send your payment proof (screenshot or receipt) to{' '}
          <a
            href={`https://t.me/${TELEGRAM_HANDLE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brandBright font-semibold hover:underline"
          >
            @{TELEGRAM_HANDLE}
          </a>{' '}
          on Telegram to activate your Jovia account. Activation time may vary.
        </p>
      </div>

      <a
        href={TELEGRAM_PREFILLED_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full mt-6 bg-[#0088cc] hover:bg-[#0077b3] text-white font-display font-semibold rounded-full py-3.5 transition text-sm flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
        Send Proof on Telegram
      </a>

      <Link
        to="/dashboard"
        className="block mt-4 text-center text-sm font-semibold text-brand hover:underline"
      >
        Return to dashboard
      </Link>
    </div>
  );
}
