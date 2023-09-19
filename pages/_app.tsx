import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Toaster } from 'react-hot-toast';
import { Inter } from 'next/font/google'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'



const inter = Inter({ subsets: ['latin'] })
const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return <div className={inter.className}>
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId="350512559974-8dh6na4hrd2innammqej2313e6f3t80o.apps.googleusercontent.com">
        <Component {...pageProps} />
        <Toaster />
        <ReactQueryDevtools initialIsOpen={true} />
      </GoogleOAuthProvider>
    </QueryClientProvider>
  </div>
}
