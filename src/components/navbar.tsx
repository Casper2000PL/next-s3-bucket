"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import NavbarContent from "./navbar-content";

const Navbar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  console.log("Session data: ", session);

  const isLoggedIn = !!session;
  console.log("Is user logged in? ", isLoggedIn);

  return (
    <div className="w-full h-14 bg-stone-800 flex items-center justify-between px-4">
      <NavbarContent
        isLoggedIn={isLoggedIn}
        username={session?.user.name || "Guest"}
      />
    </div>
  );
};

export default Navbar;
