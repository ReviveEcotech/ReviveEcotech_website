import "./globals.css";
import Footer from "../../components/footer";
import Navbar from "../../components/navBar";

export const metadata = {
  title: "Revive EcoTech",
  description: "Revive Ecotech is a platform that connects people with local waste management services to promote recycling and reduce waste.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />

      </body>
    </html>
  );
}