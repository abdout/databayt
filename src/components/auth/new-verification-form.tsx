"use client";

import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { newVerification } from "./actions/new-verification";
import { CardWrapper } from "./card-wrapper";
import { FormSuccess } from "./form-success";
import { FormError } from "./form-error";



export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  // Debugging: Log the token value
  console.log("Token retrieved from URL:", token);

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      console.log("Token missing, cannot proceed.");
      setError("Missing token!");
      return;
    }

    console.log("Submitting newVerification request with token:", token);

    newVerification(token)
      .then((data) => {
        console.log("New verification response:", data);
        setSuccess(data.success);
        setError(data.error);
      })
      .catch((error) => {
        console.error("Verification request failed:", error);
        setError("Something went wrong!");
      })
  }, [token, success, error]);

  useEffect(() => {
    if (token) {
      onSubmit();
    } else {
      console.log("Token not found in URL.");
    }
  }, [token, onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonLabel="Back to login"
      backButtonHref="/login"
    >
      <div className="flex items-center w-full justify-center">
        {!success && !error && (
          <BeatLoader />
        )}
        <FormSuccess message={success} />
        {!success && (
          <FormError message={error} />
        )}
      </div>
    </CardWrapper>
  )
}
