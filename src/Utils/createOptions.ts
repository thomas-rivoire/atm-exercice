import { checkOneBillStock } from "../Modules/ATM/Services/stockService";
import type { Bill } from "../Modules/ATM/types/bill";
import type { Option } from "../Modules/ATM/types/option"

export function createOptions(amount: number, stock: Bill[]): Option[] {

    const options: Option[] = [];

    for (let i = stock.length - 1; i >= 0; i--) {
        if (amount >= stock[i].amount) {

            // maxUse = nb de fois max qu'on peut utiliser ce billet
            let maxUse = Math.floor(stock[i].amount / amount);

            // checker si billet en stock avant de boucler
            const billStock = checkOneBillStock(stock[i]);
            if (billStock < maxUse) {
                // si moins de stock que de billets max possible à la base on remplace le total max par le stock
                maxUse = billStock;
            }

            // checker reste à enlever après utilisation de ce billet pour chaque possibilité
            // checker avec quels billets j'arrive à rendre la somme total et stocker l'option

            // je boucle sur maxUse pour stocker toutes les possibilités avec ce billet
            // stocker i (nombre de billets) si > 0 et passer au billet suivant,

            
            for (let i = 0; i <= maxUse; i++) {

                // options.push({
                //     litteralValue: `${i}x${stock[i].amount}`,
                //     bills: [{
                //         amount: stock[i].amount,
                //         total: i
                //     }]
                // })
            }
        }


    }
    return options;
}