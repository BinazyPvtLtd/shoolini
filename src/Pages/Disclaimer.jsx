const createId = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const Disclaimer = () => {
  const sections = [
    {
      title: "1. Educational Information Purpose",
      paragraphs: [
        "OnlineMBAStudy.com is an independent educational information and counselling platform designed to help students and working professionals explore Online MBA and higher education opportunities.",
        "The information provided on this website is intended for general informational and educational purposes only and should not be considered official admission advice, legal advice, financial advice, or a guarantee of admission.",
      ],
    },
    {
      title: "2. Independent Platform Disclosure",
      paragraphs: [
        "OnlineMBAStudy.com is an independently operated educational guidance platform.",
        "We are not a university, college, educational institution, degree-awarding body, or government organization.",
      ],
      body: "Unless expressly stated otherwise:",
      items: [
        "We are not owned by any university.",
        "We are not operated by any university.",
        "We are not officially affiliated with any university.",
        "We are not endorsed by any university.",
        "We do not represent ourselves as the official website of any university.",
      ],
      closingParagraphs: [
        "Our role is limited to providing educational information, counselling support, and admission guidance.",
      ],
    },
    {
      title: "3. University Information Disclaimer",
      body: "We strive to provide accurate and updated information regarding:",
      items: [
        "Online MBA Programs",
        "Admission Procedures",
        "Eligibility Criteria",
        "Fee Structures",
        "Specializations",
        "Rankings",
        "Accreditation",
        "Placement Information",
      ],
      closingParagraphs: [
        "However, universities may change their policies, fees, admission requirements, program structures, rankings, and accreditation status at any time.",
        "Therefore, users should always verify information directly with the respective university before making any admission or financial decisions.",
        "OnlineMBAStudy.com shall not be held responsible for changes made by educational institutions after publication.",
      ],
    },
    {
      title: "4. No Admission Guarantee",
      body: "Submission of an enquiry form, participation in counselling sessions, or receiving admission guidance from OnlineMBAStudy.com does not guarantee:",
      items: [
        "Admission to any university",
        "Scholarship approval",
        "Placement opportunities",
        "Educational outcomes",
        "Career advancement",
        "Academic success",
      ],
      closingParagraphs: [
        "Final admission decisions are made solely by the respective universities according to their admission policies and eligibility requirements.",
      ],
    },
    {
      title: "5. Counselling Services Policy",
      body: "Our counselling services are intended to help students:",
      items: [
        "Understand available educational options",
        "Compare programs",
        "Evaluate eligibility requirements",
        "Explore career pathways",
        "Navigate admission processes",
      ],
      closingParagraphs: [
        "The final decision regarding course selection, university selection, and enrollment remains entirely with the student.",
      ],
    },
    {
      title: "6. Lead Sharing Consent",
      body: "By submitting your information through our website, you authorize OnlineMBAStudy.com to:",
      items: [
        "Contact you via phone call",
        "Contact you via SMS",
        "Contact you via WhatsApp",
        "Contact you via email",
      ],
      groups: [
        {
          intro: "You also consent to the sharing of your information with:",
          items: [
            "Universities",
            "Educational Institutions",
            "Admission Partners",
            "Academic Counsellors",
            "Education Service Providers",
          ],
        },
      ],
      closingParagraphs: [
        "This consent is for educational counselling and admission-related purposes.",
      ],
    },
    {
      title: "7. Third-Party Trademarks & Logos",
      paragraphs: [
        "All university names, logos, trademarks, service marks, and brand names appearing on this website are the property of their respective owners.",
      ],
      body: "Their appearance on OnlineMBAStudy.com does not imply:",
      items: [
        "Ownership",
        "Partnership",
        "Sponsorship",
        "Endorsement",
        "Official affiliation",
      ],
      closingParagraphs: [
        "unless explicitly stated.",
        "References to universities are used solely for informational and educational purposes.",
      ],
    },
    {
      title: "8. External Website Disclaimer",
      paragraphs: ["This website may contain links to third-party websites."],
      body: "OnlineMBAStudy.com has no control over:",
      items: [
        "Website content",
        "Privacy practices",
        "Terms of service",
        "Accuracy of information",
      ],
      closingParagraphs: [
        "Users access third-party websites at their own discretion and risk.",
      ],
    },
    {
      title: "9. Limitation of Liability",
      body: "OnlineMBAStudy.com, its founder, employees, counsellors, affiliates, and representatives shall not be liable for:",
      items: [
        "Admission denials",
        "University decisions",
        "Changes in university policies",
        "Financial losses",
        "Educational outcomes",
        "Career outcomes",
        "Technical issues",
        "Website interruptions",
        "Reliance on information published on the website",
      ],
      closingParagraphs: [
        "Users assume full responsibility for decisions made based on information obtained from this platform.",
      ],
    },
    {
      title: "10. No Professional Advice",
      body: "The content available on OnlineMBAStudy.com should not be interpreted as:",
      items: [
        "Legal advice",
        "Financial advice",
        "Tax advice",
        "Career guarantees",
        "Professional consulting services",
      ],
      closingParagraphs: [
        "Users should seek independent professional advice where appropriate.",
      ],
    },
    {
      title: "11. Policy Updates",
      paragraphs: [
        "We reserve the right to modify, update, or revise this Disclaimer & Service Policy at any time without prior notice.",
        "Changes will become effective immediately upon publication on this page.",
        "Users are encouraged to review this policy periodically.",
      ],
    },
    {
      title: "12. Transparency Commitment",
      paragraphs: [
        "At OnlineMBAStudy.com, we are committed to providing transparent, accurate, and student-focused educational guidance.",
        "Our objective is to help learners make informed decisions while maintaining the highest standards of integrity, compliance, and trust.",
      ],
    },
  ];

  const indexItems = [
    ...sections.map((section) => ({
      title: section.title,
      href: `#${createId(section.title)}`,
    })),
    { title: "13. Contact Information", href: "#13-contact-information" },
  ];

  return (
    <main className="bg-gray-50">
      <section className="mx-auto max-w-5xl px-4 py-12 text-gray-800 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200 pb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
            Last Updated: June 2026
          </p>
          <h1 className="mt-3 text-3xl font-bold text-gray-950 sm:text-4xl">
            Disclaimer & Service Policy
          </h1>
          <div className="mt-5 space-y-4 text-base leading-7 text-gray-700">
            <p>
              Welcome to OnlineMBAStudy.com. This Disclaimer & Service Policy
              explains the nature of our services, limitations of liability, and
              important information regarding the educational content and
              counselling services provided through our website.
            </p>
            <p>
              By using this website, you acknowledge and agree to the terms
              outlined below.
            </p>
          </div>
        </div>

        <div className="grid gap-8 py-8 lg:grid-cols-[280px_1fr] lg:items-start">
          <aside className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-6">
            <h2 className="text-xl font-semibold text-gray-950">Index</h2>
            <nav aria-label="Disclaimer policy sections" className="mt-4">
              <ol className="space-y-2 text-sm text-gray-700">
                {indexItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block rounded-md border border-gray-100 px-3 py-2 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="space-y-8">
            {sections.map((section) => (
              <article
                key={section.title}
                id={createId(section.title)}
                className="scroll-mt-6 rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
                <h2 className="text-xl font-semibold text-gray-950">
                  {section.title}
                </h2>

                {section.paragraphs?.length > 0 && (
                  <div className="mt-4 space-y-3 text-base leading-7 text-gray-700">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                )}

                {section.body && (
                  <p className="mt-4 text-base leading-7 text-gray-700">
                    {section.body}
                  </p>
                )}

                {section.items?.length > 0 && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-gray-700">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.groups?.length > 0 && (
                  <div className="mt-5 space-y-5">
                    {section.groups.map((group) => (
                      <div key={group.heading || group.intro}>
                        {group.heading && (
                          <h3 className="font-semibold text-gray-900">
                            {group.heading}
                          </h3>
                        )}
                        {group.intro && (
                          <p className="mt-2 text-base leading-7 text-gray-700">
                            {group.intro}
                          </p>
                        )}
                        {group.paragraphs?.length > 0 && (
                          <div className="mt-2 space-y-3 text-base leading-7 text-gray-700">
                            {group.paragraphs.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>
                        )}
                        {group.items?.length > 0 && (
                          <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-7 text-gray-700">
                            {group.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {section.closingParagraphs?.length > 0 && (
                  <div className="mt-4 space-y-3 text-base leading-7 text-gray-700">
                    {section.closingParagraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </article>
            ))}

            <section
              id="13-contact-information"
              className="scroll-mt-6 rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-xl font-semibold text-gray-950">
                13. Contact Information
              </h2>
              <address className="mt-4 space-y-2 not-italic text-base leading-7 text-gray-700">
                <p className="font-semibold text-gray-950">
                  OnlineMBAStudy.com
                </p>
                <p>Founder: Maaz Khan</p>
                <p>Address:</p>
                <p>Yamuna Vihar, Delhi - 110053, India</p>
                <p>Phone:</p>
                <p>
                  <a
                    href="tel:+919205780885"
                    className="font-medium text-red-600 hover:text-red-700">
                    +91 92057 80885
                  </a>
                </p>
                <p>Website:</p>
                <p>
                  <a
                    href="https://onlinembastudy.com"
                    className="font-medium text-red-600 hover:text-red-700"
                    target="_blank"
                    rel="noreferrer">
                    https://onlinembastudy.com
                  </a>
                </p>
              </address>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Disclaimer;
