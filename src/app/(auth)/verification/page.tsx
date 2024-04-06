import { Suspense } from "react";
import { NewVerificationForm } from "@/component/auth/new-verification-form";

const NewVerificationPage = () => {
  return (
    <Suspense>
      <NewVerificationForm />
    </Suspense>
  );
};

export default NewVerificationPage;
