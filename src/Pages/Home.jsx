import { useState } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Ranking from "../Components/Ranking";
import Courses from "../Components/Courses";
import Payafter from "../Components/payafter";
import WhyUs from "../Components/WhyUs";
import PlacementCompanies from "../Components/ThinkPlacement";
import FAQSection from "../Components/FAQ";
import Footer from "../Components/Footer";
import ConsultationModal from "../Components/ConsultationModal";

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <>
      <Navbar />
      <Hero onOpenForm={openForm} />
      <Ranking />
      <Courses onOpenForm={openForm} />
      <Payafter />
      <WhyUs />
      <PlacementCompanies />
      <FAQSection />
      <Footer />
      <ConsultationModal isOpen={isFormOpen} onClose={closeForm} />
    </>
  );
};

export default Home;
