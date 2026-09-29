export default function Cta() {
  return (
    <section className="max-w-6xl mx-auto px-5 py-10 md:py-14">
      <div
        className="
          relative
          overflow-hidden
          rounded-[28px]
          bg-gradient-to-br
          from-[#0E2258]
          via-[#15347A]
          to-[#0F9AC5]
          px-6
          py-10
          md:px-10
          md:py-14
          text-center
        "
      >
        {/* Glow Effects */}
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#00E57B]/20 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <span
            className="
              inline-flex
              items-center
              px-3
              py-1.5
              rounded-full
              bg-white/10
              border
              border-white/20
              text-white
              text-xs
              font-semibold
            "
          >
            Start Your Jovia Journey
          </span>

          <h2
            className="
              mt-4
              text-3xl
              md:text-4xl
              font-black
              leading-tight
              text-white
            "
          >
            Discover Jovia Network,
            <span className="block text-[#00E57B]">Tools, Skills & Activities</span>
          </h2>

          <p className="mt-4 text-white/80 text-sm md:text-base max-w-xl mx-auto">
            Explore a connected mix of networking, digital skills,
            entertainment, and engaging activities.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/register"
              className="
                inline-flex
                items-center
                justify-center
                px-6
                py-3
                rounded-xl
                font-semibold
                text-[#0E2258]
                bg-[#00E57B]
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Get Started
            </a>

            <a
              href="#plans"
              className="
                inline-flex
                items-center
                justify-center
                px-6
                py-3
                rounded-xl
                font-semibold
                text-white
                border
                border-white/20
                bg-white/10
                hover:bg-white/20
                transition-all
                duration-300
              "
            >
              View Plans
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
