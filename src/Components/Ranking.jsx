import Rank1 from "../assets/rank1.webp";
import Rank2 from "../assets/rank2.webp";
import Rank3 from "../assets/rank3.webp";
import Rank4 from "../assets/rank4.webp";
import Rank5 from "../assets/rank5.png";
import Rank6 from "../assets/rank6.webp";

const Ranking = () => {
  const rankings = [Rank1, Rank2, Rank3, Rank4, Rank5, Rank6];

  return (
    <section id="approvals" className="scroll-mt-6 bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start ">
          {/* Left Side */}
          <div className=" bg-black p-6 lg:sticky lg:top-20 lg:p-8">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Ranking of Excellence in
              <span className="text-red-600"> Shoolini University Online</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-white/80 sm:text-lg">
              Shoolini University Online is recognised for its strong academic
              record.
            </p>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
            {rankings.map((rank, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 flex items-center justify-center">
                <img
                  src={rank}
                  alt={`Ranking ${index + 1}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ranking;
