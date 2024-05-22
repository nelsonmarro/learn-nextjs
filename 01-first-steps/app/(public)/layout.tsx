import { Navbar } from "@/components";
import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">{children}</main>
    </>
  );
}

export default Layout;
