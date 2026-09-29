import activitiesImage from "@/assets/img/45379499-19fa-43d7-8def-5d74bce2d679.jpeg.jpg";

const FAQS = [
  {
    q: "What is Jovia Network?",
    a: "Jovia Network is a multinational networking platform that brings together digital skills, entertainment, and engaging activities under the vision of Just One Vision: Intelligent Advancement.",
  },
  {
    q: "What activities are available?",
    a: "Activities span networking, digital skills, entertainment, and online participation. Options and availability can vary, so check the current activity list and details on the platform.",
  },
  {
    q: "Are rewards guaranteed?",
    a: "Yes. Flyers show examples for specific activities. Any reward depends on current activity terms and eligibility, so review the details before participating.",
  },
];

export default function FAQ() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* ABOUT JOVIA NETWORK */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F9AC5]/10 text-[#0E2258] text-sm font-semibold">
              Networking and Activities
            </span>

            <h3 className="mt-5 text-4xl md:text-6xl font-black leading-tight text-[#0E2258]">
              Connect and
              <span className="block bg-gradient-to-r from-[#0E2258] via-[#0F9AC5] to-[#00E57B] bg-clip-text text-transparent">
                Explore Jovia Network
              </span>
            </h3>

            <p className="mt-6 text-black/60 leading-relaxed text-lg">
              Jovia brings digital experiences together for people with
              different interests, from learning and creative work to online
              activities and entertainment.
            </p>

            <p className="mt-4 text-black/60 leading-relaxed">
              The platform spans networking, digital skills, entertainment,
              and activities across different categories. Explore the available
              options, read each activity's instructions, and decide what
              matches your interests and availability.
            </p>

            <div className="mt-6 inline-flex items-center px-4 py-2 rounded-xl bg-[#00E57B]/10 border border-[#00E57B]/20">
              <span className="font-semibold text-[#0E2258]">
                Explore activities, build skills, and connect.
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#0F9AC5]/10 rounded-full blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-black/10">
              <img
                src={activitiesImage}
                alt="Jovia Network"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div id="faq" className="max-w-5xl mx-auto mt-24">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F9AC5]/10 text-[#0E2258] text-sm font-semibold">
              Jovia Network FAQ
            </span>

            <h3 className="mt-5 text-4xl md:text-6xl font-black leading-tight text-[#0E2258]">
              Frequently Asked
              <span className="block bg-gradient-to-r from-[#0E2258] via-[#0F9AC5] to-[#00E57B] bg-clip-text text-transparent">
                Questions
              </span>
            </h3>

            <p className="mt-3 text-sm md:text-base text-slate-600">
              Learn about Jovia Network, its activities, and participation
              details.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {FAQS.map((item) => (
              <details key={item.q} className="">
                <summary className="cursor-pointer list-none p-5 flex items-center justify-between font-semibold text-[#0E2258]">
                  {item.q}
                  <span className="text-[#0F9AC5] text-xl">+</span>
                </summary>

                <div className="px-5 pb-5">
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
