import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function Privacy() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Meta description"
    >
      <header>
        <div className="max-w-4xl mx-auto px-4 text-center p-10">
          <h2 className="mx-auto text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Privacy Policy
          </h2>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 text-justify mb-16 ">
    <h1>Privacy Policy</h1>
    <div class="effective-date">
        <p>Effective Date: 23/02/2026</p>
        <p>Last Updated: 23/02/2026</p>
    </div>

    <h2>1. Introduction</h2>
    <p>CrowsNest Systems, Inc. (“CrowsNest,” “we,” “our,” or “us”) is a cybersecurity software company providing governance, risk, and compliance automation platforms for enterprise customers.</p>
    <p>We are committed to protecting personal data and complying with:</p>
    <ul>
        <li>The EU General Data Protection Regulation (EU) 2016/679 (“GDPR”)</li>
        <li>The UK GDPR</li>
        <li>The US-EU Data Privacy Framework (DPF)</li>
        <li>The Swiss-US Data Privacy Framework</li>
        <li>Applicable U.S. federal and state privacy laws </li>
    </ul>
    <p>This Privacy Policy explains how we collect, use, disclose, and safeguard personal data when you visit our website, engage with us as a customer, use our products, or interact with us professionally.</p>

    <h2>2. Roles and Scope of Processing</h2>
    <p>CrowsNest operates in two distinct roles:</p>
    <h3>2.1 Controller</h3>
    <p>We act as a data controller when we process personal data for website visitors, marketing, events, business contacts, and recruitment.</p>
    <h3>2.2 Processor</h3>
    <p>We act as a data processor when we process personal data on behalf of our enterprise customers in connection with our cybersecurity automation platform. In those cases, we process data solely pursuant to a Data Processing Agreement (DPA).</p>

    <h2>3. Categories of Personal Data We Collect</h2>
    <h3>3.1 Website & Marketing Data (Controller)</h3>
    <ul>
        <li>Name, business email, company name, job title, and phone number </li>
        <li>IP address, browser/device information, and cookie identifiers </li>
    </ul>
    <h3>3.2 Customer & Account Data (Controller)</h3>
    <ul>
        <li>Account administrator details, billing information, and business communications </li>
    </ul>
    <h3>3.3 Product Data (Processor)</h3>
    <p>Depending on configuration, we may process usernames, corporate emails, access logs, and security telemetry metadata. Our platform is not designed to collect sensitive personal, biometric, or health data.</p>

    <h2>4. Legal Bases for Processing (GDPR)</h2>
    <p>Where GDPR applies, we rely on:</p>
    <ul>
        <li>Article 6(1)(b) – Performance of a contract</li>
        <li>Article 6(1)(f) – Legitimate interests (e.g., improving services, security, preventing fraud)</li>
        <li>Article 6(1)(a) – Consent</li>
        <li>Article 6(1)(c) – Legal obligation </li>
    </ul>

    <h2>5. Data Privacy Framework (DPF) Participation</h2>
    <p>CrowsNest Systems, Inc. complies with the EU-U.S. DPF and the Swiss-U.S. DPF. We are subject to the investigatory and enforcement powers of the U.S. Federal Trade Commission (FTC). For more information, visit <a href="https://www.dataprivacyframework.gov/">https://www.dataprivacyframework.gov/</a>.</p>

    <h2>6. International Data Transfers</h2>
    <p>CrowsNest is headquartered in the United States. We ensure lawful transfer mechanisms through DPF certification, Standard Contractual Clauses (SCCs), and DPAs.</p>

    <h2>7. Data Sharing & Onward Transfers</h2>
    <p>We may share data with providers for cloud infrastructure, hosting, security, and analytics. All subprocessors are bound by written agreements. <strong>We do not sell personal data</strong>.</p>

    <h2>8. Data Security</h2>
    <p>We implement technical measures including TLS 1.2+ / 1.3 encryption, access controls (RBAC), audit logging, and regular security testing.</p>

    <h2>9. Data Retention</h2>
    <p>We retain personal data only as long as necessary for contractual, legal, or legitimate business purposes.</p>

    <h2>10. Individual Rights (GDPR)</h2>
    <p>Users in the EU/EEA have rights to access, rectify, erase, and object to processing. Requests can be submitted to <strong>privacy@crowsnestsecurity.com</strong>.</p>

    <h2>11. Disclosures Required by Law</h2>
    <p>We may be required to disclose personal information in response to lawful requests by public authorities for national security or law enforcement.</p>

    <h2>12. Dispute Resolution (DPF)</h2>
    <p>Complaints should first be sent to <strong>privacy@crowsnestsecurity.com</strong>. Unresolved complaints may be referred to <strong>JAMS</strong> (<a href="https://www.jamsadr.com/DPF-Dispute-Resolution">https://www.jamsadr.com/DPF-Dispute-Resolution</a>) at no cost to the individual.</p>

    <h2>13. Choice</h2>
    <p>Individuals can opt out of data disclosure to non-agent third parties or use for materially different purposes by contacting us.</p>

    <h2>14. Cookies</h2>
    <p>We use cookies for essential functionality, security, and analytics. Users can manage preferences via browser settings.</p>

    <h2>15. Children’s Data</h2>
    <p>Our services are not directed to individuals under 16.</p>

    <h2>16. Changes to This Policy</h2>
    <p>Material changes will be posted on our website and communicated to customers as required.</p>

    <h2>17. Contact Information</h2>
    <div class="contact-info">
        <p><strong>CrowsNest Systems, Inc.</strong></p>
        131 Continental Dr, Suite 305<br />
        Newark, DE, 19713 US<br/>
        <p>
        Email: <a href="mailto:privacy@crowsnestsecurity.com">privacy@crowsnestsecurity.com</a><br />
        Website: <a href="https://www.crowsnestsecurity.com">https://www.crowsnestsecurity.com</a></p>
        
        <p><strong>EU Representative:</strong><br/>
        Robert S. Erenberg-Andersen<br/>
        <a href="mailto:robert@crowsnestsecurity.com">robert@crowsnestsecurity.com</a></p>
    </div>
      </main>
    </Layout>
  );
}
