"use client";
import styles from "./styles.module.css";

export default function TermsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Terms and Conditions</h1>
      <div className={styles.content}>
        <p>
          Welcome to Wellness Planner, a personalized wellness management platform
          (hereinafter referred to as "the Service" or "we"). By accessing or using
          the Service, or our mobile applications, you agree to be bound by these
          Terms and Conditions ("Terms"). If you do not agree to these Terms,
          please refrain from using the Service.
        </p>
        <ol>
          <li>
            <strong>Acceptance of Terms</strong>
            <p>
              By using the Service, you acknowledge that you have read, understood,
              and agree to be bound by these Terms, as well as our Privacy Policy.
              These Terms apply to all users, including those accessing the Service
              via web browsers or mobile devices. We reserve the right to update
              these Terms at any time, and continued use after such changes
              constitutes acceptance of the updated Terms.
            </p>
          </li>
          <li>
            <strong>Eligibility</strong>
            <p>
              You must be at least 18 years old to use the Service. By using the
              Service, you represent that you meet this age requirement and have the
              legal capacity to enter into these Terms. If you are under 18, you
              must have parental or guardian consent to use the Service.
            </p>
          </li>
          <li>
            <strong>Account Registration and Security</strong>
            <p>
              To access certain features, you must create an account using a valid
              email address and password or through third-party authentication
              (e.g., Google OAuth). You are responsible for maintaining the
              confidentiality of your account credentials and for all activities
              that occur under your account. Notify us immediately at
              support@wellnessplanner.com if you suspect unauthorized use.
              We reserve the right to suspend or terminate accounts that violate
              these Terms.
            </p>
          </li>
          <li>
            <strong>Use of the Service</strong>
            <p>
              The Service is intended for personal wellness planning, including
              tracking goals, schedules, and insights. You agree to use the Service
              only for lawful purposes and in accordance with all applicable laws
              and regulations. You may not:
              <ul>
                <li>Use the Service for any illegal or unauthorized purpose;</li>
                <li>Attempt to gain unauthorized access to the Service or its systems;</li>
                <li>Distribute malware or harmful content through the Service;</li>
                <li>Impersonate another user or provide false information.</li>
              </ul>
              We are not liable for any health-related decisions made based on the
              Service; consult a healthcare professional for medical advice.
            </p>
          </li>
          <li>
            <strong>Data Collection and Privacy</strong>
            <p>
              We collect and process personal data (e.g., email, wellness data) as
              outlined in our Privacy Policy. By using the Service, you consent to
              such collection and processing, which may include storage in our
              MongoDB database. We use this data to provide and improve the Service,
              and we do not sell it to third parties. See our Privacy Policy for
              details on your rights and how to manage your data.
            </p>
          </li>
          <li>
            <strong>Intellectual Property</strong>
            <p>
              All content, logos, and features of the Service, including the
              design of the dashboard and forms, are owned by us or our licensors
              and protected by intellectual property laws. You may not reproduce,
              distribute, or create derivative works without our written consent.
            </p>
          </li>
          <li>
            <strong>Termination and Suspension</strong>
            <p>
              We reserve the right to suspend or terminate your account and access
              to the Service at our discretion, with or without notice, for reasons
              including but not limited to violation of these Terms, inactivity, or
              security concerns. Upon termination, your data may be deleted, subject
              to our data retention policies outlined in the Privacy Policy.
            </p>
          </li>
          <li>
            <strong>Disclaimer of Warranties and Limitation of Liability</strong>
            <p>
              The Service is provided "as is" without warranties of any kind,
              express or implied, including merchantability or fitness for a
              particular purpose. We are not responsible for any indirect, incidental,
              or consequential damages arising from your use of the Service, to the
              extent permitted by law.
            </p>
          </li>
          <li>
            <strong>Governing Law and Dispute Resolution</strong>
            <p>
              These Terms are governed by the laws of [insert jurisdiction, e.g.,
              France]. Any disputes arising from these Terms will be resolved
              through negotiation; if unresolved, they may be submitted to the
              exclusive jurisdiction of the courts in [insert city, e.g., Paris].
            </p>
          </li>
          <li>
            <strong>Contact Us</strong>
            <p>
              For questions about these Terms, please contact us at
              support@wellnessplanner.com or through our support page. We aim to
              respond within 48 hours.
            </p>
          </li>
        </ol>
        <p>
          By continuing to use the Service, you acknowledge that you have read,
          understood, and agree to these Terms and Conditions in their entirety.
          Thank you for choosing Wellness Planner to support your wellness journey!
        </p>
      </div>
    </div>
  );
}