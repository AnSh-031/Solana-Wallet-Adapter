import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function RequestAirdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function requestairdrop() {
    if(!wallet.publicKey){
      alert("Connect Wallet !");
      return;
    }
    let amount = document.getElementById("amount").value;
    if(!amount){
      alert("Enter amount");
      return;
    }

    await connection.requestAirdrop(
      wallet.publicKey,
      amount * LAMPORTS_PER_SOL
    );
    alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());
  }

  return (
    <div style={{textAlign:"center" , margin:"50px",paddingBottom:"0px",marginBottom:"7px"}}>
      <br />
      <h2 style={{fontSize:"28px",color: "#D1D1E0",textDecoration:"underline",marginBottom: "15px",letterSpacing: "1px",fontWeight: "600"}}>Airdrop</h2>
      <input id="amount" type="text" placeholder="Amount" style={{padding: "10px",backgroundColor:"#1C1C1C",width:"200px", borderRadius: "8px",  border: "1px solid #4F8BFF",color: "#ffffffff", marginBottom: "10px"}}/>
      <br />
      <button onClick={requestairdrop} style={{marginTop:"7px", padding:"3px",color:"#ffffffff",width:"100px",height:"50px",fontWeight:"bold",fontSize:"17px",borderRadius:"7px",background: "linear-gradient(135deg, #9945FF, #14F195)"}}>Request Airdrop</button>
    </div>
  );
}