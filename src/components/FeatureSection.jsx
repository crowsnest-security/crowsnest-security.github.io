const FeatureSection = () => {
  return (
    <section className="dark:bg-crow-dark">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          className="w-full dark:hidden"
          src="img/dashboard.svg"
          alt="CrowsNest Dashboard Image"
        />
        <img
          className="w-full hidden dark:block"
          src="img/dashboard-dark.svg"
          alt="CrowsNest Dashboard Image"
        />

        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Autonomous Compliance Telemetry, Delivered by Data Crows
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            CrowsNest deploys intelligent data crows that traverse your
            infrastructure to collect real-time telemetry, evidence, and
            compliance signals. These are returned to the central CrowsNest hub,
            where they're continuously evaluated against your products,
            policies, and leading cybersecurity frameworks — giving you a live,
            accurate view of your compliance posture.
          </p>
          <a
            href="features"
            className="inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
          >
            Explore Features
            <svg
              className="ml-2 -mr-1 w-5 h-5 rounded-2xl"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
