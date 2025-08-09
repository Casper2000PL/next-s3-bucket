"use server";

import { signUp } from "@/lib/auth-client";

export async function signUpWithEmail() {
  try {
    await signUp.email({
      email: "email@example.com",
      password: "password",
      name: "Name",
    });

    console.log("Sign-up successful");
  } catch (error) {
    console.error("Sign-up failed:", error);
  }
}
