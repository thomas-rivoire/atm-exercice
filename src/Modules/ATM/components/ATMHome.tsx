import NumericKeypad from "./NumericKeypad"

interface Props {
    isKeypadOpen: boolean,
    setAmount: (value: number) => void,
    setErrorMessage: (value: string) => void,
    setStep: (step: number) => void
}

export default function ATMHome({ isKeypadOpen, setAmount, setErrorMessage, setStep }: Props) {
    return (
        <div id="atm-home">
            <p id="welcoming-text">Choisissez le montant que vous souhaitez retirer</p>
            {
                isKeypadOpen && (
                    <NumericKeypad setAmount={setAmount} setErrorMessage={setErrorMessage} setStep={setStep}/>
                )
            }
        </div>
    )
}