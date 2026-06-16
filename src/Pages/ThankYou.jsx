import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md rounded-2xl bg-white p-8 shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800">Thank You!</h1>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Thank you for submitting the form. We have received your information
          successfully. Our team will review your submission and get back to you
          soon.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-red-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
