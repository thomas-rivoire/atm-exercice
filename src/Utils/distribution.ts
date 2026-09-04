import { checkOneBillStock } from "../Modules/ATM/Services/stockService";
import type { Bill } from "../Modules/ATM/types/bill";
import type { Option } from "../Modules/ATM/types/option"
import { isWithdrawPossible } from "./stock-checker";

export function distribution(amount: number, stock: Bill[]): Option | null {

    const isPossible = isWithdrawPossible(amount, stock);
    if (!isPossible) return null;
    
    let option: Option = {
        bills: [{
            amount: 0,
            total: 0
        }]
    };


    // reste

    // Je parcoure mon stock

        // calculé le nombre de billet que l'on donnée en fonction du type que l'on parcours
        
        // Si le montant calculé < stock.total
        //continue

        // calculé le montant restant, que je set dans le reste

        // Mettre à jour mon stack

        // J'enregistre l'info dans le tableau bills
    
    let rest = amount;

    
    for (let i = stock.length - 1; i >= 0; i--) {
        
        if (rest >= stock[i].amount) {

            let maxUse = Math.floor(rest / stock[i].amount);
            const billStock = checkOneBillStock(stock, stock[i]);

            if (billStock < maxUse) continue;

            const moneyUsed = amount * maxUse;

            option = {
                bills: [{
                    amount: stock[i].amount,
                    total: maxUse
                }]
            }

            rest = moneyUsed % rest;
        }
    }

    return option;
}