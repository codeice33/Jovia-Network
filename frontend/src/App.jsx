import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Register from '@/pages/Register';
import Dashboard from '@/pages/Dashboard';
import Account from '@/pages/Account';
import Payment from '@/pages/Payment';
import NotFound from "@/pages/NotFound";
import About from "@/pages/About";
import Privacy from "@/pages/Privacy"; // Changed from @/pages/
import Terms from "@/pages/Terms"; // Changed from @/pages/
import TelegramSupport from "@/components/TelegramSupport"; // Changed from @/pages/

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/account" element={<Account />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <TelegramSupport />
      </div>
    </BrowserRouter>
  );
}