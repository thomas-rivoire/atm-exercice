import { isEndingByZero, isPositive, isStartingByZero, isUnderMaxAmount } from "./amount-checker";

export default function handleSubmit(
    value: string, 
    setErrorMessage: (message: string) => void,
    setAmount: (amount: number) => void,
    setStep: (step: number) => void
) {

    const isNumEndingByZero = isEndingByZero(Number(value));
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

    setAmount(Number(value));
    setStep(1)
    return;
}