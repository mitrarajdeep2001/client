import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Topbar() {
  return (
    <nav className="topbar">
      <Link href={"/"} className="flex items-center gap-4">
        <Image src={"/assets/logo.svg"} alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
      </Link>

      <div className="flex items-center gap-4">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <Image
                src={"/assets/logout.svg"}
                alt="Sign Out"
                width={24}
                height={24}
              />
            </SignOutButton>
          </SignedIn>
        </div>
      </div>

      <OrganizationSwitcher 
      appearance={{
        elements: {
          organizationSwitcherTrigger: "py-2 px-4"
        }
      }}
      />
    </nav>
  );
}

export default Topbar;
