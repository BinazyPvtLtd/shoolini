const WhyUs = () => {
  return (
    <>
      <section id="why-us" className="w-full scroll-mt-6 py-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="mb-8 px-4 text-center text-3xl font-bold leading-tight text-red-500 sm:text-4xl">
            Why Choose <br />
            <div className="font-bold text-black">
              Shoolini Online University
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-none">
            {/* Card 1 */}
            <div className="bg-red-500 p-8 text-white md:p-12">
              <h3 className="mb-4 text-2xl font-bold leading-tight">
                Personalised Mentorship
              </h3>

              <p className="max-w-xl text-base leading-7 text-white/95 sm:text-lg">
                Shoolini University Online offers expert-led sessions guidance
                to help you navigate real-world career paths with industry
                insight.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-200 p-8 text-black md:p-12">
              <h3 className="mb-4 text-2xl font-bold leading-tight">
                Resume Development
              </h3>

              <p className="max-w-xl text-base leading-7 text-black/80 sm:text-lg">
                Optimise your resume and LinkedIn profile through guided
                support from Shoolini University's career development team.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-200 p-8 text-black md:p-12">
              <h3 className="mb-4 text-2xl font-bold leading-tight">
                AI Interview with Experts
              </h3>

              <p className="max-w-xl text-base leading-7 text-black/80 sm:text-lg">
                Online Shoolini University offers AI-powered interview
                preparation from Siqandar, helping to boost your job placement
                readiness.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-red-500 p-8 text-white md:p-12">
              <h3 className="mb-4 text-2xl font-bold leading-tight">
                Portfolio Showcasing
              </h3>

              <p className="max-w-xl text-base leading-7 text-white/95 sm:text-lg">
                Create a standout portfolio or file a patent with Shoolini
                University Online's innovation-driven project support platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
