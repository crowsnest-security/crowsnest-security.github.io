import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import ContactForm from "../../components/ContactForm";

export default function Contact() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Meta description"
    >
      <header>
        <div className="max-w-4xl mx-auto px-4 text-center p-10">
          <h2 className="mx-auto text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Try it out
          </h2>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 text-justify mb-16 ">
        <ContactForm />
      </main>
    </Layout>
  );
}
