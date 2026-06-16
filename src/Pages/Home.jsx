import { useState } from "react";
import Hero from "../components/Hero";
import Ranking from "../components/Ranking";
import Courses from "../components/Courses";
import PayAfter from "../components/PayAfter";
import WhyUs from "../components/WhyUs";
import PlacementCompanies from "../components/ThinkPlacement";
import FAQSection from "../components/FAQ";
import ConsultationModal from "../components/ConsultationModal";

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <>
      <Hero onOpenForm={openForm} />
      <Ranking />
      <Courses onOpenForm={openForm} />
      <PayAfter />
      <WhyUs />
      <PlacementCompanies />
      <FAQSection />
      <ConsultationModal isOpen={isFormOpen} onClose={closeForm} />
    </>
  );
};

export default Home;
