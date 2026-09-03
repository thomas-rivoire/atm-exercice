import type { Bill } from "./bill"

export type StockContextType = {
    stock: Bill[] | []
    setStock: (value: Bill[]) => void
}
