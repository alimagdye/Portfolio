import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ali Magdy",
  description:
    "Ali Magdy is a Computer Science student at Ain Shams University and a passionate back-end developer specializing in Node.js, TypeScript, and databases like MySQL, PostgreSQL, and MongoDB. Currently working as an AI Trainer at Outlier, he builds real-world projects including a real-time chat app with Supabase and a hotel database system. Ali continuously expands his skills through hands-on development, certifications, and collaboration opportunities.",

  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
