"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSearchParams, useRouter } from "next/navigation";
import ControlledPasswordInput from "@/shared/components/inputs/passwordInput";
import PrimaryButton from "@/shared/components/buttons/primaryButton";

const schema = yup.object().shape({
  password: yup.string().required().min(6),
  confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords must match"),
});

export default function ResetPassword() {
  const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get("email");

  const onSubmit = async (data) => {
    const res = await fetch("http://localhost:8080/api/forgotpassword/reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, newPassword: data.password }),
    });

    if (res.ok) {
      alert("Password changed");
      router.push("/auth/login");
    } else {
      alert("Failed to reset password");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Set New Password</h2>
      <ControlledPasswordInput
          name="password"
          label="New Password"
          control={control}
          errors={errors}
      />
      <ControlledPasswordInput
          name="confirmPassword"
          label="Confirm Password"
          control={control}
          errors={errors}
      />
      <PrimaryButton type="submit" buttonText="Reset Password" />
    </form>
  );
}
