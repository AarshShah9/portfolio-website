"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { recruiterBannerData } from "@/lib/data";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

export default function RecruiterBanner() {
  const [companyName, setCompanyName] = useState<string | null>(null);
  const [companyColors, setCompanyColors] = useState<string[]>([]);
  const [companyBackgroundColor, setCompanyBackgroundColor] = useState<string[]>(['#a259ff']);
  const [companyWhy, setCompanyWhy] = useState<string | null>(null);
  const [demoLink, setDemoLink] = useState<string | null>(null);
  const [customMessage, setCustomMessage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Extract subdomain from hostname
    const hostname = window.location.hostname;
    const parts = hostname.split(".");
    
    // Check if we have a subdomain (e.g., "figma.aarsh.me")
    if (parts.length > 2 && parts[0] !== "www") {
      const subdomain = parts[0];
      // Capitalize first letter of company name
      const formattedName = subdomain.charAt(0).toUpperCase() + subdomain.slice(1);
      setCompanyName(formattedName);
      const config = recruiterBannerData.find((data) => data.name === subdomain);
      if (config) {
        setCompanyColors([...config.colors]);
        setCompanyBackgroundColor([...config.backgroundColor]);
        const why = config.companyWhy ?? 
            `Thanks for checking out my portfolio, I'd love to join ${formattedName} and contribute to your mission.`;
        setCompanyWhy(why);
        setDemoLink(config.demoLink ?? null);
        setCustomMessage(config.customMessage ?? null);
      }
      setIsVisible(true);
    }
  }, []);

  // When visible, pin to top and add body padding equal to banner height
  useEffect(() => {
    if (!isVisible) return;

    const body = document.body;
    const originalPaddingTopValue = window.getComputedStyle(body).paddingTop || "0px";
    const originalPaddingTop = parseInt(originalPaddingTopValue, 10) || 0;

    const applyPadding = () => {
      const bannerHeight = bannerRef.current?.offsetHeight ?? 0;
      const targetPadding = Math.max(originalPaddingTop + bannerHeight - 5, 0);
      body.style.paddingTop = `${targetPadding}px`;
      body.style.setProperty("--banner-height", `${bannerHeight}px`);
    };

    const raf = requestAnimationFrame(applyPadding);
    window.addEventListener("resize", applyPadding);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", applyPadding);
      body.style.paddingTop = originalPaddingTopValue;
      body.style.removeProperty("--banner-height");
    };
  }, [isVisible]);

  // Don't render anything if there's no company name
  if (!isVisible || !companyName) {
    return null;
  }

  const normalizedDemoLink = demoLink && (
    demoLink.startsWith("http://") || demoLink.startsWith("https://")
      ? demoLink
      : `https://${demoLink.replace(/^\/\//, "")}`
  );

  return (
    <motion.div
      ref={bannerRef}
      className={`fixed inset-x-0 top-0 z-50 w-full text-white text-center py-2 shadow-md`}
      style={{
        background: `linear-gradient(90deg, ${companyBackgroundColor.join(', ')})`
      }}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="flex items-center justify-center gap-3 px-3">
        <div
          className="flex items-center gap-1"
          aria-label={`${companyName} brand colors`}
          title={`${companyName} brand colors`}
        >
          {companyColors.map((color, index) => (
            <span
              key={`${color}-${index}`}
              style={{ backgroundColor: color }}
              className="h-3 w-3 rounded-full ring-1 ring-white/50 shadow-sm dark:ring-black/30"
            />
          ))}
        </div>

        <p className="font-medium">
          {customMessage ? customMessage : `👋 Hello ${companyName} team! ${companyWhy}`}
          {normalizedDemoLink && (
            <>
              {" "}
              <a
                href={normalizedDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 underline underline-offset-2"
              >
                Check out this demo I made for you
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </a>
            </>
          )}
        </p>
      </div>
    </motion.div>
  );
}

