import { Inter } from 'next/font/google';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function App ({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <main className={`flex min-h-screen flex-col p-24 ${inter.className}`}>
          <Component {...pageProps} />
        </main>
      </Hydrate>
    </QueryClientProvider>
  );
}
