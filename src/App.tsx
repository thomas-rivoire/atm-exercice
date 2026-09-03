import './App.css'
import { StockProvider } from './Modules/ATM/Context/StockContext'
import Home from './Pages/Home'

function App() {
  return (
    <StockProvider>
        <Home/>
    </StockProvider>
  )
}

export default App
