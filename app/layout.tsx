import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/Components/Common/Navbar";
import Footer from "@/src/Components/Common/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Sorich Foils Limited",
	description: "Official website of Sorich Foils Limited",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
					integrity="sha512-+M8JbzqIFGZrYjJ5HLmpxZ7k1HX2CE5cmO/KL8A7WBOIbAc6B9ML0DOLn+DH7B7ZOm+xVnW+uD3ZoYbM0M4+Wg=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>
			</head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
       <Navbar /> 
        
        <main className="bg-white">
          {children}
        </main>
        
        <Footer />
      </body>
      
    </html>
  );
}
