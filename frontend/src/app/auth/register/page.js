"use client";
import dynamic from "next/dynamic";

const Registerform = dynamic(
  () => import("@/shared/components/auth/register/index"),
  { ssr: true }
);

export default function Register() {
  return (
    <div>
      <Registerform />
    </div>
  );
}
