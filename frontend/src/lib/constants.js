// ---------------------------------------------------------------
// Plans
// ---------------------------------------------------------------
export const PLANS = [
  {
    id: "Trial",
    name: "Jovia Silver",
    subscriptionFee: "Subscription Fee",
    price: "₦9,000",
    smashBonus: 9000,
    salesEarning: 7000,
    features: [
      {
        title: "Networking Activities",
        value: "Explore categories",
      },
      {
        title: "Digital Skills",
        value: "Available activities",
      },
      {
        title: "Entertainment",
        value: "See current listings",
      },
      {
        title: "Activity Terms",
        value: "Review before joining",
      },
    ],
    featured: false,
  },

  {
    id: "Premium",
    name: "Jovia Gold",
    subscriptionFee: "Subscription Fee",
    price: "₦15,000",
    smashBonus: 15000,
    salesEarning: 13000,
    features: [
      {
        title: "Networking Activities",
        value: "Explore categories",
      },
      {
        title: "Digital Skills",
        value: "Available activities",
      },
      {
        title: "Entertainment",
        value: "See current listings",
      },
      {
        title: "Activity Terms",
        value: "Review before joining",
      },
    ],
    featured: true,
  },
];
// ---------------------------------------------------------------
// Payment details
// ---------------------------------------------------------------
// IMPORTANT: Replace these with your real, verified account details
// before deploying. Every signed-up user is shown this SAME account —
// it is not generated per-user. Do not randomize or fabricate bank
// details; only display an account you actually control.
export const BANK_DETAILS = {
  bankName: 'KREDI MONEY MFB',
  accountNumber: '1859610121',
  accountName: 'ALIU KOMOLAFE ADENIYI',
};

// ---------------------------------------------------------------
// Support / Telegram
// ---------------------------------------------------------------
export const TELEGRAM_HANDLE = 'Joviaofficial';
export const TELEGRAM_URL = `https://t.me/${TELEGRAM_HANDLE}`;
export const TELEGRAM_PREFILLED_URL =
  `${TELEGRAM_URL}?text=${encodeURIComponent(
    "Hello Jovia, I have made payment and would like to send my proof of payment. Please activate my account. Thank you!"
  )}`;
