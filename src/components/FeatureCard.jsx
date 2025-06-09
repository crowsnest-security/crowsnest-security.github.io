const FeatureCard = ({ icon, name, description }) => {
  return (
    <section className="mx-auto   dark:bg-crow-dark">
      {/* <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"> */}
      {/* <div className="space-y-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-y-0"> */}

      {/* FeatureCard Card */}

      <div className="border rounded-lg w-96">
        <div className="flex flex-row">
          <div className="w-32 p-5  bg-gray-100 justify-center   bg-primary-100 dark:bg-primary-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-crow-primary"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <circle cx="12" cy="12" r="4" />
            </svg>
          </div>
          <div className="flex flex-col p-5">
            <h3 className="mb-2 text-lg text-crow-primary text-center font-bold dark:text-white h-12">
              {name}
            </h3>
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
