"use client";

import Appbar from "@repo/ui/appbar";
import { signIn, signOut, useSession } from "next-auth/react";


export default function ClientAppbar() {

  const session = useSession()

  return (
    <>
      <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
    </>
  );
}
