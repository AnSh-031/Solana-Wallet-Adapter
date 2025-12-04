import React, { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";

import { RequestAirdrop } from "./Airdrop";
import { ShowSolBalance } from "./getBalance";
import { SendTokens } from "./transaction";
import { SignMessage } from "./SignMsg";

function App() {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  document.body.style.margin = "0";
  document.body.style.padding = "0";

  return (
    <div style={{backgroundColor: "#151e1bff", height: "100vh", width: "100vw"}}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <ShowSolBalance></ShowSolBalance>
            <div style={{ display: "flex", justifyContent: "center", paddingTop: "100px"}}>
              <WalletMultiButton style={{marginRight: "50px",padding:"9px", backgroundColor: "#ffffffff",fontSize:"30px",color:"#28308cff",borderStyle:"solid",borderWidth:"4px"}}/>
              <WalletDisconnectButton style={{marginleft: "50px",backgroundColor: "#ffffff", padding:"9px",fontSize:"30px",color:"#28308cff",borderStyle:"solid",borderWidth:"4px"}}/>
            </div>
            <RequestAirdrop></RequestAirdrop>
            <div style={{display:"flex", justifyContent:"center",padding:"0px"}}>
              <SendTokens style={{paddingRight:"50px"}}></SendTokens>
              <SignMessage style={{paddingleft:"50px"}}></SignMessage>
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
}

export default App;