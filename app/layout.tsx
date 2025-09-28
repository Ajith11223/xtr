import "@/styles/globals.css";
import "@/styles/design.css";
import "@/styles/background.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";
import MainLayout from "@/components/MainLayout/MainLayout";
import Script from "next/script";

// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig?.name}`
//   },
//   description: siteConfig?.description,
//   keywords: [
//     "dental practice management",
//     "Cloud-Based Dental Software",
//     "dental clinic suite",
//     "dental clinic automation",
//     "doctor appointment system",
//     "dental clinic ERP",
//     "dental software for clinic",
//     "software for dental clinic",
//     "mobile app for dental clinic",
//     "dental clinic app",
//     "patient management system",
//     "appointment scheduling",
//     "multi-clinic management",
//     "billing software for dentists",
//     "cloud-based dental software",
//     "dentist productivity tools",
//     "dental charting",
//     "treatment planning system"
//   ],
//   icons: {
//     icon: "/favicon.ico"
//   },
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://healthematics-uploads.s3.me-south-1.amazonaws.com/hospital-listing-images/26c53edf80e647d35d0b4ca1a3d7567a56919421b808f92c6a0555461780eadeDentobees-Thumbnail.jpg",
//     title: "Dentobees Innovations LLP|Dental Clinic Management ERP Software, Kerala, India",
//     description: "Dentobees is India’s trusted dental ERP software, smooth clinic operations with powerful tools for dentists, hospitals, doctors and dental professionals.",
//     siteName: siteConfig.name,
//     images: [
//       {
//         url: siteConfig.ogImage,
//         width: 1200,
//         height: 630,
//         alt: `${siteConfig.name} Open Graph Image`
//       }
//     ]
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Dental Clinic Management ERP Software, Kerala, India|Dentobees",
//     description: "Simplify patient care and clinic management with Dentobees ERP. Try it today!",
//     images: ["https://www.dentobees.com/assets/twitter-card.jpg"]
//   },
//   alternates: {
//     canonical: "https://www.dentobees.com/"
//   }
// };

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "white" }
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        {/* <meta property="og:image" content="/Dentobees-Thumbnail-two.avif" /> */}

        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z5NL24185K"
        ></script> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-Z5NL24185K');
              `
          }}
        ></script> */}
        {/* <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
                (function(c,l,a,r,i,t,y){
                  c[a] = c[a] || function(){
                    (c[a].q = c[a].q || []).push(arguments)
                  };
                  t = l.createElement(r);
                  t.async = 1;
                  t.src = "https://www.clarity.ms/tag/" + i;
                  y = l.getElementsByTagName(r)[0];
                  y.parentNode.insertBefore(t, y);
                })(window, document, "clarity", "script", "q849uog25b");
              `
          }}
        /> */}
        {/* <Script
          id="facebook-pixel"
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
            fbq('init', '9435684086529881'); 
            fbq('track', 'PageView');
          `
          }}
        /> */}
        {/* https://wa.me/918086014345?text=I%20would%20like%20to%20know%20more%20about%20Dentobees */}
      </head>
      <body className={clsx( "min-h-screen bg-white font-sans antialiased", fontSans.variable )} >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative">
            <MainLayout>{children}</MainLayout>
            <div className="absolute bottom-10 right-10 py-3 WhatsApp-Icon z-10">
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center justify-center bg-[#00D299] rounded-[50%] h-[60px] md:h-[65px] xl:h-[70px] w-[60px] md:w-[65px] xl:w-[70px] custom-shadow hover:scale-105 transform transition-all duration-300 cursor-pointer">
                  <IoLogoWhatsapp className="text-[40px] md:text-[45px] xl:text-[50px] text-white" />
                </div>
              </Link>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
