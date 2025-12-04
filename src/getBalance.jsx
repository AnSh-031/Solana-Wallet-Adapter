import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect } from "react";

export function ShowSolBalance() {
  const { connection } = useConnection();
  const wallet = useWallet();

  useEffect(() => {
      async function getBalance() {
        if (wallet.publicKey) {
          const balance = await connection.getBalance(wallet.publicKey);
          document.getElementById("balance").innerHTML = "SOL Balance: " + balance / LAMPORTS_PER_SOL;
        }
        else{
          document.getElementById("balance").innerHTML = "";
        }
      }
      getBalance();
  },[wallet.publicKey, connection])
  
  return (
    <div>
      <br />
      <div id="balance" style={{marginLeft: "20px", color: "#14F195",fontSize:"20px",fontWeight: "500"}}></div>
    </div>
  );
}