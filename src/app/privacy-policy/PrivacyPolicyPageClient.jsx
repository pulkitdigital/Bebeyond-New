"use client";

import React from "react";
import Header2 from "@/app/components/header2";
import Link from "next/link";

const sections = [
  {
    title: "Introduction",
    content: (
      <p>
        This Privacy Policy describes how BeBeyond Digital Solutions
        (&quot;BeBeyond&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
        collects, uses, stores, and discloses your personal information when you
        visit our website, use our services, submit inquiries, or otherwise
        interact with us through{" "}
        <Link
          href="https://bebeyond.digital/"
          className="text-color_blue hover:underline"
          target="blank"
        >
          https://bebeyond.digital/
        </Link>{" "}
        (the &quot;Website&quot;) and related services (collectively, the
        &quot;Services&quot;).
        <br />
        <br />
        For the purposes of this Privacy Policy, &quot;you&quot; and
        &quot;your&quot; refer to website visitors, prospective clients, clients,
        business partners, and other individuals whose information we collect.
        <br />
        <br />
        By accessing or using our Services, you acknowledge that you have read
        and understood this Privacy Policy.
      </p>
    ),
  },
  {
    title: "Changes to This Privacy Policy",
    content: (
      <p>
        We may update this Privacy Policy periodically to reflect changes in our
        business practices, legal requirements, or operational needs. Any updates
        will be posted on this page with a revised &quot;Last Updated&quot; date.
        <br />
        <br />
        Your continued use of our Services following any changes constitutes
        acceptance of the updated Privacy Policy.
      </p>
    ),
  },
  {
    title: "How We Collect and Use Your Personal Information",
    content: (
      <>
        <p>
          To provide our Services, we collect personal information from various
          sources depending on how you interact with us.
        </p>
        <p className="mt-3">We use this information to:</p>
        <ul className="list-disc pl-6 flex flex-col gap-2 mt-3">
          <li>Respond to inquiries and requests</li>
          <li>Provide digital marketing and technology services</li>
          <li>Improve our website and services</li>
          <li>Communicate with prospective and existing clients</li>
          <li>Analyze website performance</li>
          <li>Maintain business records</li>
          <li>Comply with applicable legal obligations</li>
          <li>
            Protect our business against fraud, abuse, or unauthorized activity
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "What Personal Information We Collect",
    content: (
      <>
        <p>
          The information we collect depends on how you interact with our Website
          and Services.
        </p>
        <p className="mt-4 font-semibold text-color_navy">
          Information You Provide Directly
        </p>
        <p className="mt-2">
          When you contact us or submit a form through our Website, we may
          collect:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2 mt-3">
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>WhatsApp number</li>
          <li>Company name</li>
          <li>Message or inquiry details</li>
          <li>Any additional information you voluntarily provide</li>
        </ul>
        <p className="mt-3">
          You may choose not to provide certain information; however, this may
          limit our ability to respond to your inquiry or provide requested
          services.
        </p>
        <p className="mt-4 font-semibold text-color_navy">
          Information Collected Automatically
        </p>
        <p className="mt-2">
          When you visit our Website, we may automatically collect certain
          technical information, including:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2 mt-3">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device information</li>
          <li>Operating system</li>
          <li>Pages viewed</li>
          <li>Date and time of visits</li>
          <li>Referring website information</li>
          <li>Website interaction data</li>
        </ul>
        <p className="mt-3">
          This information helps us understand how visitors use our Website and
          allows us to improve user experience.
        </p>
      </>
    ),
  },
  {
    title: "Cookies and Tracking Technologies",
    content: (
      <>
        <p>
          Our Website may use cookies, pixels, analytics tools, and similar
          technologies to:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2 mt-3">
          <li>Improve website functionality</li>
          <li>Understand visitor behavior</li>
          <li>Measure marketing performance</li>
          <li>Analyze traffic patterns</li>
          <li>Enhance user experience</li>
        </ul>
        <p className="mt-3">
          The technologies we currently use may include Google Analytics and Meta
          Pixel. Most browsers allow users to manage or disable cookies through
          browser settings. Disabling cookies may affect certain website
          features.
        </p>
      </>
    ),
  },
  {
    title: "Information Obtained from Third Parties",
    content: (
      <>
        <p>
          We may receive information from third-party platforms and service
          providers, including:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2 mt-3">
          <li>Meta (Facebook and Instagram)</li>
          <li>Google</li>
          <li>Advertising and analytics partners</li>
          <li>Lead generation platforms</li>
          <li>Business communication platforms</li>
        </ul>
        <p className="mt-3">
          Any information obtained from third parties will be handled in
          accordance with this Privacy Policy.
        </p>
      </>
    ),
  },
  {
    title: "How We Use Your Personal Information",
    content: (
      <>
        <p className="font-semibold text-color_navy">Providing Services</p>
        <ul className="list-disc pl-6 flex flex-col gap-2 mt-3">
          <li>Respond to inquiries</li>
          <li>Deliver digital marketing services</li>
          <li>Deliver website and application development services</li>
          <li>Manage projects and client relationships</li>
          <li>Provide support and consultation</li>
        </ul>
        <p className="mt-4 font-semibold text-color_navy">
          Marketing and Communication
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2 mt-3">
          <li>Respond to business inquiries</li>
          <li>Send updates related to requested services</li>
          <li>Share information about our services</li>
          <li>Follow up regarding proposals or consultations</li>
        </ul>
        <p className="mt-3">
          You may opt out of marketing communications at any time.
        </p>
        <p className="mt-4 font-semibold text-color_navy">
          Analytics and Website Improvement
        </p>
        <p className="mt-2">
          We use analytics tools to understand how users interact with our
          Website and improve performance, usability, and content.
        </p>
        <p className="mt-4 font-semibold text-color_navy">
          Security and Fraud Prevention
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2 mt-3">
          <li>Monitor website security</li>
          <li>Prevent unauthorized access</li>
          <li>Detect suspicious activity</li>
          <li>Protect our business and users</li>
        </ul>
      </>
    ),
  },
  {
    title: "How We Share Personal Information",
    content: (
      <>
        <p>
          <strong>We do not sell personal information.</strong>
        </p>
        <p className="mt-4 font-semibold text-color_navy">Service Providers</p>
        <p className="mt-2">
          Third-party vendors who assist us in operating our business, including:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2 mt-3">
          <li>Website hosting providers</li>
          <li>Analytics providers</li>
          <li>Communication platforms</li>
          <li>Cloud storage providers</li>
          <li>Marketing technology providers</li>
        </ul>
        <p className="mt-4 font-semibold text-color_navy">Legal Requirements</p>
        <p className="mt-2">
          We may disclose information when required by applicable law, court
          orders, government authorities, or legal processes.
        </p>
        <p className="mt-4 font-semibold text-color_navy">Business Transfers</p>
        <p className="mt-2">
          In the event of a merger, acquisition, restructuring, or sale of
          assets, personal information may be transferred as part of that
          transaction.
        </p>
      </>
    ),
  },
  {
    title: "International Data Transfers",
    content: (
      <p>
        Because we serve clients internationally, your information may be
        processed, stored, or transferred outside your country of residence. By
        using our Services, you consent to such transfers where permitted by
        applicable law.
      </p>
    ),
  },
  {
    title: "Data Retention",
    content: (
      <>
        <p>We retain personal information only for as long as necessary to:</p>
        <ul className="list-disc pl-6 flex flex-col gap-2 mt-3">
          <li>Complete the purpose for which it was collected</li>
          <li>Deliver requested services</li>
          <li>Maintain essential business records</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p className="mt-3">
          Client-related information is generally retained only as long as
          necessary for project completion and operational requirements, after
          which it may be securely deleted or anonymized.
        </p>
      </>
    ),
  },
  {
    title: "Data Security",
    content: (
      <p>
        We implement reasonable administrative, technical, and organizational
        safeguards designed to protect personal information from unauthorized
        access, disclosure, alteration, or destruction. However, no method of
        transmission or storage can be guaranteed to be completely secure. Users
        should exercise caution when transmitting sensitive information online.
      </p>
    ),
  },
  {
    title: "Third-Party Websites",
    content: (
      <p>
        Our Website may contain links to third-party websites, platforms, or
        services. We are not responsible for the privacy practices, content, or
        security of third-party websites. Users should review the privacy
        policies of any third-party services they visit.
      </p>
    ),
  },
  {
    title: "Children's Privacy",
    content: (
      <p>
        Our Services are not intended for individuals under the age of 18. We do
        not knowingly collect personal information from children. If we become
        aware that personal information from a child has been collected, we will
        take appropriate steps to remove it.
      </p>
    ),
  },
  {
    title: "Your Privacy Rights",
    content: (
      <>
        <p>Depending on applicable laws, you may have the right to:</p>
        <ul className="list-disc pl-6 flex flex-col gap-2 mt-3">
          <li>Request access to your personal information</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Object to certain processing activities</li>
          <li>Withdraw consent where processing is based on consent</li>
          <li>Request information regarding how your data is used</li>
        </ul>
        <p className="mt-3">
          To exercise any of these rights, please contact us using the details
          provided below.
        </p>
      </>
    ),
  },
  {
    title: "Communication Preferences",
    content: (
      <>
        <p>
          If you receive marketing communications from us, you may opt out at any
          time by:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2 mt-3">
          <li>Contacting us directly</li>
          <li>
            Following unsubscribe instructions included in communications where
            applicable
          </li>
        </ul>
        <p className="mt-3">
          Please note that service-related communications may still be sent when
          necessary.
        </p>
      </>
    ),
  },
  {
    title: "Complaints",
    content: (
      <p>
        If you have concerns regarding how we handle your personal information,
        please contact us first so we can attempt to resolve the matter. Where
        applicable, you may also have the right to lodge a complaint with the
        appropriate regulatory authority.
      </p>
    ),
  },
  {
    title: "Contact Us",
    content: (
      <>
        <p>
          If you have questions regarding this Privacy Policy or wish to exercise
          your privacy rights, please contact us:
        </p>
        <ul className="flex flex-col gap-2 mt-3">
          <li>
            <strong>Be Beyond Digital Solutions</strong>
          </li>
          <li>
            Chamber 6, 4th Floor, Sangam Place (Opposite K K Sales), Civil
            Lines, Prayagraj, Uttar Pradesh - 211001
          </li>
          <li>
            Website:{" "}
            <Link
              href="https://bebeyond.digital/"
              className="text-color_blue hover:underline"
              target="blank"
            >
              https://bebeyond.digital/
            </Link>
          </li>
          <li>
            Email:{" "}
            <Link
              href="mailto:info@bebeyond.digital"
              className="text-color_blue hover:underline"
            >
              info@bebeyond.digital
            </Link>
            {" / "}
            <Link
              href="mailto:pulkitdigitalsolutions@gmail.com"
              className="text-color_blue hover:underline"
            >
              pulkitdigitalsolutions@gmail.com
            </Link>
          </li>
          <li>
            Phone:{" "}
            <Link
              href="tel:+919918671867"
              className="text-color_blue hover:underline"
            >
              +91 99186 71867
            </Link>
            {" / "}
            <Link
              href="tel:+917388151797"
              className="text-color_blue hover:underline"
            >
              +91 73881 51797
            </Link>
          </li>
          <li>Jurisdiction: India</li>
        </ul>
      </>
    ),
  },
  {
    title: "Consent",
    content: (
      <p>
        By using our Website and Services, you consent to the collection, use,
        and disclosure of information as described in this Privacy Policy.
      </p>
    ),
  },
];

function PrivacyPolicyPageClient() {
  return (
    <>
      <Header2 h_1="Privacy Policy" />
      <main className="w-full flex items-center justify-center bg-color_creame">
        <div className="max-w-1600px w-full flex items-center justify-center">
          <div className="w-88% py-16 flex flex-col gap-10 792px:py-12 446px:py-8">
            <p className="text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3">
              <strong>Last Updated:</strong> June 8, 2026
            </p>

            {sections.map((section) => (
              <section key={section.title} className="flex flex-col gap-3">
                <h2 className="bricolage_grotesque_head text-h4 font-h4 text-color_navy 1004px:text-h5new 792px:text-h5">
                  {section.title}
                </h2>
                <div className="text-p1 font-p1 text-color_gray public_sans_body text-justify 1004px:text-p2 792px:text-p3 flex flex-col gap-3">
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default PrivacyPolicyPageClient;