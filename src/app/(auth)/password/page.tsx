import { Suspense } from "react";
import { NewPasswordForm } from "@/component/auth/new-password-form";

const NewPasswordPage = () => {
  return (
    <Suspense>
      <NewPasswordForm />
    </Suspense>
  );
};

export default NewPasswordPage;
