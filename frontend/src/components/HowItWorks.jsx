import { Link } from "react-router-dom";

const STEPS = [
  {
    number: "01",
    title: "Explore the Network",
    body: "Discover Jovia's networking, digital skills, entertainment, and activities across different categories.",
  },
  {
    number: "02",
    title: "Choose an Activity",
    body: "Read the activity details, timing, and requirements, then choose an option that suits your interests.",
  },
  {
    number: "03",
    title: "Take Part",
    body: "Follow the instructions for the activity you select. Any benefits or rewards depend on its current terms and eligibility.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative overflow-hidden bg-[#F3FAFD] py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#0F9AC5]/10 rounded-full blur-[150px]" />

        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#00E57B]/10 rounded-full blur-[150px]" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              bg-white/80
              backdrop-blur-xl
              border
              border-[#0F9AC5]/15
              text-[#0E2258]
              text-sm
              font-semibold
            "
          >
            <div className="w-2 h-2 rounded-full bg-[#00E57B] animate-pulse" />
            How to Take Part
          </div>

          <h2
            className="
              mt-6
              text-4xl
              md:text-6xl
              font-black
              leading-tight
              text-[#0E2258]
            "
          >
            One Network
            <span
              className="
                block
                bg-gradient-to-r
                from-[#0E2258]
                via-[#0F9AC5]
                to-[#00E57B]
                bg-clip-text
                text-transparent
              "
            >
              Many Ways to Connect
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-[#0E2258]/70
              leading-relaxed
              max-w-2xl
              mx-auto
            "
          >
            Browse the available categories, review how each activity works,
            and choose how to participate based on your interests, time, and
            the current requirements.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-20">
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0F9AC5]/20 via-[#0F9AC5] to-[#00E57B]/20" />

          <div className="grid lg:grid-cols-3 gap-8">
            {STEPS.map((step, index) => (
              <div
                key={index}
                className="
                  relative
                  rounded-[32px]
                  bg-white/80
                  border
                  border-white
                  p-8
                  transition-all
                  duration-300
                "
              >
                {/* Number */}
                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#0E2258]
                    to-[#0F9AC5]
                    flex
                    items-center
                    justify-center
                    text-white
                    font-black
                    text-xl
                  "
                >
                  {step.number}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#0E2258]">
                  {step.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-[#0E2258]/70
                    leading-relaxed
                  "
                >
                  {step.body}
                </p>

                <div
                  className="
                    mt-6
                    h-1
                    w-20
                    rounded-full
                    bg-gradient-to-r
                    from-[#0F9AC5]
                    to-[#00E57B]
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
