import "./globals.css";

export const metadata = {
  title: "Revive Ecotech",
  description: "Revive Ecotech is a platform that connects people with local waste management services to promote recycling and reduce waste.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
