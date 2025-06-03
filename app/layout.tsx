import "./globals.css";

export const metadata = {
  title: "Landing Page",
  description: "Professionelle landing pages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
