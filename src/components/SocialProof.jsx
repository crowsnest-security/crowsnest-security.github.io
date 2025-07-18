import React from "react";

const SocialProof = () => {
  return (
    <section className=" dark:bg-crow-dark">
      <div className=" px-4 py-4 mx-auto text-center lg:py-4 lg:px-6">
        <div className=" mb-8 lg:mb-16">
          <p className="mb-8 mt-8 text-lg font-normal text-gray-500 lg:text-lg sm:px-16  dark:text-gray-400">
          <h2 className="mb-4 text-3xl md:text-4xl sm:text-xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            You can't secure what you can't see
          </h2>
          </p>
          <p className="mb-8 mt-8 text-lg font-normal text-gray-500 lg:text-lg sm:px-16  dark:text-gray-400">
            CrowsNest empowers modern enterprises to maintain security assurance
            at scale — providing the real-time visibility and control
            today’s CISOs demand.

            
          </p>
        </div>
        <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
          <div className="flex flex-col items-center justify-center card p-5 bg-crow-primary text-white">
            <span className="mb-2 text-4xl font-extrabold">$4.88 m</span>
            <dd className="font-normal mx-auto  dark:text-gray-400">
              The average cost of a data breach in 2024
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center card p-5 bg-crow-primary text-white md:w-full">
            <span className="mb-2 text-4xl font-extrabold">$14.82 m</span>
            <dd className="font-normal mx-auto  dark:text-gray-400">
              Average cost impact from regulatory fines
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center card p-5 bg-crow-primary text-white md:w-full">
            <span className="mb-2 text-4xl font-extrabold">292 days</span>
            <dd className="font-normal mx-auto  dark:text-gray-400">
              Average prolonged breach detection
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default SocialProof;
