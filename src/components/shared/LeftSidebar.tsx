"use client";

import { sidebarLinks } from "@/constants";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

function LeftSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => {
          const isActive = link.route === pathname;
          return (
            <Link
              className={`leftsidebar_link ${isActive && "bg-primary-500"}`}
              href={link.route}
              key={link.label}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-light-1 max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 px-6">
        <SignedIn>
          <SignOutButton redirectUrl={"/sign-in"}>
            <div className="cursor-pointer p-4 flex gap-4">
              <Image
                src={"/assets/logout.svg"}
                alt="Sign Out"
                width={24}
                height={24}
              />

              <p className="text-light-2 max-lg:hidden">Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
}

export default LeftSidebar;
