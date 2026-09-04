import { updateStock } from "../Modules/ATM/Services/stockService";
import type { Bill } from "../Modules/ATM/types/bill";
import { isEndingByZero, isPositive, isStartingByZero, isUnderMaxAmount } from "./amount-checker";
import { distribution } from "./distribution";

export default function handleSubmit(
    value: string, 
    stock: Bill[],
    setErrorMessage: (message: string) => void,
    setAmount: (amount: number) => void,
    setStep: (step: number) => void
) {

    setErrorMessage('');
    const isNumEndingByZero = isEndingByZero(Number(value))
    if (!isNumEndingByZero) {
        setErrorMessage('Le montant doit terminer par 0 (j\'ai pas le terme exact)');
        return;
    }

    const isNumPositive = isPositive(Number(value));
    if (!isNumPositive) {
        setErrorMessage('Le montant choisi doit être supérieur à 0');
        return;
    }

    const isNumUnderMaxAmount = isUnderMaxAmount(Number(value));
    if (!isNumUnderMaxAmount) {
        setErrorMessage('Le montant choisi doit être inférieur à 1000');
        return;
    }

    const isNumStartingByZero = isStartingByZero(value);
    if (isNumStartingByZero) {
        setErrorMessage('Le montant choisi ne doit pas commencer par 0');
        return;        
    }

    const billDistribution = distribution(Number(value), stock);
    if(!billDistribution) {
        setErrorMessage("Opération impossible !");
        return;
    }
    
    updateStock(stock, billDistribution);

    setAmount(Number(value));
    setStep(1)
    return;
}