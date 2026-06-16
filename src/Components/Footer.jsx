import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-black px-4 py-6 text-center text-sm leading-6 text-white sm:text-base">
        <p className="mx-auto max-w-6xl">
          <span className="font-semibold">Disclaimer:</span> Online MBA Study
          operates as an independent education information and
          admission-assistance service. We are not the official website of,
          affiliated with, sponsored by, or endorsed by Shoolini University.
          "Shoolini University" and related names are trademarks of their
          respective owners and are used here only for descriptive,
          informational reference. All program, fee, accreditation and ranking
          details are indicative and may change; please verify them on the
          university's official website before making any decision. Images used
          are for illustration only. The trademark owner may request changes to
          or removal of any content here.
        </p>

        <div className="mt-3">
          <Link to="/disclaimer">
            <span className="text-blue-500 "> Disclaimer </span>
          </Link>
          |
          <Link to="/privacy-policy">
            <span className="text-blue-500 "> Privacy Policy </span>
          </Link>
          &
          <Link to="/terms-and-conditions">
            <span className="text-blue-500 "> Terms & Conditions</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
