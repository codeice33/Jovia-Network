import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Logo */}
        <img
          src={logo}
          alt="Jovia Network Logo"
          width="100"
          height="100"
          className="h-[100px] w-[100px] mx-auto object-contain"
        />

        {/* Hero 404 Display */}
        <div>
          <h1 className="text-8xl font-black text-[#0E2258]">404</h1>
          <h2 className="text-2xl font-bold text-[#0E2258] mt-2">
            Page Not Found
          </h2>
          <p className="text-slate-500 mt-2">
            Sorry, we couldn’t find the page you’re looking for. It might have
            been moved or doesn’t exist.
          </p>
        </div>

        {/* Back Home Button */}
        <div>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-[#0E2258] via-[#15347A] to-[#0F9AC5] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
