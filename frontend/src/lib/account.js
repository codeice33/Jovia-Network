const ACCOUNT_KEY = "jovia.account";

function createReferralCode() {
  const randomPart = globalThis.crypto?.randomUUID?.().replaceAll("-", "").slice(0, 10)
    || Math.random().toString(36).slice(2, 12);
  return `JV${randomPart.toUpperCase()}`;
}

export function getAccount() {
  try {
    const account = JSON.parse(localStorage.getItem(ACCOUNT_KEY) || "null");
    if (!account || typeof account.email !== "string") return null;

    if (typeof account.referralCode !== "string" || !account.referralCode) {
      account.referralCode = createReferralCode();
      localStorage.setItem(ACCOUNT_KEY, JSON.stringify(account));
    }

    return account;
  } catch {
    return null;
  }
}

export function saveAccount(account) {
  localStorage.setItem(ACCOUNT_KEY, JSON.stringify({
    ...account,
    referralCode: account.referralCode || createReferralCode(),
  }));
}

export function clearAccount() {
  localStorage.removeItem(ACCOUNT_KEY);
}