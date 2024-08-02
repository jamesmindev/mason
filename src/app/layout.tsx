import type { Metadata } from "next";
import "@/scss/app.scss";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooter from "@/layouts/SiteFooter";

export const metadata: Metadata = {
  title: "Mason",
  description: "Mason Homes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="html">
      <head>
        <link
          rel="icon"
          href="/favicon/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
