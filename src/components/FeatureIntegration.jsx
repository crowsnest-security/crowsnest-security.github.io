const FeatureSection = ({ vendors }) => {
  return (
    <section className="dark:bg-crow-dark">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Seamless Multi-Cloud Integration.
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            <p>
              CrowsNest integrates effortlessly with your existing cloud
              platforms — <b>no heavy lifting required.</b> It pulls live telemetry directly from your systems, 
              giving you a unified view of your organization's security posture through the lens of individual products and workloads.
            </p>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
          {vendors.map((vendor) => (
            <div className="mx-auto card rounded-2xl h-24 w-48 justify-center items-center">
              <img className="" src={vendor.logo} alt={vendor.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
