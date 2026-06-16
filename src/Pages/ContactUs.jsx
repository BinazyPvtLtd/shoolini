// ContactUs.jsx
import {
  CheckCircle,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Clock as ClockIcon,
} from "lucide-react";

import ConsultationForm from "../components/ConsultationForm";

export default function ContactUs() {
  const services = [
    "Online MBA Program Selection",
    "University Comparisons",
    "Admission Guidance",
    "Eligibility Verification",
    "Fee Structure Information",
    "Specialization Selection",
    "Career Counselling",
    "Application Process Support",
    "Scholarship & Financing Information",
    "Distance & Online MBA Queries",
  ];

  return (
    <>
      <main className="bg-gray-50 text-gray-900">
        <section className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 lg:px-10 lg:pb-20">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mt-5 text-3xl font-bold leading-tight text-gray-950 sm:text-3xl lg:text-3xl">
              Get in Touch with OnlineMBAStudy.com
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Have questions about Online MBA admissions, eligibility, fees,
              specializations, or university selection? Our counselling team is
              here to help.
            </p>
            <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-gray-600">
              Whether you're a working professional looking to advance your
              career or a student exploring management education opportunities,
              we're committed to providing reliable guidance and personalized
              support throughout your educational journey.
            </p>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.95fr]">
            <section>
              <div className="mb-7">
                <h2 className="text-2xl font-bold text-gray-950">
                  Submit an Enquiry
                </h2>
                <p className="mt-2 leading-7 text-gray-600">
                  Fill out the enquiry form on our website and one of our
                  education advisors will contact you shortly.
                </p>
              </div>

              <ConsultationForm />

              <div className="mt-8 border-t border-gray-200 pt-7">
                <p className="text-gray-600">Or reach us via</p>
                <div className="mt-4 space-y-4 text-lg">
                  <a
                    href="mailto:info@onlinembastudy.com"
                    className="flex items-center gap-3 text-gray-800 hover:text-red-600">
                    <Mail className="h-5 w-5" />
                    info@onlinembastudy.com
                  </a>
                  <a
                    href="tel:+919205780885"
                    className="flex items-center gap-3 text-gray-800 hover:text-red-600">
                    <Phone className="h-5 w-5" />
                    +91 92057 80885
                  </a>
                </div>
              </div>
            </section>

            <aside className="space-y-7">
              <div>
                <h2 className="text-2xl font-bold text-gray-950">
                  How We Can Help
                </h2>
                <p className="mt-3 leading-7 text-gray-600">
                  Our team can assist you with:
                </p>
                <div className="mt-6 space-y-4">
                  {services.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-gray-900" />
                      <span className="text-lg leading-7 text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-gray-950" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-950">
                      Phone Support
                    </h3>
                    <a
                      href="tel:+919205780885"
                      className="mt-3 inline-block text-lg font-semibold text-red-600 hover:text-red-700">
                      +91 92057 80885
                    </a>
                    <p className="mt-3 leading-8 text-gray-600">
                      Speak directly with our education counsellors for guidance
                      on Online MBA programs, admissions, eligibility, fees, and
                      career opportunities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-gray-950" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-950">
                      Email Support
                    </h3>
                    <a
                      href="mailto:info@onlinembastudy.com"
                      className="mt-3 inline-block break-all text-lg font-semibold text-red-600 hover:text-red-700">
                      info@onlinembastudy.com
                    </a>
                    <p className="mt-3 leading-8 text-gray-600">
                      For general inquiries, admission assistance, partnership
                      opportunities, or support requests, feel free to email us.
                      Our team will respond as soon as possible.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-gray-950" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-950">
                      Office Address
                    </h3>
                    <p className="mt-3 font-semibold text-gray-950">
                      OnlineMBAStudy.com
                    </p>
                    <p className="mt-3 leading-8 text-gray-600">
                      Yamuna Vihar, Delhi - 110053
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-green-200 bg-green-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-1 h-6 w-6 shrink-0 text-green-600" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-950">
                      WhatsApp Support
                    </h2>
                    <p className="mt-3 leading-8 text-gray-600">
                      For quick assistance and admission-related queries, you
                      can also connect with us via WhatsApp:
                    </p>
                    <a
                      href="https://wa.me/919205780885"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700">
                      +91 92057 80885
                    </a>
                    <p className="mt-4 leading-8 text-gray-600">
                      Get fast responses to your questions about Online MBA
                      admissions, fees, universities, and eligibility
                      requirements.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-gray-50 py-14 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-bold text-gray-950">
                  Disclaimer 1
                </h2>
                <div className="mt-5 space-y-4 leading-8 text-gray-700">
                  <p>
                    OnlineMBAStudy.com is an independent educational counselling
                    and information platform. We are not a university, college,
                    or degree-awarding institution. We provide guidance and
                    information regarding Online MBA and higher education
                    programs offered by various universities.
                  </p>
                  <p>
                    Unless specifically stated otherwise, OnlineMBAStudy.com is
                    not affiliated with, endorsed by, or officially associated
                    with any university or educational institution featured on
                    this website.
                  </p>
                </div>
              </article>

              <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-bold text-gray-950">
                  Disclaimer 2
                </h2>
                <p className="mt-5 leading-8 text-gray-700">
                  Online MBA Study operates as an independent education
                  information and admission-assistance service. We are not the
                  official website of, affiliated with, sponsored by, or
                  endorsed by Shoolini University. "Shoolini University" and
                  related names are trademarks of their respective owners and
                  are used here only for descriptive, informational reference.
                  All program, fee, accreditation and ranking details are
                  indicative and may change. Please verify them on the
                  university's official website before making any decision.
                  Images used are for illustration only. The trademark owner may
                  request changes to or removal of any content here.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-gray-950 py-14 text-white lg:py-16">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
            <h2 className="text-3xl font-bold">Connect With Us</h2>
            <p className="mx-auto mt-4 max-w-3xl leading-8 text-gray-300">
              We look forward to helping you find the right Online MBA program
              and take the next step toward achieving your educational and
              career goals.
            </p>

            <div className="mx-auto mt-8 grid max-w-4xl gap-3 text-left sm:grid-cols-2">
              <a
                href="tel:+919205780885"
                className="flex items-center gap-3 rounded-xl bg-white/10 p-4 transition hover:bg-white/15">
                <Phone className="h-5 w-5 text-red-400" />
                <span>Phone: +91 92057 80885</span>
              </a>
              <a
                href="mailto:info@onlinembastudy.com"
                className="flex items-center gap-3 rounded-xl bg-white/10 p-4 transition hover:bg-white/15">
                <Mail className="h-5 w-5 text-red-400" />
                <span className="break-all">
                  Email: info@onlinembastudy.com
                </span>
              </a>
              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4">
                <MapPin className="h-5 w-5 shrink-0 text-red-400" />
                <span>Address: Yamuna Vihar, Delhi - 110053, India</span>
              </div>
              <a
                href="https://onlinembastudy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-white/10 p-4 transition hover:bg-white/15">
                <ClockIcon className="h-5 w-5 shrink-0 text-red-400" />
                <span>Website: onlinembastudy.com</span>
              </a>
            </div>

            <p className="mt-10 text-gray-300">
              Start your MBA journey with confidence - we're here to guide you
              every step of the way.
            </p>
          </div>
        </section>

        <div className="fixed bottom-6 right-5 z-40 flex flex-col gap-3">
          <a
            href="tel:+919205780885"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-600/30 transition hover:bg-blue-700"
            aria-label="Call OnlineMBAStudy.com">
            <Phone className="h-6 w-6" />
          </a>
          <a
            href="https://wa.me/919205780885"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-xl shadow-green-600/30 transition hover:bg-green-700"
            aria-label="WhatsApp OnlineMBAStudy.com">
            <MessageCircle className="h-7 w-7" />
          </a>
        </div>
      </main>
    </>
  );
}
