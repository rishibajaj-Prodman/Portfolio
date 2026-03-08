import "./globals.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Rishi Bajaj — Product Manager",
  description:
    "Product Manager with six years of experience across discovery, strategy, and execution. Currently MBA candidate at HHL Leipzig.",
  openGraph: {
    title: "Rishi Bajaj — Product Manager",
    description:
      "Product Manager with six years of experience across discovery, strategy, and execution.",
    url: "https://rishibajaj.space",
    siteName: "Rishi Bajaj",
    locale: "en_US",
    type: "website",
  },
};

function Nav() {
  const links = [
    { label: "Work", href: "/work" },
    { label: "Projects", href: "/projects" },
    { label: "Writing", href: "/writing" },
    { label: "Now", href: "/now" },
  ];

  return (
    <nav className="flex items-center justify-between py-6 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto w-full">
      <Link
        href="/"
        className="font-serif text-lg text-ink hover:text-terracotta transition-colors"
      >
        Rishi Bajaj
      </Link>
      <ul className="flex gap-6 md:gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted hover:text-terracotta transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-paper text-ink min-h-screen">
        <Nav />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
