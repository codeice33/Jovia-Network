import heroVisual from "@/assets/img/c18bf5d9-af6a-489b-8fbe-e1c2d1ac3b4d.jpeg.jpg";
import activitiesImage from "@/assets/img/8371e1e4-dbc7-41b3-adb8-13c3e538c4a0.jpeg.jpg";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        {/* SECTION 1 - JOVIA NETWORK */}
        <div className="mt-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            {/* Image Card */}
            <div
              className="
        relative
        overflow-hidden
       
        
      "
            >
              <img
                src={heroVisual}
                alt="Jovia Network"
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div
              className="
        inline-flex
        items-center
        gap-2
        px-4
        py-2
        rounded-full
        bg-[#0F9AC5]/10
        text-[#0E2258]
        text-sm
        font-semibold
      "
            >
              About Jovia Network
            </div>

            <h3
              className="
        mt-5
        text-4xl
        md:text-6xl
        font-black
        leading-tight
        text-[#0E2258]
      "
            >
              One Vision
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
            </h3>

            <p
              className="
        mt-6
        text-lg
        leading-relaxed
        text-[#0E2258]/75
      "
            >
              Jovia Network is a multinational networking platform built around
              one guiding idea: Just One Vision, Intelligent Advancement. It
              connects people with digital skills, entertainment, and engaging
              activities across multiple categories.
            </p>

            <p
              className="
        mt-5
        text-[#0E2258]/70
        leading-relaxed
      "
            >
              Jovia is designed for people with different interests and
              schedules. Browse the activities available to you, read how each
              one works, and decide what fits your time and location. Some
              activities are digital and social; others focus on entertainment
              or participation in a specific event.
            </p>

            <p
              className="
        mt-5
        text-[#0E2258]/70
        leading-relaxed
      "
            >
              The flyers highlight ways to connect, build digital skills, enjoy
              entertainment, and take part in activities. They also describe
              timed participation: choose an available duration, follow the
              instructions, and take part while the activity is running. Check
              the current activity details for its availability and rules.
            </p>

            <p
              className="
        mt-5
        text-[#0E2258]/70
        leading-relaxed
      "
            >
              Jovia's stated vision is intelligent advancement, with user
              welfare as a priority. The best way to get started is to explore
              the platform, understand what each activity involves, and choose
              whether it suits you. Participation, benefits, and any advertised
              rewards are subject to the current terms and eligibility; review
              those details before taking part.
            </p>

            {/* Highlights */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div
                className="
          px-4
          py-2
          rounded-full
          bg-[#0E2258]
          text-white
          text-sm
          font-medium
        "
              >
                Networking
              </div>

              <div
                className="
          px-4
          py-2
          rounded-full
          bg-[#0F9AC5]
          text-white
          text-sm
          font-medium
        "
              >
                Digital Skills
              </div>

              <div
                className="
          px-4
          py-2
          rounded-full
          bg-[#00E57B]
          text-[#0E2258]
          text-sm
          font-medium
        "
              >
                Entertainment
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
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
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="mt-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Left */}
          <div className="order-2 lg:order-1">
            <span
              className="
        inline-flex
        items-center
        gap-2
        px-4
        py-2
        rounded-full
        bg-[#0F9AC5]/10
        text-[#0E2258]
        text-sm
        font-semibold
      "
            >
              Opportunities on Jovia
            </span>

            <h3
              className="
        mt-5
        text-4xl
        md:text-6xl
        font-black
        leading-tight
        text-[#0E2258]
      "
            >
              Learn, Create, and Explore
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
                with Jovia Network.
              </span>
            </h3>

            <p className="mt-6 text-black/60 leading-relaxed text-lg">
              Jovia brings networking, digital skills, entertainment, and
              engaging activities together in one platform. Members can browse
              the categories, read each activity's instructions, and decide
              what fits their interests and available time. There is no single
              route everyone has to follow.
            </p>

            <p className="mt-4 text-black/60 leading-relaxed">
              Some activities use a countdown. Where offered, participants
              select an available duration, follow the activity instructions,
              and take part while the timer runs. The flyers describe different
              activity options and example rewards, but availability and
              eligibility may vary. Check the current terms for each activity;
              advertised rewards should not be read as guaranteed income.
            </p>

            <p className="mt-4 text-black/60 leading-relaxed">
              Jovia's vision is a connected network where people can discover
              activities, develop digital skills, and participate in ways that
              suit them. Review the latest details on the platform before
              joining an activity, as formats, terms, and availability can
              change.
            </p>
          </div>

          {/* Image Right */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-black/5 rounded-full blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-black/10">
              <img
                src={activitiesImage}
                alt="Jovia Network opportunities"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
