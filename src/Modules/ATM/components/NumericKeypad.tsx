import { CircleCheck, Undo2, X } from "lucide-react";
import { useState } from "react"

export default function NumericKeypad() {

    const [value, setValue] = useState('');

    return (
        <div id="numeric-keypad">
            <div id="value-container">{ value }</div>
            <div id="keypad">
                <button className="keypad-btn" onClick={() => setValue(prev => prev + 7)}>7</button>
                <button className="keypad-btn" onClick={() => setValue(prev => prev + 8)}>8</button>
                <button className="keypad-btn" onClick={() => setValue(prev => prev + 9)}>9</button>
                <button className="keypad-btn" onClick={() => setValue(prev => prev + 4)}>4</button>
                <button className="keypad-btn" onClick={() => setValue(prev => prev + 5)}>5</button>
                <button className="keypad-btn" onClick={() => setValue(prev => prev + 6)}>6</button>
                <button className="keypad-btn" onClick={() => setValue(prev => prev + 1)}>1</button>
                <button className="keypad-btn" onClick={() => setValue(prev => prev + 2)}>2</button>
                <button className="keypad-btn" onClick={() => setValue(prev => prev + 3)}>3</button>
                <button className="keypad-btn" onClick={() => setValue(prev => prev + 0)}>0</button>
            </div>
            <div>
                <button><CircleCheck /></button>
                <button> <Undo2 /></button>
                <button><X /></button>
            </div>
        </div>
    )
}