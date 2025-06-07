"use client";
import { useForm } from "react-hook-form";
import { useSearchParams, useRouter } from "next/navigation";
import ControlledTextInput from "@/shared/components/inputs/textInput";
import PrimaryButton from "@/shared/components/buttons/primaryButton";

export default function VerifyOtp() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get("email");

  const onSubmit = async ({ otp }) => {
    const res = await fetch("http://localhost:8080/api/forgotpassword/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });

    if (res.ok) {
      router.push(`/auth/forgotpassword/resetPassword?email=${email}`);
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Verify OTP</h2>
      <input {...register("otp")}
             placeholder="Enter the OTP sent to email" />
      <PrimaryButton type="submit" buttonText="Verify OTP" />
    </form>
  );
}
