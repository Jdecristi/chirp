import { SignInButton, SignOutButton, useAuth } from "@clerk/nextjs";
import { forwardRef } from "react";

import { LoadingSpinner } from "@src/components/loading/Spinner";
import { Button } from "@src/components/ui/Button";

import type { ButtonProps } from "@src/components/ui/Button";

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
