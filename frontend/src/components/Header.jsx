import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import logo from "@/assets/logo.png";

const NAV_LINKS = [
  { href: "about", label: "About Us" },
  { href: "#plans", label: "Plans" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // SEO metadata for the Jovia Network brand
  const pageTitle = "Jovia Network | Intelligent Advancement";
  const pageDescription = "Explore Jovia Network: networking, digital skills, entertainment, and engaging activities across multiple categories.";
  const siteUrl = import.meta.env.VITE_SITE_URL || window.location.origin;

  // Structured Data (JSON-LD) for Search Engine Crawlers
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Jovia Network",
    "url": siteUrl,
    "logo": `${siteUrl}/jovia-favicon.png`,
    "description": "Jovia Network is a multinational networking platform for digital skills, entertainment, and engaging activities.",
    "slogan": "Just One Vision: Intelligent Advancement"
  };

  return (
    <>
      {/* Dynamic SEO Tags */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="Jovia Network, digital skills, entertainment, online activities, intelligent advancement"
        />
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph Tags for Social Media Cards (Facebook, LinkedIn, Discord) */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />

        {/* Twitter Card Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* Background Ambient Glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-white pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0F9AC5]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00E57B]/10 rounded-full blur-[120px]" />
      </div>

      {/* Semantic Header Component */}
      <header className="fixed top-0 left-0 right-0 z-50" role="banner">
        <div className="relative w-full bg-white/75 backdrop-blur-2xl border-b border-[#0F9AC5]/10">
          {/* Decorative Glow Filters */}
          <div className="absolute left-0 top-0 h-full w-64 bg-[#0F9AC5]/5 blur-3xl pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-64 bg-[#00E57B]/5 blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex items-center justify-between h-20">
              {/* Brand Logo with Optimized SEO Alt Text */}
              <a
                href="/"
                className="flex items-center gap-3"
                aria-label="Jovia Network Homepage"
              >
                <img
                  src={logo}
                  alt="Jovia Network Logo"
                  width="100"
                  height="100"
                  className="h-[100px] w-[100px] object-contain"
                />
              </a>

              {/* Desktop Semantic Navigation */}
              <nav
                aria-label="Main Navigation"
                className="hidden lg:flex items-center gap-2 bg-white/80 backdrop-blur-xl border border-[#0F9AC5]/10 rounded-full p-2"
              >
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-5 py-2.5 rounded-full text-sm font-semibold text-[#0E2258] transition-all duration-300 hover:bg-[#0F9AC5]/10 hover:text-[#0F9AC5]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Action Buttons */}
              <div className="hidden lg:flex items-center gap-4">
                <Link
                  to="#"
                  className="text-[#0E2258] font-semibold hover:text-[#0F9AC5] transition-colors"
                >
                  Log In
                </Link>

                <Link
                  to="/register"
                  className="group relative overflow-hidden rounded-2xl px-7 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#0E2258] via-[#15347A] to-[#0F9AC5] transition-all duration-300"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0F9AC5] to-[#00E57B] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
              </div>

              {/* Mobile Accessible Navigation Toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden h-11 w-11 rounded-2xl bg-gradient-to-r from-[#0E2258] to-[#0F9AC5] text-white flex items-center justify-center"
                aria-label={
                  menuOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={menuOpen}
              >
                {menuOpen ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-4 mt-3 rounded-3xl bg-white/90 backdrop-blur-2xl border border-[#0F9AC5]/10 p-5">
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 px-4 rounded-2xl font-medium text-[#0E2258] transition-all hover:bg-[#0F9AC5]/10 hover:text-[#0F9AC5]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-5 pt-5 border-t border-[#0F9AC5]/10 flex flex-col gap-3">
              <Link
                to="#"
                onClick={() => setMenuOpen(false)}
                className="text-center py-3 rounded-2xl border border-[#0F9AC5]/15 text-[#0E2258] font-semibold hover:bg-[#0F9AC5]/5 transition"
              >
                Log In
              </Link>

              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="text-center py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-[#0E2258] via-[#15347A] to-[#0F9AC5] shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}