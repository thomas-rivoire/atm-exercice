import { useState } from "react"
import { Cancel, CheckCircle, KeyboardReturn } from '@mui/icons-material';
import handleSubmit from "../../../Utils/handleSubmit";

interface Props {
    setAmount: (value: number) => void,
    setErrorMessage: (value: string) => void,
    setStep: (step: number) => void
}

export default function NumericKeypad({ setAmount, setErrorMessage, setStep }: Props) {

    const [value, setValue] = useState('');

    const removeLastNumber = (value: string) => {
        const newValue = value.slice(0, -1);
        setValue(newValue);
        return;
    }

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
            <div className="flex-row gap-4 mt-8">
                <button 
                    onClick={() => handleSubmit(value, setErrorMessage, setAmount, setStep)}
                    className="action-btn check-btn">
                    <CheckCircle className="check"/>
                </button>
                <button
                    onClick={() => removeLastNumber(value)}
                    className="action-btn undo-btn">
                    <KeyboardReturn className="undo"/>
                </button>
                <button
                    onClick={() => setValue('')}
                    className="action-btn cancel-btn">
                    <Cancel className="cancel"/>
                </button>
            </div>
        </div>
    )
}