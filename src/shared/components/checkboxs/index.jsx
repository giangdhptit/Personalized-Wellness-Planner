"use client";

import React from "react";
import styles from "@/components/auth/register/styles.module.css";
import Link from "next/link";

export default function Checkbox({register, errors}) {
  return (
      <div className={styles.termsCheckbox}>
          <input type="checkbox" id="terms" {...register("terms")} />
          <label htmlFor="terms">
            I accept the{" "}
              <Link href="/terms" target="_blank"
                    rel="noopener noreferrer">
                  Terms and Conditions
              </Link>
          </label>
        {errors.terms && (
          <p className={styles.errorText}>{errors.terms.message}</p>
        )}
        </div>
        );
}
