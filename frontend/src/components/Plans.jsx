import { PLANS } from "@/lib/constants";

export default function Plans() {
  return (
    <section
      id="plans"
      className="relative bg-white py-10 md:py-14 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#0F9AC5]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#00E57B]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#0F9AC5]/10 text-[#0E2258] text-sm font-semibold">
            Jovia Plans
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-black leading-tight text-[#0E2258]">
            Activities and
            <span className="block bg-gradient-to-r from-[#0E2258] via-[#0F9AC5] to-[#00E57B] bg-clip-text text-transparent">
              Participation
            </span>
          </h2>

          <p className="mt-3 text-sm md:text-base text-slate-600">
            Review the available plans, prices, and terms. Activity access,
            eligibility, and any advertised rewards depend on current details.
          </p>
        </div>

        {/* Plans */}
        <div className="mt-10 grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl border overflow-hidden transition-all duration-300 ${
                plan.id === "Premium"
                  ? "border-[#D4AF37] bg-gradient-to-br from-[#FFF8DC] via-[#FDF5D5] to-[#F7E7A1]"
                  : "border-slate-200 bg-white"
              }`}
            >
              {/* Premium Badge */}
              {plan.id === "Premium" && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-[#0E2258] text-[10px] font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="p-6">
                {/* Plan Name */}
                <h3 className="text-xl font-bold text-[#0E2258]">
                  {plan.name}
                </h3>

                {/* Subscription Fee */}
                <div className="mt-4">
                  <p className="text-[11px] uppercase tracking-wider text-slate-500">
                    {plan.subscriptionFee}
                  </p>

                  <div className="mt-1">
                    <span className="text-3xl font-black text-[#0E2258]">
                      {plan.price}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-6 space-y-3">
                  {plan.features.map((feature, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-slate-200 bg-white/70 p-3"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <h4 className="font-semibold text-sm text-[#0E2258]">
                            {feature.title}
                          </h4>

                          {feature.status && (
                            <span
                              className={`inline-flex mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                                feature.status === "PRIORITY"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-orange-100 text-orange-700"
                              }`}
                            >
                              {feature.status}
                            </span>
                          )}
                        </div>

                        <span
                          className={`font-bold text-base ${
                            plan.id === "Premium"
                              ? "text-[#B8860B]"
                              : "text-[#0F9AC5]"
                          }`}
                        >
                          {feature.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <a
                  href={`/register?plan=${encodeURIComponent(plan.id)}`}
                  className={`mt-6 w-full inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    plan.id === "Premium"
                      ? "text-white bg-gradient-to-r from-[#0E2258] via-[#15347A] to-[#0F9AC5] hover:opacity-95 shadow-lg shadow-[#0E2258]/20"
                      : "bg-white/70 backdrop-blur-xl border border-[#0F9AC5]/15 text-[#0E2258] hover:bg-white shadow-sm"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
