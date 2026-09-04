import type { Bill } from "../types/bill";
import type { Option } from "../types/option";

// numRequired = nb de ce billet souhaité
export function checkOneBillStock(stock: Bill[], bill: Bill): number {
    let totalInStock = 0;

    stock.forEach((b: Bill) => {
        if (b.amount === bill.amount) {
            totalInStock = b.total;
        }
    })

    return totalInStock;
}

export function updateStock(stock: Bill[], distribution: Option): void {

    console.log(stock, distribution);
    

}