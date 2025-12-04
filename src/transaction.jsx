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
        const receiver = document.getElementById("receiver").value;
        const amount = document.getElementById("amount").value;

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
            <h2 style={{color:"white", fontSize:"35px",textDecoration:"underline"}}>Sign Transaction</h2>
            <input style={{padding:"7px",backgroundColor:"#f0e9e9ff",width:"200px"}} id="receiver" type="text" placeholder="To" />
            <br />
            <input style={{padding:"7px",marginTop:"5px",backgroundColor:"#f0e9e9ff",width:"200px"}} id="amount" type="text" placeholder="Amount" />
            <br />
            <button style={{color:"#ffffffff",marginTop:"5px",width:"80px",height:"30px",fontWeight:"bold",fontSize:"17px",backgroundColor:"#5c70d5ff",borderRadius:"7px"}} onClick={Send}>Send</button>
        </div>
    )
}