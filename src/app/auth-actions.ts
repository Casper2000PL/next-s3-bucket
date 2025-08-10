"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function signUpWithEmail() {
  try {
    const response = await auth.api.signUpEmail({
      body: {
        email: "email2@example.com",
        password: "password",
        name: "Name2",
      },
      // asResponse: true,
    });

    console.log("Sign-up response: ", response);

    console.log("Signed up successfully");
  } catch (error) {
    console.error("Sign-up failed:", error);
  }
}

export async function signInWithEmail() {
  try {
    const response = await auth.api.signInEmail({
      body: {
        email: "email@example.com",
        password: "password",
      },
      // asResponse: true, // returns a response object instead of data
    });

    console.log("Sign-in response: ", response);
    console.log("Sign-in data: ", response);

    console.log("Signed in successfully");
  } catch (error) {
    console.error("Sign-in failed:", error);
  }
}

export async function logout() {
  try {
    await auth.api.signOut({ headers: await headers() });
    console.log("Sign-out successful");
  } catch (error) {
    console.error("Sign-out failed:", error);
  }
}
