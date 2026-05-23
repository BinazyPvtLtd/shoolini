import ConsultationForm from "./Consultationform";

const Hero = ({ onOpenForm }) => {
  return (
    <section className="overflow-hidden bg-red-50">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:py-8 lg:px-10 lg:py-10">
        <div className="relative flex flex-col items-stretch gap-6 sm:gap-8 lg:min-h-[60vh] lg:flex-row lg:gap-6">
          <div className="flex w-full min-w-0 flex-col justify-center space-y-4 sm:space-y-5 py-4 z-10 lg:w-1/2 lg:py-10">
            <span className="inline-block px-2 py-1.5 text-xs font-semibold tracking-wide sm:px-4 sm:py-2 sm:text-sm">
              #ThinkSuccessWithShoolini
            </span>

            <div>
              <h1 className="text-3xl font-bold leading-tight text-red-600 sm:text-4xl lg:text-5xl">
                Shoolini University
                <br />
                Online Degree Programs
              </h1>

              <p className="mt-3 max-w-xl text-base leading-7 text-gray-700 sm:mt-4 sm:text-lg">
                Learn with purpose. Grow with confidence.
              </p>
            </div>

            <div className="w-full max-w-full rounded-xl bg-red-500 p-4 text-base font-semibold leading-7 text-white shadow-lg sm:max-w-md sm:p-5 sm:text-lg">
              Up to 30% scholarship available in online degree programs.
            </div>

            <div className="text-sm font-semibold text-gray-700 sm:text-base">
              MBA | MCA | MA | BCOM | BBA | BCA
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={onOpenForm}
                className="rounded-xl bg-red-500 w-fit  px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-red-600 active:scale-95 sm:px-5 sm:py-3 sm:text-base md:px-6">
                Download Brochure
              </button>
            </div>
          </div>

          <div className="hidden lg:flex flex-col justify-center lg:w-[42%] ml-auto z-10">
            <div className="flex h-full w-full max-w-md flex-col justify-center px-2 py-6">
              <ConsultationForm />
            </div>
          </div>

          <div className="hidden sm:flex lg:hidden w-full justify-center">
            <div className="w-full max-w-lg">
              <ConsultationForm />
            </div>
          </div>

          <div className="flex w-full min-w-0 sm:hidden">
            <div className="w-full">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
