// import { Bricolage_Grotesque, Public_Sans } from "next/font/google";
// import "./globals.css";
// import Navbar from "./components/navbar";
// import Footer from "./components/footer";
// import { AppWrapper } from "@/context";
// import Script from "next/script";
// import Link from "next/link";
// import { FaWhatsapp } from "react-icons/fa6";

// const bricolage_grotesque_init = Bricolage_Grotesque({
//   subsets: ["latin"],
//   variable: "--font-bricolage-grotesque",
//   display: "swap",
// });
// const public_sans_init = Public_Sans({
//   subsets: ["latin"],
//   variable: "--font-public-sans",
//   display: "swap",
// });

// // ✅ Next.js automatically injects these into <head>
// export const metadata = {
//   title: "Digital Marketing Agency in Prayagraj | Social Media & SEO Services – BeBeyond Digital Solutions",
//   description:
//     "At BeBeyond Digital Solutions, we empower businesses with innovative strategies and 360-degree solutions, minimizing efforts while maximizing results, driving online and offline growth in today's evolving digital landscape.",
//   keywords:
//     "digital marketing, social media marketing, SEO, web development, app development, branding, seo, agency",
//   metadataBase: new URL("https://bebeyond.digital"),
//   authors: [{ name: "Be Beyond Digital Solutions" }],
//   publisher: "Be Beyond Digital Solutions",
//   robots: "index, follow",
//   icons: { icon: "/favicon.ico" },
//   openGraph: {
//     type: "website",
//     url: "https://bebeyond.digital",
//     title: "Digital Marketing Agency in Prayagraj | Social Media & SEO Services – BeBeyond Digital Solutions",
//     description:
//       "At BeBeyond Digital Solutions, we empower businesses with innovative strategies and 360-degree solutions, minimizing efforts while maximizing results, driving online and offline growth in today's evolving digital landscape.",
//     images: [{ url: "/be_beyond_logo.png" }],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Digital Marketing Agency in Prayagraj | Social Media & SEO Services – BeBeyond Digital Solutions",
//     description:
//       "At BeBeyond Digital Solutions, we empower businesses with innovative strategies and 360-degree solutions, minimizing efforts while maximizing results, driving online and offline growth in today's evolving digital landscape.",
//     images: ["/be_beyond_logo.png"],
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* ✅ Structured Data (JSON-LD) — sirf yahi head mein manually daalo */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "Organization",
//               name: "Be Beyond Digital Solutions",
//               url: "https://bebeyond.digital",
//               logo: "/be_beyond_logo.png",
//               sameAs: [
//                 "https://www.facebook.com/profile.php",
//                 "https://www.linkedin.com/company/be-beyond-digital-solutions",
//                 "https://www.instagram.com/bebeyonddigitalsolutions/",
//                 "https://wa.me/919918671867",
//               ],
//             }),
//           }}


          

//         />
//       </head>
//       <body
//         className={`${bricolage_grotesque_init.variable} ${public_sans_init.variable} mt-[88px] sm:mt-[78px] xs:mt-[68px]`}
//       >
//         <AppWrapper>
//           <Navbar />
//           {children}
//           <Footer />

//           {/* ✅ WhatsApp Floating Button */}
//           <Link
//             href="https://wa.me/919918671867?text=Hi%2C%20I%20want%20to%20know%20more%20about%20BeBeyond%20Digital%20Solutions."
//             target="_blank"
//             rel="noopener noreferrer"
//             title="Chat on WhatsApp"
//             className="fixed bottom-6 left-6 z-[999] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
//           >
//             <FaWhatsapp size={30} color="white" />
//           </Link>

//           {/* ✅ Botpress Chatbot */}
//           <Script
//             src="https://cdn.botpress.cloud/webchat/v3.6/inject.js"
//             strategy="afterInteractive"
//           />
//           <Script
//             src="https://files.bpcontent.cloud/2026/04/01/06/20260401064223-LAPAK1JG.js"
//             strategy="afterInteractive"
//           />
//         </AppWrapper>
//       </body>
//     </html>
//   );
// }











import { Bricolage_Grotesque, Public_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { AppWrapper } from "@/context";
import Script from "next/script";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

const bricolage_grotesque_init = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
  display: "swap",
});
const public_sans_init = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata = {
  title:
    "Digital Marketing Agency in Prayagraj | Social Media & SEO Services – BeBeyond Digital Solutions",
  description:
    "At BeBeyond Digital Solutions, we empower businesses with innovative strategies and 360-degree solutions, minimizing efforts while maximizing results, driving online and offline growth in today's evolving digital landscape.",
  keywords:
    "digital marketing, social media marketing, SEO, web development, app development, branding, seo, agency",
  metadataBase: new URL("https://bebeyond.digital"),
  authors: [{ name: "Be Beyond Digital Solutions" }],
  publisher: "Be Beyond Digital Solutions",
  robots: "index, follow",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    url: "https://bebeyond.digital",
    title:
      "Digital Marketing Agency in Prayagraj | Social Media & SEO Services – BeBeyond Digital Solutions",
    description:
      "At BeBeyond Digital Solutions, we empower businesses with innovative strategies and 360-degree solutions, minimizing efforts while maximizing results, driving online and offline growth in today's evolving digital landscape.",
    images: [{ url: "/be_beyond_logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Digital Marketing Agency in Prayagraj | Social Media & SEO Services – BeBeyond Digital Solutions",
    description:
      "At BeBeyond Digital Solutions, we empower businesses with innovative strategies and 360-degree solutions, minimizing efforts while maximizing results, driving online and offline growth in today's evolving digital landscape.",
    images: ["/be_beyond_logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Be Beyond Digital Solutions",
              url: "https://bebeyond.digital",
              logo: "/be_beyond_logo.png",
              sameAs: [
                "https://www.facebook.com/profile.php",
                "https://www.linkedin.com/company/be-beyond-digital-solutions",
                "https://www.instagram.com/bebeyonddigitalsolutions/",
                "https://wa.me/919918671867",
              ],
            }),
          }}
        />

        {/* ✅ Meta Pixel noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=967373885910467&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>

      <body
        className={`${bricolage_grotesque_init.variable} ${public_sans_init.variable} mt-[88px] sm:mt-[78px] xs:mt-[68px]`}
      >
        <AppWrapper>
          <Navbar />
          {children}
          <Footer />

          {/* ✅ WhatsApp Floating Button */}
          <Link
            href="https://wa.me/919918671867?text=Hi%2C%20I%20want%20to%20know%20more%20about%20BeBeyond%20Digital%20Solutions."
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            className="fixed bottom-6 left-6 z-[999] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <FaWhatsapp size={30} color="white" />
          </Link>

          {/* ✅ Meta Pixel Script */}
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '967373885910467');
                fbq('track', 'PageView');
              `,
            }}
          />

          {/* ✅ Botpress Chatbot */}
          <Script
            src="https://cdn.botpress.cloud/webchat/v3.6/inject.js"
            strategy="afterInteractive"
          />
          <Script
            src="https://files.bpcontent.cloud/2026/04/01/06/20260401064223-LAPAK1JG.js"
            strategy="afterInteractive"
          />
        </AppWrapper>
      </body>
    </html>
  );
}