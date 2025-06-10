"use client";
import styles from "./styles.module.css";

export default function TermsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Wellness Planner Terms and Conditions</h1>
      <div className={styles.content}>
        <p><strong>Last Updated: 05/30/2025 </strong></p>

        <h2>1. General</h2>
        <p>Welcome to Wellness Planner, a personalized wellness management platform (the "Service"). These Terms and Conditions ("Terms") govern your use of our Service, including our website and mobile applications.</p>

        <h2>2. Agreement to Terms</h2>
        <p>By using the Service, you agree to be bound by these Terms. If you don't agree, do not use the Service. We may modify these Terms at any time, and your continued use constitutes acceptance of the updated Terms.</p>

        <h2>3. Eligibility</h2>
        <p>You must be at least 18 years old to use the Service. By using the Service, you represent that you meet this requirement and have legal capacity to enter into these Terms. Users under 18 require parental consent.</p>

        <h2>4. Your Account</h2>
        <p>To access certain features, you must create an account using a valid email or third-party authentication. You are responsible for:</p>
        <ul>
          <li>Maintaining account confidentiality</li>
          <li>All activities under your account</li>
          <li>Promptly notifying us at support@wellnessplanner.com of any unauthorized use</li>
        </ul>
        <p>We may suspend or terminate accounts that violate these Terms.</p>

        <h2>5. Using the Service</h2>
        <p>The Service is for personal wellness planning. You agree to:</p>
        <ul>
          <li>Use the Service lawfully</li>
          <li>Not engage in illegal or unauthorized activities</li>
          <li>Not attempt unauthorized access to our systems</li>
          <li>Not use the Service to harm others</li>
          <li>Not use the Service to violate any applicable laws or regulations</li>
          <li>Not impersonate others</li>
        </ul>
        <p>The Service does not provide medical advice. Consult healthcare professionals for medical decisions.</p>

        <h2>6. Privacy</h2>
        <p>Your privacy is important to us. Our <a href="/privacy">Privacy Policy</a> explains how we collect, use, and protect your data, including:</p>
        <ul>
          <li>Types of data collected (email, wellness information)</li>
          <li>How we use your data</li>
          <li>Data storage in our database</li>
          <li>Your privacy rights</li>
        </ul>
        <p>We don't sell your data to third parties.</p>

        <h2>7. Content and Intellectual Property</h2>
        <p>All Service content, including logos, dashboard designs, and features, are our property or our licensors' and protected by law. You may not:</p>
        <ul>
          <li>Reproduce Service content</li>
          <li>Create derivative works</li>
          <li>Distribute our content without permission</li>
        </ul>

        <h2>8. Termination</h2>
        <p>We may terminate or suspend your access to the Service:</p>
        <ul>
          <li>For violations of these Terms</li>
          <li>Due to inactivity</li>
          <li>For security reasons</li>
        </ul>
        <p>Termination may result in data deletion per our Privacy Policy.</p>

        <h2>9. Disclaimer and Liability</h2>
        <p>The Service is provided "as is" without warranties of any kind. To the extent permitted by law:</p>
        <ul>
          <li>We disclaim all implied warranties</li>
          <li>We're not liable for indirect or consequential damages</li>
        </ul>

        <h2>10. Governing Law</h2>
        <p>These Terms are governed by the laws governing the european Union, without regard to its conflict of laws provisions. You and we both agree to submit to the exclusive jurisdiction of the courts located in Paris. Disputes will first attempt negotiation, then be submitted to the Paris courts if unresolved.</p>

        <h2>11. Contact Information</h2>
        <p>For questions about these Terms:</p>
        <ul>
          <li>Email: support@wellnessplanner.com</li>
          <li>Support Page: wellnessplanner.fr/support</li>
        </ul>
        <p>We aim to respond within 48 hours.</p>

        <h2>12. Final Provisions</h2>
        <p>By continuing to use the Service, you agree to these Terms in their entirety. Thank you for choosing Wellness Planner!</p>
      </div>
    </div>
  );
}