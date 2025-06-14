"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

// MUI
import Box from "@mui/material/Box";

// Utils, Schemas, Hooks
import useSubmitFunction from "@/shared/hooks/useSubmitFunction";
import { loginUserSchema } from "@/shared/schemas/auth";
import { AUTH_ROUTES } from "@/shared/utils/paths";

// React hook form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

// Components
import ControlledTextInput from "@/shared/components/inputs/textInput";
import ControlledPasswordInput from "@/shared/components/inputs/passwordInput";
import PrimaryButton from "@/shared/components/buttons/primaryButton";

// Redux
import { signInUser } from "@/shared/redux/slices/user";

export default function Loginform() {
  const { isLoading, onSubmitFunction } = useSubmitFunction();
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginUserSchema),
  });

  const onSubmit = (data) => {
    onSubmitFunction({
      reduxFunction: signInUser,
      data,
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome Back 👋</h1>
      <span className={styles.subTitle}>
        Stay connected with us please login with your personal info
      </span>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextInput
          label={"Email Address"}
          placeholder={"Enter your email"}
          name={"email"}
          control={control}
          formControlSx={{ mb: 2 }}
          type={"email"}
          errors={errors}
        />
        <ControlledPasswordInput
          label={"Password"}
          placeholder={"Enter your password"}
          name={"password"}
          control={control}
          formControlSx={{ mb: 2 }}
          errors={errors}
        />

        <div className={styles.forgetPassword}>
          <Link href={"/auth/forgotpassword"}>Forgot Password?</Link>
        </div>

        <div className={styles.submitButtonWrapper}>
          <PrimaryButton
            buttonText="Login"
            loading={isLoading}
            sx={{ height: "50px" }}
          />
        </div>

        <Box sx={{ my: 1, textAlign: "center", color: "text.secondary" }}>
          Continue with
        </Box>

        <PrimaryButton
          buttonText="Google"
          type="button"
          sx={{
            backgroundColor: "red",
            "&:hover": { backgroundColor: "red" },
          }}
          onClick={() =>
            router.push(
              `${process.env.NEXT_PUBLIC_SERVER_JAVA_URL}/oauth2/authorization/google`
            )
          }
        />

        <div className={styles.dontHaveAccount}>
          <span>
            Don't have an account?{" "}
            <Link href={AUTH_ROUTES.register}>Register</Link>
          </span>
        </div>
      </form>
    </div>
  );
}
