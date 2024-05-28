import type { AppProps } from "next/app"
import { SessionProvider } from "next-auth/react"
 
export default function SessionProviders({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />;
    </SessionProvider>
  )
}