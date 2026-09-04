import type { Bill } from "../types/bill"
import NumericKeypad from "./NumericKeypad"

interface Props {
    isKeypadOpen: boolean,
    stock: Bill[]
    setAmount: (value: number) => void,
    setErrorMessage: (value: string) => void,
    setStep: (step: number) => void
}

export default function ATMHome({ isKeypadOpen, stock, setAmount, setErrorMessage, setStep }: Props) {
    return (
        <div id="atm-home">
            <p id="welcoming-text">Choisissez le montant que vous souhaitez retirer</p>
            {
                isKeypadOpen && (
                    <NumericKeypad stock={stock} setAmount={setAmount} setErrorMessage={setErrorMessage} setStep={setStep}/>
                )
            }
        </div>
    )
}