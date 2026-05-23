// Courses.jsx
import CourseCard from "./CourseCard";
import card1 from "../assets/card1.webp";
import card2 from "../assets/card2.webp";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.webp";
import card5 from "../assets/card5.webp";
import card6 from "../assets/card6.webp";

const Courses = ({ onOpenForm }) => {
  const courses = [
    {
      id: 1,
      shortTitle: "MBA",
      title: "Master of Business Administration",
      duration: "24 Month",
      description:
        "Shoolini Online MBA degree develops business leaders through case-based learning, mentorship, and hands-on specialisation training.",
      image: card1,
    },
    {
      id: 2,
      shortTitle: "MA",
      title: "Master of Arts",
      duration: "24 Month",
      description:
        "Shoolini Online MA degree course in English blends literary theory with communication and literature analysis for language-driven professions.",
      image: card2,
    },
    {
      id: 3,
      shortTitle: "MCA",
      title: "Master of Computer Application",
      duration: "24 Month",
      description:
        "Shoolini University's Online MCA program lays a strong foundation in AI, cloud computing, and coding for emerging software and data careers.",
      image: card3,
    },
    {
      id: 4,
      shortTitle: "BBA",
      title: "Bachelor of Business Administration",
      duration: "36 Month",
      description:
        "Shoolini University online BBA offers skill-building in marketing, HR, and finance with internships and a placement-linked structure.",
      image: card4,
    },
    {
      id: 5,
      shortTitle: "B.COM",
      title: "Bachelor of Commerce",
      duration: "36 Month",
      description:
        "Shoolini Online BCom course prepares students in taxation, accounting, and financial systems using practical, industry-oriented modules.",
      image: card5,
    },
    {
      id: 6,
      shortTitle: "BCA",
      title: "Bachelor of Computer Application",
      duration: "36 Month",
      description:
        "Shoolini University Online BCA covers programming, networks, and systems with electives in AI, data, and cybersecurity.",
      image: card6,
    },
  ];

  return (
    <section id="programme" className="scroll-mt-6">
      <div className="px-4 text-center text-3xl font-bold leading-tight sm:text-4xl">
        Top UG/PG Courses for Shoolini Online University
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 p-4 sm:grid-cols-2 sm:p-8 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            duration={course.duration}
            description={course.description}
            image={course.image}
            onOpenForm={onOpenForm}
          />
        ))}
      </div>
    </section>
  );
};

export default Courses;
