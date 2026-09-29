import heroVideo1 from "@/assets/img/88c8e639-6e7d-4f93-aed7-53dd41560013.mov";
import joviaClip from "@/assets/img/596b435a-0589-49e3-8cd9-1cae03b14cc3.mov";
import { Link } from "react-router-dom";

export default function Video() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* SECTION 1 */}
        <div className="mt-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Left */}
          <div className="order-2 lg:order-1">
            <h3 className="mt-5 text-4xl md:text-6xl font-black leading-tight text-[#0E2258]">
              Discover Jovia Network{" "}
              <span className="block bg-gradient-to-r from-[#0E2258] via-[#0F9AC5] to-[#00E57B] bg-clip-text text-transparent">
                Digital Possibilities
              </span>
            </h3>

            <p className="mt-6 text-[#0E2258]/80 leading-relaxed text-lg">
              Jovia Network brings together digital skills, entertainment,
              networking, and activities across several categories. Members can
              explore the platform, learn how each activity works, and decide
              which options fit their interests and availability.
            </p>

            <p className="mt-4 text-[#0E2258]/70 leading-relaxed">
              The flyers highlight networking, digital skills, entertainment,
              and engaging activities across several categories. Browse the
              current options and choose what fits your interests and schedule.
            </p>

            <p className="mt-4 text-[#0E2258]/70 leading-relaxed font-medium">
              Activities may have different instructions, eligibility rules,
              and terms. Review the current details before participating, and
              treat any promotional rewards as subject to those terms rather
              than guaranteed income.
            </p>

            <p className="mt-4 text-[#0E2258] font-semibold leading-relaxed">
              Explore Jovia. Find the tools and activities that fit you.
            </p>
          </div>

          {/* Video Container 2 */}
          <div className="order-1 lg:order-2 relative group">
            {/* Ambient Background Glow */}
            <div className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full transition duration-500" />

            <div className="relative overflow-hidden rounded-[32px]">
              <video
                src={joviaClip}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-[32px]"
              />
            </div>
          </div>
        </div>

        {/* SECTION 2 - PARTICIPATION */}
        <div className="mt-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Video Container 1 */}
          <div className="relative group">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-2 rounded-3xl transition duration-500" />

            <div className="relative overflow-hidden rounded-2xl">
              <video
                src={heroVideo1}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="mt-5 text-4xl md:text-6xl font-black leading-tight text-[#0E2258]">
              Choose How to
              <span className="block bg-gradient-to-r from-[#0E2258] via-[#0F9AC5] to-[#00E57B] bg-clip-text text-transparent">
                Take Part
              </span>
            </h3>
            <p className="mt-6 text-lg leading-relaxed text-[#0E2258]/75">
              Some Jovia activities use a countdown. Where available, choose
              an activity and duration, read its instructions, and participate
              while the timer runs.
            </p>

            <p className="mt-5 text-[#0E2258]/70 leading-relaxed">
              Activities may differ by category, location, eligibility, and
              availability. Check the current details on the platform so you
              know what participation involves.
            </p>

            <p className="mt-5 text-[#0E2258]/70 leading-relaxed font-medium">
              Any rewards shown in promotional materials are examples and
              remain subject to the activity's current terms; they are not
              guaranteed income.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-[#0E2258] via-[#15347A] to-[#0F9AC5] hover:shadow-lg hover:shadow-[#0F9AC5]/25 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Explore Jovia
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
