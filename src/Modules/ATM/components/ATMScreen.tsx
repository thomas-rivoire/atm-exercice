import { useState } from "react";
import NumericKeypad from "./NumericKeypad";

export default function ATMScreen() {

    const [amount, setAmount] = useState(0);
    const [isKeypadOpen, setIsKeypadOpen] = useState(false);

    return (
        <section id="atm" className="flex-row gap-48">
            <div className="flex-col gap-48">
                <div className="btn-container">
                    <p>10</p>
                    <button 
                        className="amount-btn" 
                        onClick={() => setAmount(10)}>    
                    </button>
                </div>
                <div className="btn-container">
                    <p>20</p>
                    <button 
                        className="amount-btn" 
                        onClick={() => setAmount(20)}>            
                    </button>
                </div>
                <div className="btn-container">
                    <p>50</p>
                    <button
                        className="amount-btn"
                        onClick={() => setAmount(50)}>
                    </button>
                </div>
            </div>
            <div id="screen">
                <p>Choisissez le montant à retirer</p>
                {
                    isKeypadOpen && (
                        <NumericKeypad/>
                    )
                }
            </div>
            <div className="flex-col gap-48">
                <div className="btn-container">
                    <button 
                        className="amount-btn"
                        onClick={() => setAmount(100)}>
                    </button>
                    <p>100</p>
                </div>
                <div className="btn-container">
                    <button 
                        className="amount-btn"
                        onClick={() => setAmount(200)}>                
                    </button>
                    <p>200</p>
                </div>
               <div className="btn-container">
                    <button
                        className="amount-btn"
                        onClick={() => setIsKeypadOpen(true)}
                    >
                    </button>
                    <p>Montant personnalisé (1000€ max et montant pair)</p>
               </div>
            </div>
        </section>
    )
}