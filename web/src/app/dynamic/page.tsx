import { headers } from "next/headers";

export const dynamic = "force-dynamic";

export default async function Dynamic() {
  const userAgent = headers().get("user-agent");

  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-center bg-gradient-defang">
      <h2 className="text-white">Build: {process.env.NEXT_PUBLIC_BUILD}</h2>
      <h2 className="text-white">Env: {process.env.NEXT_PUBLIC_ENV}</h2>
      <p className="text-white">Dynamic User Agent: <br />{userAgent}</p>
    </main>
  );
}