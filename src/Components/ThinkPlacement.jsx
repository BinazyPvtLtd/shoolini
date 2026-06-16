import img1 from "../assets/company1.webp";
import img2 from "../assets/company2.webp";
import img3 from "../assets/company3.webp";
import img4 from "../assets/company4.webp";
import img5 from "../assets/company5.webp";
import img6 from "../assets/company6.webp";
import img7 from "../assets/company7.webp";
import img8 from "../assets/company8.webp";
import img9 from "../assets/company9.webp";
import img10 from "../assets/company10.webp";
import img11 from "../assets/company11.webp";
import img12 from "../assets/company1.webp";

const companies = [
  {
    name: "Biocon",
    logo: img1,
  },
  {
    name: "HUL",
    logo: img2,
  },
  {
    name: "ICICI",
    logo: img3,
  },
  {
    name: "Nestle",
    logo: img4,
  },
  {
    name: "LG",
    logo: img5,
  },
  {
    name: "L&T",
    logo: img6,
  },
  {
    name: "Orange",
    logo: img7,
  },
  {
    name: "Zydus",
    logo: img8,
  },
  {
    name: "Curefit",
    logo: img9,
  },
  {
    name: "Decathlon",
    logo: img10,
  },
  {
    name: "OneScore",
    logo: img11,
  },
  {
    name: "Flipkart",
    logo: img12,
  },
];

const PlacementCompanies = () => {
  return (
    <section className="w-full py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="mb-14 text-3xl font-bold leading-tight text-red-500 sm:text-4xl">
          THINK PLACEMENT
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-10 gap-y-14 items-center">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={company.logo}
                alt={company.name}
                className="h-12 md:h-16 object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementCompanies;
