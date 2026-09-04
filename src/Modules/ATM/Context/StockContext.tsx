import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { StockContextType } from "../types/stock";
import type { Bill } from "../types/bill";

const StockContext = createContext<StockContextType | null>(null);

export function StockProvider({ children }: { children: ReactNode}) {

    const [stock, setStock] = useState<Bill[] | []>([]);

    useEffect(() => {
        setStock([
            {
                amount: 10,
                total: 1
            },
            {
                amount: 20,
                total: 0
            },
            {
                amount: 50,
                total: 0
            },
            {
                amount: 100,
                total: 0
            },
            {
                amount: 200,
                total: 0
            }
        ])
    }, []);

    return (
        <StockContext.Provider value={{stock, setStock}}>
            { children }
        </StockContext.Provider>
    )
}

export function useStock(): StockContextType {
    const context = useContext(StockContext);
    if (!context) throw new Error('useStock doit être utilisé dans un StockProvider');

    return context;
}