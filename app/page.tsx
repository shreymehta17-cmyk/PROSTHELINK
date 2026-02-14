"use client";

import { useSession, signOut } from "next-auth/react";

export default function Page() {
  const { data, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!data?.user) {
    window.location.href = "/login";
    return null;
  }

  return (
    <div>
      <h2>Logged in ✅</h2>
      <p>Email: <b>{data.user.email}</b></p>
      <p>Role: <b>{(data.user as any).role}</b></p>

      <button onClick={() => signOut({ callbackUrl: "/login" })}>
        Logout
      </button>

      <hr />
      <p>Next step: Prosthesis Requests Dashboard will appear here.</p>
    </div>
  );
}
