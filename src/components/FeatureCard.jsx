const FeatureCard = ({ icon, name, description }) => {
  return (
    <section className="mx-auto   dark:bg-crow-dark">
      {/* <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"> */}
      {/* <div className="space-y-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-y-0"> */}

      {/* FeatureCard Card */}

      <div className="border rounded-lg p-5 w-96">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className=" justify-center  mb-4   bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-crow-primary dark:text-gray-100"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <div className="items-center flex mx-auto">
              <h3 className="mb-2 text-lg text-crow-primary text-center font-bold dark:text-white h-12">
                {name}
              </h3>
            </div>
          </div>

          <div>
            <p className="text-gray-500 dark:text-gray-400 text-xs">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
