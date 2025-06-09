import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import FeatureCard from "../../components/FeatureCard";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  const features = [
    {
      icon: "",
      name: "Control Translation",
      description:
        "Map evidence and signals from your tools to frameworks like NIST, ISO 27001, CIS, and SOC 2—automatically. Eliminate manual spreadsheets and ensure coverage across requirements.",
    },
    {
      icon: "",
      name: "Automated Compliance",
      description:
        "A centralized, always-updated view of your compliance posture across teams, tools, and products. Know where you stand in real-time—with no refresh button.",
    },
    {
      icon: "",
      name: "Crow Data Extractors",
      description:
        "Assign responsibilities, tag reviewers, and track progress. Bring engineering, GRC, and leadership into one shared space—without breaking silos.",
    },
    {
      icon: "",
      name: "Audit Ready",
      description:
        "  Continuously collect and store control evidence from integrated tools, creating an audit-ready trail without needing to chase stakeholders.",
    },
    {
      icon: "",
      name: "Risk & Gap Analysis",
      description:
        "Highlight control gaps and risk exposures automatically. Get prioritized recommendations to reduce risk and accelerate remediation.",
    },
    {
      icon: "",
      name: "Custom Frameworks",
      description:
        "Visualize how controls align across multiple frameworks. Use one control implementation to satisfy many, and benchmark against industry best practices.",
    },
  ];

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Meta description"
    >
      <header>
        <div className="max-w-4xl mx-auto px-4 text-center p-10">
          <h2 className="mx-auto text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Product Features
          </h2>
        </div>
      </header>

      <main className="text-justify mb-16 grid md:grid-cols-3 gap-4">
        {features.map((feature) => (
          <FeatureCard
            icon={feature.icon}
            name={feature.name}
            description={feature.description}
          />
        ))}
      </main>
    </Layout>
  );
}
