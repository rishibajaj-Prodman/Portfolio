import "./globals.css";

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
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:top-3 focus:left-3 focus:bg-terracotta focus:text-paper focus:px-4 focus:py-2 focus:rounded-sm focus:text-sm"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
