import { useState } from 'react'
import useCurrencyInfo from './Hooks/useCurrencyInfo'
import InputBox from './Components/InputBox'


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfoFrom = useCurrencyInfo(from)
  const optionsFrom = Object.keys(currencyInfoFrom)

  const currencyInfoTo = useCurrencyInfo(to)
  const optionsTo = Object.keys(currencyInfoTo)

 const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount) 
 }

 const convert = () => {setConvertedAmount(amount * currencyInfoFrom[to])}

 const BackgroundImage = "https://images.pexels.com/photos/259209/pexels-photo-259209.jpeg?auto=compress&cs=tinysrgb&w=600"

 return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('${BackgroundImage}')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                     
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          currencyOptions = {optionsFrom}
                          selectCurrency = {from}
                          onCurrencyChange={(currency)=>{
                            setFrom(currency)
                          }}
                          onAmountChange={(amount)=>{
                            setAmount(amount)
                          }}
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="to"
                          amount={convertedAmount}
                          currencyOptions = {optionsTo}
                          selectCurrency = {to}
                          onCurrencyChange={(currency)=>{
                            setTo(currency)
                          }}
                          onAmountChange={(amount)=>{
                            setAmount(amount)
                          }}
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                          onClick={convert}
                  >
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
);

}

export default App
