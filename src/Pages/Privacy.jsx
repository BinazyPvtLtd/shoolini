const Privacy = () => {
  
  const sections = [
    {
      title: "1. Information We Collect",
      body: "We may collect the following types of information:",
      groups: [
        {
          heading: "Personal Information",
          intro:
            "When you fill out an enquiry form, contact us, or request counselling, we may collect:",
          items: [
            "Full Name",
            "Mobile Number",
            "Email Address",
            "City/Location",
            "Educational Qualification",
            "Work Experience",
            "Preferred Course or Specialization",
            "Any additional information voluntarily provided by you",
          ],
        },
        {
          heading: "Non-Personal Information",
          intro: "We may automatically collect certain information such as:",
          items: [
            "IP Address",
            "Browser Type",
            "Device Information",
            "Operating System",
            "Website Usage Data",
            "Pages Visited",
            "Referral Source",
            "Date and Time of Visit",
          ],
        },
      ],
    },
    {
      title: "2. How We Use Your Information",
      body: "The information collected may be used to:",
      items: [
        "Provide educational counselling and guidance",
        "Respond to your inquiries and requests",
        "Recommend suitable Online MBA programs",
        "Contact you regarding admissions and educational opportunities",
        "Improve our website and services",
        "Send updates, notifications, and promotional communications",
        "Analyze website performance and user behavior",
        "Prevent fraud, abuse, or unauthorized activity",
        "Comply with legal obligations",
      ],
    },
    {
      title: "3. Lead Sharing & Third-Party Partners",
      body: "By submitting your details on OnlineMBAStudy.com, you acknowledge and agree that your information may be shared with:",
      items: [
        "Universities",
        "Educational Institutions",
        "Admission Partners",
        "Academic Counselors",
        "Education Service Providers",
      ],
      closingParagraphs: [
        "for the purpose of providing information about courses, admissions, scholarships, counselling services, and related educational opportunities.",
        "We only share information necessary to facilitate educational guidance and admission assistance.",
      ],
    },
    {
      title: "4. Cookies Policy",
      paragraphs: [
        "Our website may use cookies and similar tracking technologies to enhance user experience and improve website functionality.",
      ],
      body: "Cookies may be used to:",
      items: [
        "Remember user preferences",
        "Analyze website traffic",
        "Improve website performance",
        "Measure advertising effectiveness",
        "Provide personalized content",
      ],
      closingParagraphs: [
        "You can disable cookies through your browser settings; however, certain website features may not function properly.",
      ],
    },
    {
      title: "5. Google Ads & Analytics",
      body: "We may use:",
      items: [
        "Google Analytics",
        "Google Ads",
        "Google Tag Manager",
        "Google Conversion Tracking",
        "Remarketing Services",
      ],
      closingParagraphs: [
        "These tools help us understand website usage, measure campaign performance, and improve our services.",
        "Third-party vendors, including Google, may use cookies to serve advertisements based on a user's previous visits to our website.",
        "Users can manage ad preferences through Google's Ad Settings.",
      ],
    },
    {
      title: "6. Data Security",
      body: "We implement reasonable technical and organizational measures to protect your personal information from:",
      items: [
        "Unauthorized access",
        "Disclosure",
        "Alteration",
        "Loss",
        "Misuse",
      ],
      closingParagraphs: [
        "While we strive to protect your data, no method of internet transmission or electronic storage is completely secure. Therefore, we cannot guarantee absolute security.",
      ],
    },
    {
      title: "7. Third-Party Links",
      paragraphs: [
        "Our website may contain links to third-party websites, including university websites and external resources.",
        "We are not responsible for the privacy practices, content, or policies of third-party websites. Users should review the privacy policies of any external websites they visit.",
      ],
    },
    {
      title: "8. Your Rights",
      body: "You may request to:",
      items: [
        "Access your personal information",
        "Update inaccurate information",
        "Correct your data",
        "Withdraw consent where applicable",
        "Request deletion of your information",
      ],
      paragraphs: [
        "To exercise these rights, please contact us using the details provided below.",
      ],
    },
    {
      title: "9. Children's Privacy",
      paragraphs: [
        "Our services are intended for individuals aged 18 years and above.",
        "We do not knowingly collect personal information from children under the age of 18. If such information is identified, we will take reasonable steps to remove it.",
      ],
    },
    {
      title: "10. Disclaimer 1:",
      groups: [
        {
          paragraphs: [
            "OnlineMBAStudy.com is an independent educational counselling and information platform.",
            "We are not a university, college, or degree-awarding institution. Unless explicitly stated, we are not affiliated with, endorsed by, or officially associated with any university, educational institution, or governing authority mentioned on this website.",
            "All trademarks, logos, university names, and educational references belong to their respective owners.",
          ],
        },
        {
          heading: "Disclaimer 2:",
          paragraphs: [
            'Online MBA Study operates as an independent education information and admission-assistance service. We are not the official website of, affiliated with, sponsored by, or endorsed by Shoolini University. "Shoolini University" and related names are trademarks of their respective owners and are used here only for descriptive, informational reference. All program, fee, accreditation and ranking details are indicative and may change - please verify them on the university\'s official website before making any decision. Images used are for illustration only. The trademark owner may request changes to or removal of any content here.',
          ],
        },
      ],
    },
    {
      title: "11. Changes to This Privacy Policy",
      paragraphs: [
        "We reserve the right to update, modify, or revise this Privacy Policy at any time without prior notice.",
        "Any changes will be posted on this page with an updated revision date.",
        "Users are encouraged to review this page periodically.",
      ],
    },
  ];
  const indexItems = [
    ...sections.map((section) => ({
      title: section.title,
      href: `#${section.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")}`,
    })),
    { title: "12. Contact Us", href: "#12-contact-us" },
  ];

  return (
    <main className="bg-gray-50">
      <section className="mx-auto max-w-5xl px-4 py-12 text-gray-800 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200 pb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
            Last Updated: June 2026
          </p>
          <h1 className="mt-3 text-3xl font-bold text-gray-950 sm:text-4xl">
            Privacy Policy
          </h1>
          <div className="mt-5 space-y-4 text-base leading-7 text-gray-700">
            <p>
              Welcome to OnlineMBAStudy.com. We are committed to protecting your
              privacy and ensuring that your personal information is handled
              responsibly and securely.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, store, and
              protect your information when you visit our website, submit an
              enquiry, or use our services.
            </p>
            <p>
              By accessing or using OnlineMBAStudy.com, you agree to the
              practices described in this Privacy Policy.
            </p>
          </div>
        </div>

        <div className="grid gap-8 py-8 lg:grid-cols-[280px_1fr] lg:items-start">
          <aside className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-6">
            <h2 className="text-xl font-semibold text-gray-950">Index</h2>
            <nav aria-label="Privacy policy sections" className="mt-4">
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
                id={section.title
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/^-|-$/g, "")}
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

                {section.closingParagraphs?.length > 0 && (
                  <div className="mt-4 space-y-3 text-base leading-7 text-gray-700">
                    {section.closingParagraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                )}

                {section.groups?.length > 0 && (
                  <div className="mt-5 space-y-5">
                    {section.groups.map((group) => (
                      <div key={group.heading || group.paragraphs[0]}>
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
              </article>
            ))}

            <section
              id="12-contact-us"
              className="scroll-mt-6 rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-xl font-semibold text-gray-950">
                12. Contact Us
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-700">
                If you have any questions regarding this Privacy Policy or the
                handling of your personal information, please contact us:
              </p>
              <address className="mt-4 space-y-2 not-italic text-base leading-7 text-gray-700">
                <p className="font-semibold text-gray-950">
                  OnlineMBAStudy.com
                </p>
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
              <p className="mt-6 text-base leading-7 text-gray-700">
                By using OnlineMBAStudy.com, you acknowledge that you have read,
                understood, and agreed to this Privacy Policy.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Privacy;
