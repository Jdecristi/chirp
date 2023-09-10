import { SignInButton, SignOutButton, useAuth } from "@clerk/nextjs";
import { Button } from "@src/components/ui/button";
import { forwardRef } from "react";

import type { ButtonProps } from "@src/components/ui/button";
import { LoadingSpinner } from "../loading/Spinner";

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
