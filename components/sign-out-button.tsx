"use client";

import { signOut } from "next-auth/react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className={cn(
        buttonVariants({ variant: "secondary", size: "sm" }),
        "px-4"
      )}
    >
      ログアウト
    </button>
  );
}
