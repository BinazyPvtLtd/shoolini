import pap from "../assets/pap.webp";

const PayAfterPlacement = () => {
  return (
    <section
      id="about-us"
      className="flex scroll-mt-6 items-center justify-center bg-red-50 px-6 py-10"
    >
      <div className="grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">
        {/* Left Content */}
        <div>
          <h1 className="text-3xl font-bold leading-tight text-red-500 sm:text-4xl">
            Shoolini Online <br />
            JEETO CAREER KI RACE
          </h1>

          <p className="mt-5 text-base leading-7 text-gray-700 sm:text-lg">
            Shoolini University Online is a leader in outcome-based education,
            offering flexible online degrees that align with today's industry
            needs. Recognised by UGC and NAAC, and compliant with AICTE, DEC,
            and NBA standards, online Shoolini University ensures academic
            quality and career relevance. These programs are designed to empower
            learners with job-ready skills, allowing them to study from anywhere
            and prepare for high-growth roles across sectors.
          </p>

          <p className="mt-5 text-base leading-7 text-gray-700 sm:text-lg">
            What makes Shoolini University Online stand out is its unique Pay
            After Placement model, India's first of its kind. You only pay after
            securing a job or being selected for further studies. This approach
            puts your success at the centre, ensuring your investment results in
            real, measurable outcomes.
          </p>

          <div className="mt-8 max-w-xl border-2 border-black bg-transparent p-5 sm:p-6">
            <h2 className="mb-3 text-2xl font-bold leading-tight">
              Here's how it works:
            </h2>

            <p className="text-base font-semibold leading-7 sm:text-lg">
              Pay 70% upfront and the remaining 30% after placement.
            </p>

            <div className="mt-5 flex items-center gap-2 text-base font-medium text-gray-800">
              <span>Pay-After-Placement</span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <img src={pap} alt="student" className="w-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default PayAfterPlacement;
