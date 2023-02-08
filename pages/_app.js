import "../styles/globals.css"
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react"
import { NotificationProvider } from "@web3uikit/core"

function MyApp({ Component, pageProps }) {
    return (
        <ThirdwebProvider desiredChainId={ChainId.Mumbai} supportedChains={[ChainId.Mumbai]}>
            <NotificationProvider>
                <Component {...pageProps} />
            </NotificationProvider>
        </ThirdwebProvider>
    )
}

export default MyApp
