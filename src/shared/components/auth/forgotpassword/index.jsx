"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import ControlledTextInput from "@/shared/components/inputs/textInput";
import PrimaryButton from "@/shared/components/buttons/primaryButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

export default function ForgotPasswordEmailForm() {
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8080/api/forgotpassword/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email }),
      });

      if (res.ok) {
        alert("OTP sent to your email.");
        router.push(`/auth/forgotpassword?step=verifyOtp&email=${encodeURIComponent(data.email)}`);
      } else {
        alert("Failed to send OTP. Email does not exist.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Forgot Password</h2>
      <p className={styles.subTitle}>Enter your email to receive an OTP.</p>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <ControlledTextInput
          label="Email"
          name="email"
          control={control}
          errors={errors}
          placeholder="Enter your registered email"
        />

        <PrimaryButton
          buttonText="Send OTP"
          type="submit"
          loading={loading}
        />
      </form>
    </div>
  );
}
