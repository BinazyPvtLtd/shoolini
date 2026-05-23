import { useState } from "react";
import { useForm } from "react-hook-form";

const ConsultationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setIsSuccess(false);

    const sheetData = { ...data };
    delete sheetData.terms;

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyN8rzGLmXq26wKw1qnzNrSA7wh3ZXBvLYHprEII5X4JC-Q28oo8UkGbyHv6rG7GVCeHw/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain",
          },
          body: JSON.stringify(sheetData),
        },
      );

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex w-full items-center justify-center">
      <div className="w-full max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-lg p-4 sm:max-w-xl">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold leading-tight text-gray-900">
            Cost Free Consultation
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-500">
            From Higher Experience Counselor
          </p>
        </div>

        {isSuccess && (
          <div className="mb-4 rounded-lg bg-green-50 p-3 text-center text-sm font-medium text-green-800 border border-green-200">
            Thank you for applying. We'll contact you soon.
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <input
              type="text"
              placeholder="Enter Your Name"
              {...register("name", { required: "Name is required" })}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Enter Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="tel"
              placeholder="Enter Your Number"
              {...register("number", {
                required: "Phone number is required",
                setValueAs: (value) => value.trim(),
                pattern: {
                  value: /^(?:\+91[\s-]?|91[\s-]?)?[6-9]\d{9}$/,
                  message: "Please enter a valid 10 digit phone number",
                },
              })}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
            />
            {errors.number && (
              <p className="text-red-500 text-xs mt-1">
                {errors.number.message}
              </p>
            )}
          </div>

          <div>
            <select
              {...register("course", { required: "Please select a course" })}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black">
              <option value="">Select Your Course</option>
              <option value="MBA">MBA</option>
              <option value="MCA">MCA</option>
              <option value="MA">MA</option>
              <option value="BBA">BBA</option>
              <option value="BCOM">BCOM</option>
              <option value="BCA">BCA</option>
            </select>
            {errors.course && (
              <p className="text-red-500 text-xs mt-1">
                {errors.course.message}
              </p>
            )}
          </div>

          <div>
            <select
              {...register("state", { required: "Please select your state" })}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black">
              <option value="">Select Your State</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Delhi">Delhi</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
            {errors.state && (
              <p className="text-red-500 text-xs mt-1">
                {errors.state.message}
              </p>
            )}
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              {...register("terms", {
                required: "You must agree before submitting",
              })}
              className="mt-1"
            />
            <p className="text-xs leading-5 text-gray-600">
              I authorize a representative to contact me via phone and/or email.
              This will override registry on DND/NDNC.
            </p>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-xs">{errors.terms.message}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-black py-2 text-sm font-semibold text-white transition hover:opacity-90 disabled:bg-gray-400 disabled:cursor-not-allowed">
            {isSubmitting ? "Submitting..." : "Apply Now"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ConsultationForm;
