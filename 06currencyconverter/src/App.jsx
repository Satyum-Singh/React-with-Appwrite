import './App.css'
import InputBox from './components/InputBox'
import { useState } from 'react'
import useCurrencyInfo from './Hooks/useCurrencyInfo'
import background from './assets/background.jpg'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    const temp = from
    setFrom(to)
    setTo(temp)

    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cver bg-no-repeat' style={{ backgroundImage: `url(${background})` }}>
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form className='flex flex-col justify-center items-center gap-y-1' onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}>
              <div className="w-full mb-1">
                <InputBox
                  label="from"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectedCurrency={from}
                />
              </div>
              <div className="relative w-full h-0 5">
                <button onClick={swap} className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-blue-600 text-white border-2 border-white justify-center px-2 py-1">
                  Swap
                </button>
              </div>
              <div className="w-full mb-1">
                <InputBox
                  label="to"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectedCurrency={to}
                  amountDisabled
                />
              </div>
              <button className='mt-3 w-1/2 border-2 border-y-white bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 scale' type='submit'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
