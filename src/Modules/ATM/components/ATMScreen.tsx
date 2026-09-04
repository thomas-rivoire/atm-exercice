import { useState } from "react";
import ATMHome from "./ATMHome";
import { useStock } from "../Context/StockContext";
import handleSubmit from "../../../Utils/handleSubmit";
import ATMLoader from "./ATMLoader";
import ATMChoice from "./ATMChoice";

export default function ATMScreen() {

    const [amount, setAmount] = useState(0);
    const [step, setStep] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const [isKeypadOpen, setIsKeypadOpen] = useState(false);
    const { stock } = useStock();


    return (
        <>
            <section id="atm" className="flex-row gap-48">
                <div className="flex-col gap-48">
                    <div className="btn-container first-btn-container">
                        <p>10</p>
                        <button
                            className="amount-btn"
                            onClick={() => handleSubmit('10', setErrorMessage, setAmount, setStep)}>
                        </button>
                    </div>
                    <div className="btn-container first-btn-container">
                        <p>20</p>
                        <button
                            className="amount-btn"
                            onClick={() => handleSubmit('20', setErrorMessage, setAmount, setStep)}>
                        </button>
                    </div>
                    <div className="btn-container first-btn-container">
                        <p>50</p>
                        <button
                            className="amount-btn"
                            onClick={() => handleSubmit('50', setErrorMessage, setAmount, setStep)}>
                        </button>
                    </div>
                </div>
                <div id="screen">
                    {
                        errorMessage && (
                            <p className="error-message">{errorMessage}</p>
                        )
                    }
                    {
                        step === 0 ?
                            <ATMHome
                                isKeypadOpen={isKeypadOpen}
                                setAmount={setAmount}
                                setErrorMessage={setErrorMessage}
                                setStep={setStep}
                            /> :
                            step === 1 ?
                                <ATMLoader
                                    amount={amount}
                                    stock={stock}
                                    setErrorMessage={setErrorMessage}
                                    setStep={setStep}
                                /> :
                                step === 2 ?
                                    <ATMChoice
                                        amount={amount}
                                        stock={stock}
                                    /> :

                                    ''
                    }
                </div>
                <div className="flex-col gap-48">
                    <div className="btn-container">
                        <button
                            className="amount-btn"
                            onClick={() => handleSubmit('100', setErrorMessage, setAmount, setStep)}>
                        </button>
                        <p>100</p>
                    </div>
                    <div className="btn-container">
                        <button
                            className="amount-btn"
                            onClick={() => handleSubmit('200', setErrorMessage, setAmount, setStep)}>
                        </button>
                        <p>200</p>
                    </div>
                    <div className="btn-container">
                        <button
                            className="amount-btn"
                            onClick={() => setIsKeypadOpen(true)}
                        >
                        </button>
                        <p>Montant personnalisé (1000€ max)</p>
                    </div>
                </div>
            </section>
            <div id="cash-render">
                <div id="cash-render-inside"></div>
            </div>
        </>
    )
}