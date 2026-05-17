import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "AstroPulse — Talk to Top Astrologers Online | Chat & Call",
  description:
    "Consult verified astrologers 24/7 for Vedic charts, love, career, tarot, and remedies. Book chat or voice on Astro Pulse.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

/** Pairs with CSS `:root { --brand }` (AppTheme.primaryColor) */
export const viewport = {
  themeColor: "#CE181E",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
