import { createOptions } from "../../../Utils/createOptions";
import type { Bill } from "../types/bill"
interface Props {
    amount: number,
    stock: Bill[]
}

export default function ATMChoice({ amount, stock }: Props) {
    
    const choice = createOptions(amount, stock);

    console.log(choice)

    return (
        ''
    )
}