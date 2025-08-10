"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { logout, signInWithEmail, signUpWithEmail } from "@/app/auth-actions";
import { useRouter } from "next/navigation";

interface NavbarContentProps {
  isLoggedIn: boolean;
  username: string;
}

const NavbarContent = ({ isLoggedIn, username }: NavbarContentProps) => {
  const router = useRouter();
  //router.refresh();

  return (
    <>
      <Link href="/" className="text-white ">
        Home
      </Link>
      {isLoggedIn ? (
        <div className="flex items-center gap-4">
          <span className="text-white">{username}</span>

          <Button
            className="bg-stone-700 font-semibold hover:bg-white/25 hover:text-white text-white"
            onClick={logout}
          >
            Logout
          </Button>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Button
            className="bg-stone-700 font-semibold hover:bg-white/25 hover:text-white text-white"
            onClick={() => {
              signInWithEmail();
              router.refresh();
            }}
          >
            Sign in
          </Button>
          <Button
            className="bg-stone-700 font-semibold hover:bg-white/25 hover:text-white text-white"
            onClick={() => {
              signUpWithEmail();
              router.refresh();
            }}
          >
            Sign up
          </Button>
        </div>
      )}
    </>
  );
};

export default NavbarContent;
