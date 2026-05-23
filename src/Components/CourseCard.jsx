// CourseCard.jsx
import { Download } from "lucide-react";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

const CourseCard = ({ title, duration, description, image, onOpenForm }) => {
  return (
    <div className="mx-auto w-full max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
      <div className="relative h-32 bg-white sm:h-36">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="p-4 sm:p-5">
        <h2 className="text-lg font-semibold leading-snug sm:text-xl">
          {title}
        </h2>

        <div className="mt-2 flex items-center gap-2 text-gray-700">
          <MdOutlineAccessTimeFilled size={16} />
          <span className="text-sm sm:text-base">{duration}</span>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
          {description}
        </p>

        {/* Buttons */}
        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:gap-3">
          <button
            type="button"
            onClick={onOpenForm}
            className="rounded-md bg-linear-to-r from-red-600 to-red-400 px-4 py-2 text-sm font-semibold text-white sm:text-base">
            Apply now
          </button>

          <button
            type="button"
            onClick={onOpenForm}
            className="flex items-center justify-center gap-1 rounded-md border-2 border-red-500 px-4 py-2 text-sm font-medium text-red-500 sm:text-base">
            Download Brochure
            <Download size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
