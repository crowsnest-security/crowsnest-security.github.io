const FeatureFrameworks = ({ vendors }) => {
  return (
    <section className="dark:bg-crow-dark">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Assurance against all major security frameworks
          </h2> 
          <p className="mb-6 font-normal text-gray-500 lg:text-lg  dark:text-gray-400">
            <p>
              CrowsNest continuously maps your security signals to leading
              industry frameworks like ISO, NIST & CIS and bespoke internal policies —
              automatically identifying control coverage, gaps and compliance
              status. 
              <br/>Whether you're preparing for an audit or scaling trust
              with customers, CrowsNest keeps you aligned and audit-ready by
              design.
            </p>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-5 justify-center items-center">
          {vendors.map((vendor) => (
            <div className="card bg-white rounded-xl items-center w-48 h-24 justify-center mx-auto">
              <img className="w-32" src={vendor.logo} alt={vendor.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureFrameworks;
