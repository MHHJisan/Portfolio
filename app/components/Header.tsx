"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "skills"];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-black bg-opacity-70 py-4 px-8 shadow-lg backdrop-blur-md">
      {/* Logo */}
      <div className="text-3xl font-bold text-white">Jisan</div>

      {/* Shadcn NavigationMenu */}
      <NavigationMenu className="mr-4">
        <NavigationMenuList className="flex flex-row items-center gap-8">
          {["home", "about", "education", "skills"].map((section) => (
            <NavigationMenuItem key={section}>
              <NavigationMenuLink asChild>
                <Link
                  href={`#${section}`}
                  className={`
                    relative inline-block
                    px-4 py-2
                    text-2xl            /* larger text */
                    font-medium
                    text-white
                    transition-colors
                    duration-300 ease-in-out
                    ${
                      activeSection === section
                        ? "text-blue-400"
                        : "hover:text-blue-400"
                    }
                    group
                  `}
                >
                  {section[0].toUpperCase() + section.slice(1)}
                  <span className="absolute left-0 bottom-0 block h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
