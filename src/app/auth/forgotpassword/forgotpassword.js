"use client";
import { useSearchParams } from "next/navigation";
import ForgotPassword from "@/shared/components/auth/forgotpassword/index";
import VerifyOtp from "@/shared/components/auth/forgotpassword/verifyOtp";
import ResetPassword from "@/shared/components/auth/forgotpassword/resetPassword";

export default function ForgotPasswordRouter() {
  const params = useSearchParams();
  const step = params.get("step");
  const email = params.get("email");

  if (step === "verifyOtp") return <VerifyOtp email={email} />;
  if (step === "resetPassword") return <ResetPassword email={email} />;

  return <ForgotPassword />;
}
