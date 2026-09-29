import { useState } from "react";
import { Link } from "react-router-dom";
import heroVisual from "@/assets/img/1533dfab-5451-4636-94d6-96c9082c1610.jpeg.jpg";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-white"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-white" />

        <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-[#0F9AC5]/10 rounded-full blur-[150px]" />

        <div className="absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-[#00E57B]/10 rounded-full blur-[150px]" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0E2258]/5 rounded-full blur-[150px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,34,88,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,34,88,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_center,transparent_0%,white_70%)]" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-screen px-6 lg:px-10 pt-32 pb-24 flex items-center">
        <div className="grid lg:grid-cols-2 gap-20 items-center w-full">
          {/* ================= LEFT ================= */}
          <div>
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#0F9AC5]/20
                bg-white/70
                px-5
                py-2
                text-sm
                font-medium
                text-[#0E2258]
              "
            >
              <div className="w-2 h-2 rounded-full bg-[#00E57B] animate-pulse" />
              A Network Built Around One Vision
            </div>

            <h1
              className="
                mt-8
                text-5xl
                sm:text-7xl
                lg:text-[6rem]
                font-black
                leading-[0.9]
                tracking-tight
                text-[#0E2258]
              "
            >
              Just One Vision
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
                Intelligent Advancement
              </span>
              <span className="block text-[#0E2258]/35">
                Through Connection
              </span>
            </h1>

            <p
              className="
                mt-8
                text-lg
                lg:text-xl
                leading-relaxed
                text-[#0E2258]/75
                max-w-xl
              "
            >
              Jovia Network brings people together through networking, digital
              skills, entertainment, and engaging activities across different
              categories. Explore what is available and choose how you want to
              take part.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/register"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-8
                  py-4
                  rounded-2xl
                  font-semibold
                  text-white
                  bg-gradient-to-r
                  from-[#0E2258]
                  via-[#15347A]
                  to-[#0F9AC5]
                  transition-all
                  duration-300
                  
                "
              >
                Explore Jovia
              </Link>

              <a
                href="#about"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-8
                  py-4
                  rounded-2xl
                  bg-white/70
                  backdrop-blur-xl
                  border
                  border-[#0F9AC5]/15
                  text-[#0E2258]
                  font-semibold
                  hover:bg-white
                  transition-all
                "
              >
                Learn More
              </a>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative flex items-center justify-center min-h-[500px]">
            {/* Soft Background Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="
                  w-[500px]
                  h-[500px]
                  lg:w-[650px]
                  lg:h-[650px]
                  rounded-full
                  bg-gradient-to-r
                  from-[#0F9AC5]/10
                  via-[#00E57B]/10
                  to-[#0E2258]/10
                  blur-[120px]
                "
              />
            </div>

            {/* Image Container */}
            <div className="relative z-10 flex items-center justify-center">
              {!imageLoaded && (
                <div
                  className="
                    absolute
                    animate-pulse
                    rounded-2xl
                    
                  "
                  style={{
                    width: "100%",
                    maxWidth: "800px",
                    height: "500px",
                  }}
                />
              )}

              <img
                src={heroVisual}
                alt="Jovia Network"
                fetchPriority="high"
                decoding="async"
                draggable="false"
                onLoad={() => setImageLoaded(true)}
                className={`
                  w-full
                  max-w-[800px]
                  rounded-2xl
                  h-auto
                  object-contain
                  transition-all
                  duration-700
                  ${imageLoaded ? "opacity-100" : "opacity-0"}
                `}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
