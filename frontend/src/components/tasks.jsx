const CONTRIBUTIONS_ROW_1 = [
  "Networking",
  "Digital Skills",
  "Entertainment",
  "Interactive Activities",
  "Learning",
  "Community",
  "Creative Interests",
  "Everyday Participation",
  "Online Experiences",
  "New Opportunities",
];

const CONTRIBUTIONS_ROW_2 = [
  "One Vision",
  "Intelligent Advancement",
  "Explore Activities",
  "Choose Your Interests",
  "Countdown Activities",
  "Watch and Participate",
  "Connect with Others",
  "Build Digital Skills",
  "User-First Vision",
  "Jovia Network",
];

export default function TasksSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      
      <div className="relative z-10">
      

        {/* Marquee Row 1 */}
        <div className="relative mt-16 overflow-hidden w-full">
        
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[...CONTRIBUTIONS_ROW_1, ...CONTRIBUTIONS_ROW_1].map(
              (item, index) => (
                <div
                  key={index}
                  className="
                    shrink-0
                    px-6
                    py-3
                    rounded-full
                    bg-gradient-to-r
                    from-[#0E2258]
                    to-[#0F9AC5]
                    text-white
                    font-medium
                    shadow-lg
                    hover:scale-105
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>

        {/* Marquee Row 2 */}
        <div className="relative mt-5 overflow-hidden w-full">
          
          <div className="flex gap-4 animate-marquee-reverse whitespace-nowrap">
            {[...CONTRIBUTIONS_ROW_2, ...CONTRIBUTIONS_ROW_2].map(
              (item, index) => (
                <div
                  key={index}
                  className="
                    shrink-0
                    px-6
                    py-3
                    rounded-full
                    bg-white/80
                    backdrop-blur-xl
                    border
                    border-[#0F9AC5]/15
                    text-[#0E2258]
                    font-medium
                    shadow-sm
                    hover:bg-[#0E2258]
                    hover:text-white
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marqueeReverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          width: max-content;
          animation: marquee 30s linear infinite;
        }

        .animate-marquee-reverse {
          width: max-content;
          animation: marqueeReverse 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
