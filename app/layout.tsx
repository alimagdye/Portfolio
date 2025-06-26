import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ali Magdy | Software Engineer",
  description:
    "Ali Magdy is a Computer Science student at Ain Shams University and a back-end developer specializing in Node.js, TypeScript, and databases like PostgreSQL, MySQL, and MongoDB. He currently works as an AI Trainer at Outlier and builds real-world apps including a real-time chat app and hotel database system.",
  generator: "Next.js",
  applicationName: "Ali Magdy Portfolio",
  authors: [{ name: "Ali Magdy", url: "https://alimagdy.vercel.app" }],
  creator: "Ali Magdy",

  openGraph: {
    title: "Ali Magdy | Back-End Developer Portfolio",
    type: "website",
    url: "https://alimagdy.vercel.app",
    description:
      "Explore Ali Magdy's portfolio showcasing back-end projects, real-time applications, and database-driven systems built with Node.js, TypeScript, and Supabase.",
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
