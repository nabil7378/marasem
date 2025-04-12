import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "@/components/BootstrapClient";

export const metadata = {
  title: "Marasem App",
  description: "Marasem App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
