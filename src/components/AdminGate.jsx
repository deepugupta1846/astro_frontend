"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { adminFetch } from "@/lib/adminApi";
import { clearSession, getStoredToken } from "@/lib/adminAuth";

export default function AdminGate({ children }) {
  const router = useRouter();
  const [state, setState] = useState("loading");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const token = getStoredToken();
      if (!token) {
        router.replace("/sign-in");
        setState("unauthed");
        return;
      }
      try {
        await adminFetch("/api/v1/admin/me");
        if (!cancelled) setState("authed");
      } catch {
        clearSession();
        if (!cancelled) {
          router.replace("/sign-in");
          setState("unauthed");
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [router]);

  if (state === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-3">
          <div
            className="h-10 w-10 animate-spin rounded-full border-2 border-border border-t-primary"
            aria-hidden
          />
          <p className="text-sm text-muted">Checking session…</p>
        </div>
      </div>
    );
  }

  if (state !== "authed") return null;
  return children;
}
