import type { Bill } from "../types/bill";
import { isWithdrawPossible } from "../../../Utils/stock-checker";

interface Props {
    amount: number,
    stock: Bill[],
    setErrorMessage: (message: string) => void,
    setStep: (step: number) => void
}

export default function ATMLoader({ amount, stock, setErrorMessage, setStep }: Props) {

    const isWithdrawValid = isWithdrawPossible(amount, stock);

    if (!isWithdrawValid) {        
        setErrorMessage('Nous ne disposons pas du montant souhaité. Veuillez réessayer avec une somme moins élevée.');
        setTimeout(() => {
           setStep(0);
           setErrorMessage('');
           return;
        }, 2000);
    } else {
        setStep(2)
    }
    

    return (
            <p>Vérification en cours. Veuillez patienter...</p>
    )
}