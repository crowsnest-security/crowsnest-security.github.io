import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Risk from "../../components/Risk";

export default function RiskPage() {
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
        <Risk />
      </main>
    </Layout>
  );
}
