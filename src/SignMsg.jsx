import { useWallet } from "@solana/wallet-adapter-react";
import { ed25519 } from "@noble/curves/ed25519.js"
import bs58 from "bs58"

export function SignMessage(){
    const { publicKey , signMessage} = useWallet();

    async function sign(){
        if(!publicKey){
            alert("Connect Wallet");
            return;
        }
        if(!signMessage){
            alert("Wallet does not supports message signing")
        }

        const message = document.getElementById("inputEl").value;

        if(!message){
            alert("Enter Message");
            return;
        }

        const encodedMessage = new TextEncoder().encode(message);
        const signature = await signMessage(encodedMessage);

        if(!ed25519.verify(signature, encodedMessage, publicKey.toBytes())){
            alert("Invalid message signature");
        }

        alert(`Message signature : ${bs58.encode(signature)}`)
    }
    return (
            <div style={{marginTop: "20px",textAlign:"center"}}>
                <h2 style={{ color:"#D1D1E0", fontSize:"35px",textDecoration:"underline"}}>Sign Message</h2>
                <input id="inputEl" type="text" placeholder="Message" style={{padding:"10px",marginTop:"5px",backgroundColor:"#1c1c1c",width:"200px",borderRadius:"8px",border:"1px solid #4f8bff",color:"#ffffff", marginBottom:"10px"}}/>
                <br />
                <button id="buttonEl" onClick={sign} style={{color:"#ffffffff",marginTop:"5px",width:"100px",height:"50px",fontWeight:"bold",fontSize:"17px",borderRadius:"7px",background: "linear-gradient(135deg, #9945FF, #14F195)"}}>Sign Message</button>
            </div>
    )
}

