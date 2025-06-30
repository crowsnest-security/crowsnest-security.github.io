import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";


export default function Products() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Meta description"
    >
      <header>
        <div className=" mx-auto px-4 text-center p-5"></div>
      </header>

      <main>
    
      </main>
    </Layout>
  );
}
