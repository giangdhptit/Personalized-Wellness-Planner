"use client";
import dynamic from "next/dynamic";

const Loginform = dynamic(
  () => import("@/shared/components/auth/login/index"),
  { ssr: true }
);

export default function Login() {
  return (
    <div className="auth-form">
      <Loginform />
    </div>
  );
}
