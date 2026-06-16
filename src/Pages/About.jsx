import img1 from "../assets/mission.jpg";
import img2 from "../assets/vision.jpg";
import img3 from "../assets/Aboutheader.jpg";
import img4 from "../assets/About2.jpg";

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative">
        <img src={img3} alt="Education" className="h-112 w-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Welcome to OnlineMBAStudy.com
            </h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              Your trusted education guidance and counselling platform for
              Online MBA programs across India.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {/* About Section */}
        <section className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>

            <div className="space-y-5 text-gray-800 text-xl leading-8">
              <p>Welcome to OnlineMBAStudy.com</p>

              <p>
                OnlineMBAStudy.com is an independent education guidance and
                counselling platform dedicated to helping students and working
                professionals find the right Online MBA programs from recognized
                and accredited universities across India.
              </p>

              <p>
                Founded in 2026 by Maaz Khan, our platform was created with a
                simple goal: to make MBA admissions easier, more transparent,
                and more accessible for learners seeking career growth through
                flexible management education.
              </p>

              <p>
                Whether you're a recent graduate looking to enhance your
                qualifications or a working professional aiming for career
                advancement, we provide the information and guidance needed to
                make informed educational decisions.
              </p>
            </div>
          </div>

          <img src={img4} alt="Students" />
        </section>

        {/* Mission */}
        <section className="py-10">
          <div className=" overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="p-8 lg:p-12">
                <h2 className="text-4xl font-bold text-gray-900 ">
                  Empowering Learners Through Quality Education
                </h2>

                <div className=" mt-4 space-y-5 text-gray-600 leading-8">
                  <p>
                    Our mission is to empower students and professionals with
                    reliable information, expert counselling, and personalized
                    support so they can confidently choose the best Online MBA
                    program for their career goals.
                  </p>

                  <p>
                    We strive to simplify the admission journey by connecting
                    aspiring learners with quality educational opportunities
                    while maintaining transparency and trust at every step.
                  </p>
                </div>
              </div>

              <div className="h-full">
                <img
                  src={img1}
                  alt="Mission"
                  className="w-full h-full object-cover lg:min-h-112"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Vision */}
        <section className="py-10">
          <div className=" overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="p-8 lg:p-12">
                <h2 className="text-4xl font-bold text-gray-900 ">
                  Our Vision
                </h2>

                <div className=" mt-4 space-y-5 text-gray-600 leading-8">
                  <p>
                    To become one of India's most trusted Online MBA guidance
                    platforms by helping learners make informed decisions and
                    achieve their educational and professional goals.
                  </p>
                </div>
              </div>

              <div className="h-full">
                <img
                  src={img2}
                  alt="Mission"
                  className="w-full h-full object-cover lg:min-h-112"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Free MBA Counselling
              </h3>
              <p className="text-gray-700 leading-7">
                Our experienced counsellors help students understand program
                options, eligibility criteria, specializations, fee structures,
                and career opportunities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                University & Program Comparison
              </h3>
              <p className="text-gray-700 leading-7">
                We help learners compare Online MBA programs based on
                accreditation, curriculum, fees, rankings, flexibility, and
                industry relevance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Admission Assistance
              </h3>
              <p className="text-gray-700 leading-7">
                From application guidance to document support, we assist
                students throughout the admission process.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Career Guidance</h3>
              <p className="text-gray-700 leading-7">
                Our team helps students identify MBA specializations that align
                with their professional aspirations and long-term career
                objectives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Educational Resources
              </h3>
              <p className="text-gray-700 leading-7">
                We provide up-to-date information, articles, university
                insights, and admission updates related to Online MBA and
                management education.
              </p>
            </div>
          </div>
        </section>
        {/* Why Choose */}
        <section className="bg-red-600 text-white rounded-xl p-10">
          <h2 className="text-3xl font-bold mb-8">
            Why Choose OnlineMBAStudy.com?
          </h2>

          <div className="grid md:grid-cols-2 gap-5 text-lg">
            <p>- Student-Centric Approach</p>
            <p>- Transparent & Reliable Information</p>
            <p>- Expert Counselling Support</p>
            <p>- Guidance Across Multiple Universities</p>
            <p>- Dedicated Support Throughout the Admission Journey</p>
            <p>- Assistance for Working Professionals and Fresh Graduates</p>
            <p>- Focus on UGC-Recognized & Accredited Programs</p>
          </div>
        </section>

        {/* Founder */}
        <section className="p-10">
          <div className="max-w-4xl ">
            <h2 className="text-3xl font-bold mb-8 ">Founder</h2>

            <div className="space-y-5 text-gray-700 leading-8">
              <p className="text-2xl font-semibold text-gray-900">Maaz Khan</p>

              <p className="text-lg font-medium">Founder, OnlineMBAStudy.com</p>

              <p>
                Driven by a passion for education and career development, Maaz
                Khan established OnlineMBAStudy.com to bridge the gap between
                students and quality management education opportunities. His
                vision is to create a trusted platform where students can
                receive unbiased guidance and access valuable information before
                making important educational decisions.
              </p>
            </div>
          </div>
        </section>
        {/* Disclaimer */}
        <section className="bg-yellow-50 border border-yellow-300 rounded-xl p-10">
          <h2 className="text-3xl font-bold mb-8">Important Disclaimer</h2>

          <div className="space-y-6 text-gray-700 leading-8">
            <p>
              OnlineMBAStudy.com is an independent educational counselling and
              information platform.
            </p>

            <p>
              We are not a university, college, or degree-awarding institution.
              We provide counselling, guidance, and informational services
              related to Online MBA and higher education programs.
            </p>

            <p>
              Unless specifically stated otherwise, OnlineMBAStudy.com is not
              owned, operated, endorsed, or officially affiliated with any
              university, educational institution, or governing body.
            </p>

            <p>
              Any university names, trademarks, logos, rankings, or program
              references mentioned on this website belong to their respective
              owners and are used solely for informational and educational
              purposes to help students explore available academic
              opportunities.
            </p>

            <p>
              Students are encouraged to verify admission requirements, fees,
              accreditation status, placement information, and program details
              directly with the respective universities before making enrollment
              decisions.
            </p>

            <h3 className="text-2xl font-semibold">Disclaimer 2:</h3>

            <p>
              Online MBA Study operates as an independent education information
              and admission-assistance service. We are not the official website
              of, affiliated with, sponsored by, or endorsed by Shoolini
              University. "Shoolini University" and related names are trademarks
              of their respective owners and are used here only for descriptive,
              informational reference. All program, fee, accreditation and
              ranking details are indicative and may change - please verify them
              on the university's official website before making any decision.
              Images used are for illustration only. The trademark owner may
              request changes to or removal of any content here.
            </p>
          </div>
        </section>
        {/* Contact */}
        <section className="  p-10">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>

          <div className="space-y-5 text-gray-700 text-lg">
            <p>OnlineMBAStudy.com</p>

            <p>
              Address:
              <br />
              Yamuna Vihar, Delhi – 110053, India
            </p>

            <p>
              Phone:
              <br />
              +91 92057 80885
            </p>

            <p>
              Website:
              <br />
              onlinembastudy.com
            </p>

            <p>
              Working Hours:
              <br />
              Monday – Saturday | 9:00 AM – 7:00 PM
            </p>
          </div>
        </section>
        {/* Commitment */}
        <section className="bg-red-600 text-white rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>

          <p className="leading-8 text-lg">
            At OnlineMBAStudy.com, we believe that education is one of the most
            powerful investments a person can make. Our commitment is to provide
            honest guidance, accurate information, and dedicated support to help
            students choose the right Online MBA program and take the next step
            toward a successful future.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
