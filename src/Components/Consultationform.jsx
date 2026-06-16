import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ConsultationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();
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
        "https://script.google.com/macros/s/AKfycbzv6KnPnqYc_MiN6tLjfEkCAUHzgs-S7X6UiCs5eGH-M6VglGBFfrrZL1fEZnExft52qw/exec",
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
      navigate("/thank-you");
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
            We are an independent education counselling platform helping
            students explore and compare online degree programs.
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
              placeholder="Full Name"
              {...register("fullName", {
                required: "Full name is required",
                setValueAs: (value) => value.trim(),
              })}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="tel"
              placeholder="Mobile Number"
              {...register("mobileNumber", {
                required: "Mobile number is required",
                setValueAs: (value) => value.trim(),
                pattern: {
                  value: /^(?:\+91[\s-]?|91[\s-]?)?[6-9]\d{9}$/,
                  message: "Please enter a valid 10 digit mobile number",
                },
              })}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
            />
            {errors.mobileNumber && (
              <p className="text-red-500 text-xs mt-1">
                {errors.mobileNumber.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email Address"
              {...register("emailAddress", {
                required: "Email address is required",
                setValueAs: (value) => value.trim(),
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
            />
            {errors.emailAddress && (
              <p className="text-red-500 text-xs mt-1">
                {errors.emailAddress.message}
              </p>
            )}
          </div>

          <div>
            <select
              {...register("preferredMbaSpecialization", {
                required: "Please select your preferred MBA specialization",
              })}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black">
              <option value="">Preferred MBA Specialization</option>
              <option value="Marketing">Marketing</option>
              <option value="Finance">Finance</option>
              <option value="Human Resource Management">
                Human Resource Management
              </option>
              <option value="International Business">
                International Business
              </option>
              <option value="Operations Management">
                Operations Management
              </option>
              <option value="Business Analytics">Business Analytics</option>
              <option value="Information Technology">
                Information Technology
              </option>
              <option value="Not sure">Not sure</option>
            </select>
            {errors.preferredMbaSpecialization && (
              <p className="text-red-500 text-xs mt-1">
                {errors.preferredMbaSpecialization.message}
              </p>
            )}
          </div>

          <div>
            <select
              {...register("currentQualification", {
                required: "Please select your current qualification",
              })}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black">
              <option value="">Current Qualification</option>
              <option value="12th Pass">12th Pass</option>
              <option value="Diploma">Diploma</option>
              <option value="Graduate">Graduate</option>
              <option value="Postgraduate">Postgraduate</option>
              <option value="Working Professional">Working Professional</option>
              <option value="Other">Other</option>
            </select>
            {errors.currentQualification && (
              <p className="text-red-500 text-xs mt-1">
                {errors.currentQualification.message}
              </p>
            )}
          </div>

          <div>
            <select
              {...register("workExperience", {
                required: "Please select your work experience",
              })}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black">
              <option value="">Work Experience (if applicable)</option>
              <option value="Fresher">Fresher</option>
              <option value="0-1 Year">0-1 Year</option>
              <option value="1-3 Years">1-3 Years</option>
              <option value="3-5 Years">3-5 Years</option>
              <option value="5+ Years">5+ Years</option>
            </select>
            {errors.workExperience && (
              <p className="text-red-500 text-xs mt-1">
                {errors.workExperience.message}
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
              By submitting this form, you agree to our Privacy Policy and Terms
              & Conditions.
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
