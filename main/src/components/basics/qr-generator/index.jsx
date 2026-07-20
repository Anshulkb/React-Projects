import { useState } from "react";
import QRCode from "react-qr-code";

export default function QrCodeGenerator() {

    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');
    const [showQr, setShowQr] = useState(false);

    function generateQrCode() {
        setQrCode(input);
        setInput('');
        setShowQr(true);
    }
    return (<div>
        <h1>QR Code Generator</h1>
        <div>
            <input type="text" name="qr-code" placeholder="Enter value here" onChange={(e) => { setInput(e.target.value); setShowQr(false) }} value={input}
                style={{ 'marginBottom': '1.5rem', 'marginRight': '1rem' }} />
            <button disabled={input?.trim() === ''} onClick={generateQrCode}>Generate</button>
        </div>
        <div>{
            showQr &&
            <QRCode id="id-qr-code" value={qrCode} size={350} bgColor="white"></QRCode>

        }
        </div>
    </div>
    );
}