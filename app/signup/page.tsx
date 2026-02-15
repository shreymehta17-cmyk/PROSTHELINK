"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"PATIENT" | "SUPPLIER" | "DOCTOR">("PATIENT");
  const [err, setErr] = useState("");

  async function onSignup() {
    setErr("");
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name, email, password, role })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) return setErr(data?.error || "Signup failed");

    await signIn("credentials", { email, password, redirect: true, callbackUrl: "/" });
  }

  return (
    <div style={{ maxWidth: 420 }}>
      <h3>Create account</h3>
      <input style={{ width: "100%", marginBottom: 8 }} value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input style={{ width: "100%", marginBottom: 8 }} value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input style={{ width: "100%", marginBottom: 8 }} value={password} onChange={e => setPassword(e.target.value)} placeholder="Password (6+)" type="password" />
      <select style={{ width: "100%", marginBottom: 8 }} value={role} onChange={e => setRole(e.target.value as any)}>
        <option value="PATIENT">PATIENT</option>
        <option value="SUPPLIER">SUPPLIER</option>
        <option value="DOCTOR">DOCTOR</option>
      </select>
      <button onClick={onSignup}>Create + Login</button>
      {err && <p style={{ color: "crimson" }}>{err}</p>}
      <p style={{ marginTop: 12 }}>
        Already have account? <a href="/login">Login</a>
      </p>
    </div>
  );
}
