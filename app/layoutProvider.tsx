'use client'
import { Suspense } from "react";
import Loading from "@/components/Loading";
import Query from "@/lib/query/queryProvider"
// import { WagmiProvider } from "wagmi";
import { config } from "@/lib/config";
import {PrivyProvider} from '@privy-io/react-auth'
import { WagmiProvider } from '@privy-io/wagmi'

const DelayedComponent = async () => {
  const delay = new Promise((resolve) => setTimeout(resolve, 3000));
  await delay;
  return <div></div>;
};

const handleLogin = (user: any) => {
  console.log(`User ${user.id} Logged in!`)
}


const LayoutChildren = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <PrivyProvider 
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID as string}
      // onSuccess={handleLogin}
      config={{
      // Customize Privy's appearance in your app
        loginMethods: ['email', 'wallet', 'google', 'apple', 'farcaster'],
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
          showWalletLoginFirst: false,
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
      }}
    >
      {/* <WagmiProvider config={config}> */}
      <Query>
        <WagmiProvider config={config}>
          <Suspense fallback={<Loading />}>
            <DelayedComponent />
            {children}
          </Suspense>
        </WagmiProvider>
      </Query>
      {/* </WagmiProvider> */}
    </PrivyProvider>
      
  );
}

export default LayoutChildren;