"use client";

import Link from "next/link";
import { Button } from "~ui/components/Button";
import { useSession } from "next-auth/react";

export const SignInOutInner = (props: {
  session: ReturnType<typeof useSession>;
}) => {
  return (
    <>
      {props.session.data ? (
        <Button color="primary" variant={"secondary"} asChild>
          <Link href="/api/auth/signout">Sign Out</Link>
        </Button>
      ) : (
        <Button color="primary" asChild variant={"secondary"}>
          <Link href="/auth/signin">Sign In</Link>
        </Button>
      )}
    </>
  );
};
