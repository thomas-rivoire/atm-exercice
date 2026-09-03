import type { Bill } from "../Modules/ATM/types/bill";

export function isWithdrawPossible(amount: number, stock: Bill[]): boolean {
    
    let totalValue = 0;

    stock.forEach(billValue => {
        totalValue += billValue.amount * billValue.total;        
    });

    return totalValue > amount;
}