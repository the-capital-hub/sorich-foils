"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Outfit } from "next/font/google";
import { Menu, X } from "lucide-react";
import logo from "@/public/logo.png";
import RoundedActionButton from "./Button";
import { useRouter } from "next/navigation";

const ptMono = Outfit({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const Navbar = ({ isDark = true }: { isDark?: boolean }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [searchValue, setSearchValue] = useState("");
  // const searchContainerRef = useRef<HTMLDivElement | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const NavLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/product" },
    { name: "Investors", href: "/investor" },
    // { name: "Blogs", href: "/blog" },
    { name: "Resources", href: "/resources" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
    { name: "About Us", href: "/about" },
  ];

  const SubNavLinks = [
    { name: "Infrastructure", href: "/resources/infra" },
    { name: "Milestones", href: "/resources/milestone" },
    { name: "Certificates", href: "/resources/certificate" },
    { name: "Patents", href: "/resources/patent" },
  ];

  // const isResourcesSection = [
  // 	"/infra",
  // 	"/milestone",
  // 	"/certificate",
  // 	"/patents",
  // ].some((prefix) => pathname.startsWith(prefix));

  // ✅ Check if current route is in Resources section
  const isResourcesSection = pathname.startsWith("/resources");

  // ✅ Automatically redirect `/resources` → `/resources/infra`
  useEffect(() => {
    if (pathname === "/resources") {
      router.replace("/resources/infra");
    }
  }, [pathname, router]);

  const hoverText = isDark ? "hover:text-[#9DC834]" : "hover:text-[#9DC834]";
  const textColor = pathname === "/" ? "text-white" : "text-black";
  const activeTextColor = isDark ? "text-[#9DC834]" : "text-white";

  // The color for the sub-nav links, which should always be readable
  // and distinct from the background they sit over.
  const subNavTextColor = "text-black"; // Default to black for readability over any potential second nav background
  const subNavActiveColor = "text-[#9DC834]";

  // const handleSearchMouseEnter = () => {
  // 	setIsSearchOpen(true);
  // 	if (closeTimeoutRef.current) {
  // 		clearTimeout(closeTimeoutRef.current);
  // 		closeTimeoutRef.current = null;
  // 	}
  // };

  // const handleSearchMouseLeave = () => {
  // 	if (searchValue === "") {
  // 		closeTimeoutRef.current = setTimeout(() => {
  // 			setIsSearchOpen(false);
  // 		}, 1000);
  // 	}
  // };

  // const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // 	setSearchValue(e.target.value);
  // };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // useEffect(() => {
  // 	if (searchValue === "" && isSearchOpen) {
  // 		closeTimeoutRef.current = setTimeout(() => {
  // 			setIsSearchOpen(false);
  // 		}, 2000);
  // 	}

  // 	return () => {
  // 		if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
  // 	};
  // }, [searchValue, isSearchOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div
      className={`absolute top-0 left-0 right-0 w-full z-50 ${ptMono.className}`}
    >
      {/* Primary Nav Bar (First Line) */}
      <div className={`w-full my-4 bg-transparent`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center ">
          {/* LEFT SIDE: Hamburger + Logo */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMobileMenu}
              className={`lg:hidden p-2 ${textColor} ${hoverText} transition-colors duration-200`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={logo}
                alt="whymedia logo"
                width={170}
                className="w-24 md:w-[170px] lg:-ml-5"
              />
            </motion.div>
          </div>

          {/* CENTER: NavLinks (hidden on mobile) */}
          <div className="hidden lg:flex gap-6">
            {NavLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.1, duration: 0.3 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  className={`transition-all duration-300 ease-in-out ${
                    // Special case: if we are in /about/*, highlight "About Us" in main nav
                    isResourcesSection && link.href === "/resources"
                      ? `${activeTextColor} font-bold`
                      : pathname === link.href
                      ? `${activeTextColor} font-bold`
                      : `${textColor} ${hoverText}`
                  } hover:scale-105`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* RIGHT SIDE: Let's Talk Button */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.3 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {pathname === "/" ? (
              <RoundedActionButton url="/contact" />
            ) : (
              <RoundedActionButton
                text="Contact Us"
                textColor="text-black"
                borderColor="border-black"
                url="/contact"
              />
            )}
          </motion.div>
        </div>
      </div>

      {/* SECOND NAV LINE (Only for About Section) */}
      <AnimatePresence>
        {isResourcesSection && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full lg:block hidden"
          >
            <div className="max-w-7xl mx-auto py-2 flex justify-center gap-10">
              {SubNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? `${subNavActiveColor} font-semibold border-b-2 border-[#9DC834]`
                      : `${subNavTextColor} hover:border-b-2 hover:border-gray-400`
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ----------------------------------------------------------------- */}

      {/* Mobile Menu Overlay and Mobile Menu (Code not repeated for brevity) */}

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-transparent bg-opacity-50 z-40 lg:hidden"
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            // Adjusted top position if you have the second nav line,
            // but keeping absolute top-full relative to the primary nav div
            className="absolute top-[calc(100%+0.5rem)] left-4 right-4 mt-2 bg-white/50 bg-opacity-50 backdrop-blur-lg rounded-lg shadow-xl border border-gray-600 lg:hidden z-50"
          >
            <div className="p-4 space-y-1">
              {/* Mobile Search */}
              <div className="mb-4 md:hidden">
                <input
                  type="text"
                  placeholder="Search..."
                  className={`w-full bg-transparent text-gray-800 px-3 py-2 rounded-lg border border-black focus:outline-none focus:outline-black transition-colors`}
                />
              </div>

              {NavLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`block px-3 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                      isResourcesSection && link.href === "/resources"
                        ? `${activeTextColor} text-black text-xl font-bold`
                        : pathname === link.href
                        ? `${activeTextColor} text-black text-xl font-bold`
                        : `text-black ${hoverText}`
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Sub-Navigation (Optional, you can add this here if needed) */}
              {isResourcesSection && (
                <div className="pl-4 pt-2 border-t border-gray-300">
                  {SubNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={`block pl-4 py-2 text-sm ${
                        pathname === link.href
                          ? "font-bold text-[#9DC834]"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
