import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://social-reset.netlify.app"),
  title: {
    default: "Social Reset – Stop overthinking. Start taking action.",
    template: "%s | Social Reset",
  },
  description:
    "Online community and coaching for men who want to build social confidence, get in better shape, and start taking action in real life.",
  applicationName: "Social Reset",
  keywords: [
    "Social Reset",
    "social confidence coaching",
    "men's coaching",
    "online coaching program",
    "accountability community",
    "fitness and confidence",
    "personal development for men",
    "Discord community",
    "social skills training",
    "självförtroende",
    "personlig utveckling",
    "social träning",
  ],
  authors: [{ name: "Social Reset" }],
  creator: "Social Reset",
  publisher: "Social Reset",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Social Reset – Stop overthinking. Start taking action.",
    description:
      "A premium online community and coaching program for men who want social confidence, fitness, accountability, and real-world action.",
    url: "/",
    siteName: "Social Reset",
    images: [
      {
        url: "/social-reset-hero.png",
        width: 1774,
        height: 887,
        alt: "Social Reset coaching and community landing page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Reset – Stop overthinking. Start taking action.",
    description:
      "Build social confidence, fitness, accountability, and real-world momentum with Social Reset.",
    images: ["/social-reset-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "coaching",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
