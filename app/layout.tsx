import type { Metadata } from "next";
import "./globals.css";

const siteDescription =
  "Ali Magdy is a Computer Science student at Ain Shams University and a back-end developer specializing in Node.js, TypeScript, and databases including PostgreSQL, MySQL, and MongoDB. He works as an AI Trainer at Outlier and builds real-world projects such as a real-time chat app and a hotel database system.";

export const metadata: Metadata = {
  title: "Ali Magdy | Software Engineer",
  description: siteDescription,
  generator: "Next.js",
  applicationName: "Ali Magdy Portfolio",
  authors: [{ name: "Ali Magdy", url: "https://alimagdy.vercel.app" }],
  creator: "Ali Magdy",

  openGraph: {
    title: "Ali Magdy | Software Engineer",
    type: "website",
    url: "https://alimagdy.vercel.app",
    description: siteDescription,
    images: [
      {
        url: "https://alimagdy.vercel.app/prf.jpg",
        width: 1200,
        height: 630,
        alt: "Ali Magdy Portfolio",
      },
    ],
  },

  icons: {
    icon: "logo.png",
    apple: "logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
