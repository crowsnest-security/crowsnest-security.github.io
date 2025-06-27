const FeatureTooling = ({ vendors }) => {
  return (
    // <section className="dark:bg-crow-dark">
    //   <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    //       {vendors.map((vendor) => (
    //         <div className="card rounded-xl gap-5 w-48 h-24 justify-around items-center mx-auto">
    //           <img className="w-32" src={vendor.logo} alt={vendor.name} />
    //         </div>
    //       ))}
    //     </div>
    //     <div className="mt-4 md:mt-0">
    //       <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
    //         Connect to Everything That Matters
    //       </h2>
    //       <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
    //         <p>
    //           CrowsNest plugs into hundreds of security tools across your stack
    //           — cloud, CI/CD, identity, endpoints, and more — pulling real-time
    //           signals into one unified view. No silos, no stale data. Just
    //           always-on visibility that reflects your true compliance posture.
    //         </p>

    //         <p>
    //           Go beyond surface-level vendor dashboards. CrowsNest delivers
    //           deep, actionable insights with business-contextualised risk
    //           visibility, enabling the right teams to remediate efficiently and
    //           with clarity. Multicloud support isn’t a premium — it’s built in
    //           from day one.
    //         </p>
    //       </p>
    //     </div>
    //   </div>
    // </section>
    <section className="bg-white dark:bg-gray-900">
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="grid grid-cols-2 gap-4 mt-8">
              <img class="w-full rounded-lg" src="img/complex.jpeg" alt="complex" />
              <img class="mt-4 w-full lg:mt-10 rounded-lg" src="img/unified.jpeg" alt="unified" />
          </div>
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Connect to Everything That Matters</h2>
              <p class="mb-4">CrowsNest unifies your security data by plugging into hundreds of tools across your entire ecosystem, 
                from cloud to CI/CD and endpoints. This eliminates silos and stale data, providing always-on, real-time visibility into your true compliance posture. 
                <br/>
                <br/>Beyond basic or surface-level vendor dashboards, CrowsNest delivers deep, unified, actionable insights that are contextualized for your business, 
                enabling efficient and clear remediation by the right teams. 
                Its ecosystem-agnostic and multi-cloud support isn't a premuim - it's built in from day one.</p>
          </div>
          
      </div>
    </section>
    
  );
};

export default FeatureTooling;
