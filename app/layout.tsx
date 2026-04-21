"use client";

import "./globals.css";
import TransitionProvider, { useTransitionNav } from "./PageTransition";

function NavBar() {
  const { navigate } = useTransitionNav();

  const scrollToAbout = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black">
      <nav className="flex justify-end items-center h-16">
        <button
          onClick={() => navigate("/")}
          className="text-white px-6 h-full flex items-center hover:bg-gray-800 transition duration-200 cursor-pointer"
        >
          Home
        </button>
        <button
          onClick={() => navigate("/art")}
          className="text-white px-6 h-full flex items-center border-l border-gray-600 hover:bg-gray-800 transition duration-200 cursor-pointer"
        >
          Art
        </button>
        <button
          onClick={scrollToAbout}
          className="text-white px-6 h-full flex items-center border-l border-gray-600 hover:bg-gray-800 transition duration-200 cursor-pointer"
        >
          About Me
        </button>
      </nav>
    </header>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>b.ea.n&apos;s World</title>
        <meta name="description" content="Art portfolio website" />
      </head>
      <body className="bg-black text-white overflow-x-hidden">
        <TransitionProvider>
          <NavBar />
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}