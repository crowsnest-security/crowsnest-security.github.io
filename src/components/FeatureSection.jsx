const FeatureSection = () => {
  return (

  <section class="bg-white px-4 py-8 antialiased dark:bg-[#14102c] md:py-16">
    <div class="mx-auto grid max-w-screen-xl rounded-lg bg-gray-50 p-4 dark:bg-gray-800 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
      <div class="lg:col-span-5 lg:mt-0">
          <img
            className="dark:hidden"
            src="img/dashboard.svg"
            alt="CrowsNest Dashboard Image"
          />
          <img
            className="w-full hidden dark:block"
            src="img/dashboard-dark.svg"
            alt="CrowsNest Dashboard Image"
          />
      </div>
      <div class="me-auto place-self-center lg:col-span-7">
        <h1 class="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
          Introducing CrowsNest Compass
        </h1>
        <p class="mb-6 text-gray-500 dark:text-gray-400">
          <i>Cut through compliance chaos.</i>
          <br/>
          Our engine provides <b>real-time, system-level 
              security attestations</b> against industry frameworks <b><i>and</i></b> your policies. 
              Finally, everyone – from dev to exec – sees what matters most, in a way that makes sense to them. 
          <br /> No more guesswork, just results.</p>
          <a
              href="products"
              className="inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium text-sky-500 rounded-lg text-sm py-2.5 text-center dark:focus:ring-primary-900"
            >
              Explore Product
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
