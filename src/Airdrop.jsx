import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function RequestAirdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function requestairdrop() {
    let amount = document.getElementById("amount").value;
    await connection.requestAirdrop(
      wallet.publicKey,
      amount * LAMPORTS_PER_SOL
    );
    alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());
  }

  return (
    <div style={{textAlign:"center" , margin:"50px",paddingBottom:"0px",marginBottom:"7px"}}>
      <br />
      <h2 style={{fontSize:"35px",color: "white",textDecoration:"underline"}}>Airdrop</h2>
      <input id="amount" type="text" placeholder="Amount" style={{padding: "5px",backgroundColor:"#f0e9e9ff",width:"200px"}}/>
      <br />
      <button onClick={requestairdrop} style={{marginTop:"7px", padding:"3px",color:"#ffffffff",width:"100px",height:"50px",fontWeight:"bold",fontSize:"17px",borderRadius:"7px",backgroundColor:"#5c70d5ff"}}>Request Airdrop</button>
    </div>
  );
}