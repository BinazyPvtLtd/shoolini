import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How can I apply for Shoolini University Online Programs?",
    answer:
      "Students can apply online by checking their eligibility, selecting a preferred program, and completing the application process. You can also connect with our counselling team for guidance regarding admissions and program selection.",
  },
  {
    question:
      "What Online UG and PG courses are offered by Shoolini University?",
    answer:
      "Shoolini University offers various online undergraduate and postgraduate programs across management, commerce, computer applications, and other disciplines. Course availability may vary, so students should verify the latest offerings before applying.",
  },
  {
    question: "What is the fee structure for Shoolini University Online MBA?",
    answer:
      "The Online MBA fee structure may vary depending on the specialization, admission cycle, and university updates. Students are advised to check the latest fee details before enrollment.",
  },
  {
    question: "Is the Shoolini University Online MBA degree recognized?",
    answer:
      "Shoolini University offers programs in accordance with applicable regulatory approvals and guidelines. Students should verify the latest recognition, accreditation, and eligibility criteria directly with the university before admission.",
  },
  {
    question: "Does Shoolini University provide placement or career support?",
    answer:
      "Many universities offer career services such as career guidance, skill development sessions, and placement assistance. The availability and scope of these services may vary by program and admission year.",
  },
  {
    question: "Who is eligible for the Online MBA program?",
    answer:
      "Eligibility requirements generally include a bachelor's degree from a recognized institution. Specific admission criteria may vary and should be verified before applying.",
  },
  {
    question: "Can working professionals pursue an Online MBA?",
    answer:
      "Yes, online MBA programs are designed to provide flexibility, allowing working professionals to balance their education with personal and professional commitments.",
  },
  {
    question: "How can I get admission guidance?",
    answer:
      "You can submit an enquiry through OnlineMBAStudy.com to receive counselling and information regarding program options, eligibility, fees, and admissions.",
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
              <h3>
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
              </h3>

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
