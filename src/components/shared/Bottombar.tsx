"use client";

import { bottombarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Bottombar() {
  const pathname = usePathname();

  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {bottombarLinks.map((link) => {
          const isActive = link.route === pathname;
          return (
            <Link
              className={`bottombar_link ${isActive && "bg-primary-500"}`}
              href={link.route}
              key={link.label}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-subtle-medium text-light-1 max-sm:hidden">{link.label.split(/\s+/)[0]}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Bottombar;
