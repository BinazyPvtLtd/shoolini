import { X } from "lucide-react";
import ConsultationForm from "./ConsultationForm";

const ConsultationModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6">
      <div className="relative w-full max-w-xs ">
        <button
          type="button"
          onClick={onClose}
          className="absolute -right-2 -top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition hover:text-red-600"
          aria-label="Close consultation form"
        >
          <X size={20} />
        </button>

        <ConsultationForm />
      </div>
    </div>
  );
};

export default ConsultationModal;
