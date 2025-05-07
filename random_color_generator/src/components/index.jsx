import { useState } from "react";


export default function ColorGenerator() {
    const [color, setColor] = useState('#ffffff');
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [hidden, setHidden] = useState(true);

    function generateRandomColor(colorType) {
        setTypeOfColor(colorType);
        if (colorType === 'Rgb') {
            let r = fnGenerateRandomValue(256);
            let g = fnGenerateRandomValue(256);
            let b = fnGenerateRandomValue(256);
            setColor(`rgb(${r},${g},${b})`);
        }
        else {
            const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
            let hexCode = '#';
            for (let i = 0; i < 6; i++) {
                hexCode += hex[fnGenerateRandomValue(hex.length)];
            }
            setColor(hexCode);
        }
    }

    function fnGenerateRandomValue(length) {
        return Math.floor(Math.random() * length);
    }
    return <div style={{
        height: "100vh"
    }}>
        <div style={{
            width: "100vw",
            background: color,
            paddingTop: "10px"
        }}>
            <button style={{ marginRight: "5px" }} onClick={() => generateRandomColor('hex')}>Generate Hex Color</button>
            <button style={{ marginRight: "5px" }} onClick={() => generateRandomColor('Rgb')}>Generate RGB Color</button>
            <button style={{ marginRight: "5px" }} onClick={() => typeOfColor === 'hex' ? generateRandomColor('hex') : generateRandomColor('Rgb')}>Generate Random Color</button>
            <button style={{ marginRight: "5px" }} onClick={() => setHidden(!hidden)}>Show Color Code</button>
            <div style={
                {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    height: "calc(100vh - 35px)",
                    fontWeight: "bold"
                }
            }>
                <p hidden={hidden}>{color}</p>
            </div>
        </div>
    </div >;
}
