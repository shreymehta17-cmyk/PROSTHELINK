"use client";

import { useSession, signOut } from "next-auth/react";

export default function Home() {
  const { data, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!data?.user) {
    window.location.href = "/login";
    return null;
  }

  return (
    <div>
      <p>
        Logged in as <b>{data.user.email}</b> — role: <b>{(data.user as any).role}</b>
      </p>
      <button onClick={() => signOut({ callbackUrl: "/login" })}>Logout</button>

      <hr />
      <p>Next: we add Requests + Quotes UI + Stripe Pay button.</p>
    </div>
  );
}
