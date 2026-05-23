import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How can I apply for admission to Shoolini University?",
    answer:
      "You can apply for Shoolini University Online admission online by filling out the application form and submitting the required documents digitally.",
  },
  {
    question: "What online courses are available at Shoolini University?",
    answer:
      "Shoolini online courses include MBA, MCA, MA, BBA, BCom, and BCA, all of which are offered through their online platform.",
  },
  {
    question:
      "What is the fee structure for the Shoolini University MBA online program?",
    answer:
      "The Shoolini University MBA fees are 52,000 and can be paid under their Pay After Placement model.",
  },
  {
    question: "Is the Shoolini Online MBA degree recognised?",
    answer:
      "Yes, the Shoolini Online MBA is UGC-entitled, NAAC A+ accredited, and meets AICTE and national standards.",
  },
  {
    question:
      "Does Shoolini University offer placement support for online learners?",
    answer:
      "Yes, online Shoolini University provides placement support, interview prep, career sessions, and Pay After Placement flexibility.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-6 py-16 md:px-14 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-10 text-3xl font-bold leading-tight md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 ">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b  border-gray-300 pb-5">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-6 text-left">
                <span className="text-base font-semibold leading-7 text-gray-700 md:text-lg">
                  Q{index + 1}. {faq.question}
                </span>
                <span>
                  {openIndex === index ? (
                    <Minus size={28} />
                  ) : (
                    <Plus size={28} />
                  )}
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100 mt-4"
                    : "grid-rows-[0fr] opacity-0"
                }`}>
                <div className="overflow-hidden">
                  <p className="pr-10 text-base leading-7 text-gray-500 md:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
