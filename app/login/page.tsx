"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  async function onLogin() {
    setErr("");
    const res = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/"
    });
    if ((res as any)?.error) setErr((res as any).error);
  }

  return (
    <div style={{ maxWidth: 420 }}>
      <h3>Login</h3>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" style={{ width: "100%", marginBottom: 8 }} />
      <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" style={{ width: "100%", marginBottom: 8 }} />
      <button onClick={onLogin}>Sign in</button>
      {err && <p style={{ color: "crimson" }}>{err}</p>}
      <p style={{ marginTop: 12 }}>
        New user? <a href="/signup">Create account</a>
      </p>
    </div>
  );
}
