import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Threads",
  description: "A NextJS 14 Meta Threads Application",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider afterSignOutUrl={"/"}>
      <html lang="en">
        <body className={inter.className + " bg-black-1"}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
