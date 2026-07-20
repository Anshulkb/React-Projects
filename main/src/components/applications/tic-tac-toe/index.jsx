import { use, useEffect, useState } from 'react';
import './tic-tat-toe.css';

function Square({ value, onClick }) {
    return <button onClick={onClick} className="square">{value}</button>
}

export default function TicTacToe() {

    const [squares, setSquares] = useState(Array(9).fill(''));
    const [isWrong, setIsWrong] = useState(true);
    const [status, setStatus] = useState('');

    function handleClick(index) {
        if (checkWinner()) return;
        if (!isFilled(index)) {
            let temp = [...squares];
            temp[index] = isWrong ? 'X' : 'O';
            setIsWrong(!isWrong);
            setSquares(temp);
        }
    }
    function isFilled(index) {
        return squares[index] !== '';
    }
    function checkWinner() {
        const winCheck = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < winCheck.length; i++) {
            const [x, y, z] = winCheck[i];

            if (squares[x] === squares[y] && squares[x] === squares[z]) {
                return squares[x];
            }
        }
        return null;
    }
    function restartGame() {
        setIsWrong(true);
        setSquares(Array(9).fill(''));
    }

    useEffect(() => {
        if (!checkWinner() && squares.every(item => item !== '')) {
            setStatus('This is a draw. Do you want to restart?');
        }
        else if (checkWinner()) {
            setStatus(`Winner is ${checkWinner()}`);
        }
        else {
            setStatus(`Next player is ${isWrong ? 'X' : 'O'}`);
        }
    }, [squares, isWrong])
    console.log(squares);

    return (
        <div className="container">
            <div className="row">
                <Square value={squares[0]} onClick={() => handleClick(0)}></Square>
                <Square value={squares[1]} onClick={() => handleClick(1)}></Square>
                <Square value={squares[2]} onClick={() => handleClick(2)}></Square>
            </div>
            <div className="row">
                <Square value={squares[3]} onClick={() => handleClick(3)}></Square>
                <Square value={squares[4]} onClick={() => handleClick(4)}></Square>
                <Square value={squares[5]} onClick={() => handleClick(5)}></Square>
            </div>
            <div className="row">
                <Square value={squares[6]} onClick={() => handleClick(6)}></Square>
                <Square value={squares[7]} onClick={() => handleClick(7)}></Square>
                <Square value={squares[8]} onClick={() => handleClick(8)}></Square>
            </div>
            <h1>{status}</h1>
            <button onClick={restartGame}>Restart</button>
        </div>
    );
}