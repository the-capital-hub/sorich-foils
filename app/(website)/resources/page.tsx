"use client"; // must be client component to show loader visually
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function ResourcesRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Delay just enough to render loader, then redirect
    const timeout = setTimeout(() => {
      router.replace("/resources/infra");
    }, 100); // 0.5s delay for a smoother loader effect

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <Image
          src={logo}
          alt="Loading..."
          width={100}
          height={100}
          priority
          className="opacity-90"
        />
      </motion.div>
      {/* <p className="mt-4 text-gray-600 font-medium text-sm">
        Redirecting to Resources...
      </p> */}
    </div>
  );
}
