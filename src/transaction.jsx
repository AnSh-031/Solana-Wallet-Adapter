import { useWallet , useConnection } from "@solana/wallet-adapter-react";
import { 
    LAMPORTS_PER_SOL,
    Transaction,
    SystemProgram,
    PublicKey
 } from "@solana/web3.js"

export function SendTokens(){
    const wallet = useWallet();
    const {connection} = useConnection();

    async function Send(){
        if(!wallet.publicKey){
            alert("Connect Wallet !");
            return;
        }
        const receiver = document.getElementById("receiver").value;
        const amount = document.getElementById("amount").value;
        
        if(!receiver){
            alert("Enter Address");
            return;
        }

        const transaction = new Transaction();
        transaction.add(
            SystemProgram.transfer({
                fromPubkey: wallet.publicKey,
                toPubkey: new PublicKey(receiver),
                lamports: Number(amount) * LAMPORTS_PER_SOL
            })
        );

        await wallet.sendTransaction(transaction, connection);

        alert("Sent " + amount + "SOL to " + receiver)
    }

    return (
        <div style={{marginRight:"500px",textAlign:"center"}}>
            <br />
            <h2 style={{color:"#D1D1E0", fontSize:"35px",textDecoration:"underline"}}>Sign Transaction</h2>
            <input style={{padding:"10px",backgroundColor:"#1c1c1c",width:"200px",borderRadius:"8px",border:"1px solid #4f8bff",color:"#ffffff", marginBottom:"10px"}} id="receiver" type="text" placeholder="To" />
            <br />
            <input style={{padding:"10px",marginTop:"5px",backgroundColor:"#1c1c1c",width:"200px",borderRadius:"8px",border:"1px solid #4f8bff",color:"#ffffff", marginBottom:"10px"}} id="amount" type="text" placeholder="Amount" />
            <br />
            <button style={{color:"#ffffffff",marginTop:"5px",width:"80px",height:"30px",fontWeight:"bold",fontSize:"17px",background: "linear-gradient(135deg, #9945FF, #14F195)",borderRadius:"7px"}} onClick={Send}>Send</button>
        </div>
    )
}