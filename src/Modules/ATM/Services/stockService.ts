import { useStock } from "../Context/StockContext";
import type { Bill } from "../types/bill";

// numRequired = nb de ce billet souhaité
export function checkOneBillStock(bill: Bill): number {
    const { stock } = useStock();

    let totalInStock = 0;

    stock.forEach((b: Bill) => {
        if (b.amount === bill.amount) {
            totalInStock = b.total;
        }
    })

    return totalInStock;
}