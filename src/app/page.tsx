"use client";

import { Button } from "@/components/ui/button";
import { signUpWithEmail } from "./auth-actions";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Button className="cursor-pointer" onClick={signUpWithEmail}>
        Sign Up
      </Button>
    </div>
  );
}
