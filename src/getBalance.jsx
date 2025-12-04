import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function ShowSolBalance() {
  const { connection } = useConnection();
  const wallet = useWallet();

  async function getBalance() {
    if (wallet.publicKey) {
      const balance = await connection.getBalance(wallet.publicKey);
      document.getElementById("balance").innerHTML = "SOL Balance: " + balance / LAMPORTS_PER_SOL;
    }
  }

  getBalance();
  return (
    <div>
      <br />
      <div id="balance" style={{marginLeft: "20px", color: "white",fontSize:"20px"}}></div>
    </div>
  );
}