import "./globals.css";

export const metadata = {
  title: "LeadWise Blog",
  description: "Articles on leadership and team management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
