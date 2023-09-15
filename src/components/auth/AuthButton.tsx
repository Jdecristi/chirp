import { SignInButton, SignOutButton, useAuth } from "@clerk/nextjs";
import { forwardRef } from "react";

import { Button } from "@src/components/Button";
import { LoadingSpinner } from "@src/components/loading/Spinner";

import type { ButtonProps } from "@src/components/Button";

const AuthButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { isLoaded, isSignedIn } = useAuth();

  return (
    <Button {...props} ref={ref} asChild={isLoaded}>
      {(() => {
        if (!isLoaded)
          return (
            <>
              <LoadingSpinner loading={true} variant="dark" size="sm" /> Loading...
            </>
          );

        return isSignedIn ? <SignOutButton /> : <SignInButton />;
      })()}
    </Button>
  );
});

AuthButton.displayName = "AuthButton";

export { AuthButton };
