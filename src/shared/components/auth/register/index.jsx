"use client";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

// MUI
import Grid from "@mui/material/Grid";

// Components
import ControlledPasswordInput from "@/shared/components/inputs/passwordInput";
import ControlledTextInput from "@/shared/components/inputs/textInput";
import PrimaryButton from "@/shared/components/buttons/primaryButton";

// React hook form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

// Schema, hooks, utils
import useSubmitFunction from "@/shared/hooks/useSubmitFunction";
import { registerUserSchema } from "@/shared/schemas/auth";
import { AUTH_ROUTES } from "@/shared/utils/paths";

// Redux
import { createUser } from "@/shared/redux/slices/user";
import GoogleAuthButton from "@/components/buttons/GoogleAuthButton";
import {register} from "next/dist/client/components/react-dev-overlay/pages/client";

export default function Registerform() {
  const router = useRouter();
  const { isLoading, onSubmitFunction } = useSubmitFunction();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerUserSchema),
  });

  const onSubmit = (data) => {
    // const onSuccess = () => {
    //   router.push(PRICE_ROOT);
    // };
    // onSubmitFunction({ reduxFunction: createUser, data, onSuccess });
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Join us today 👋</h1>
      <span className={styles.subTitle}>
        Enter your personal details and start journey with us.
      </span>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
            <ControlledTextInput
              label={"First Name"}
              name={"firstName"}
              control={control}
              errors={errors}
              placeholder="Enter your first name"
              onInput={(e) =>
                (e.target.value =
                  e.target.value.charAt(0).toUpperCase() +
                  e.target.value.slice(1).replace(/[^a-zA-Z]/g, ""))
              }
            />
          </Grid>

          <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
            <ControlledTextInput
              label={"Last Name"}
              name={"lastName"}
              control={control}
              errors={errors}
              placeholder="Enter your last name"
              onInput={(e) =>
                (e.target.value =
                  e.target.value.charAt(0).toUpperCase() +
                  e.target.value.slice(1).replace(/[^a-zA-Z ]/g, ""))
              }
            />
          </Grid>

          <Grid item size={12}>
            <ControlledTextInput
              label={"Email"}
              name={"email"}
              control={control}
              errors={errors}
              placeholder="Enter your email"
            />
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <ControlledPasswordInput
              label={"Password"}
              name={"password"}
              control={control}
              errors={errors}
              placeholder="Enter your password"
            />
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <ControlledPasswordInput
              label={"Confirm Password"}
              name={"confirmPassword"}
              control={control}
              errors={errors}
              placeholder="Enter your password"
            />
          </Grid>
        </Grid>

        {/* Terms and Conditions */}
        <div className={styles.termsCheckbox}>
          <input
            type="checkbox"
            id="terms"
            {...register("terms")}
            />
          <label htmlFor="terms">
            I accept the <a href="/terms" target="_blank">Terms and Conditions</a>
          </label>
        </div>
        {errors.terms && (
        <p className={styles.errorText}>{errors.terms.message}</p>
        )}

        <PrimaryButton
          buttonText="Create Account"
          type="submit"
          sx={{ mt: 2.5 }}
          loading={isLoading}
        />

        <div className={styles.divider}>or</div>

      <GoogleAuthButton mode="signup" />

        <div className={styles.alreadyHaveAccount}>
          <span>
            Have an account? <Link href={AUTH_ROUTES.login}>Login</Link>
          </span>
        </div>
      </form>
    </div>
  );
}
