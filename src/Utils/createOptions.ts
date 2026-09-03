import type { Bill } from "../Modules/ATM/types/bill";
import type { Option } from "../Modules/ATM/types/option"

export function createOptions(amount: number, stock: Bill[]): Option {
    
    let firstOption: Option = {
        litteralValue: '',
        bills: [{
            amount: 0,
            total: 0
        }]
    };
    // let secondOption: Option;
    for (let i = stock.length - 1; i > 0; i--) {
        // if (amount <= stock[i].amount) {
        //     if (stock[i].total > 0) {    
        //         if (amount === stock[i].amount) firstOption = {
        //             litteralValue: '1x' + amount,
        //             bills: [{
        //                 amount: amount,
        //                 total: 1
        //             }]
        //         } 
        //     }
        // }
        
        // à reprendre : fonctionne uniquement pour les valeurs 
        if (amount % stock[i].amount === 0) {
            console.log(stock[i].amount)
            firstOption = {
                litteralValue: `${stock[i].amount / amount}` + 'x' + amount,
                bills: [{
                    amount: amount,
                    total: stock[i].amount / amount
                }]
           }
           break;
        }
    }
    return firstOption;
}