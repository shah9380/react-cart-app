  import './App.css';
import Header from './cart-components/Header';
import ProductCard from './cart-components/ProductCard';
import { useState } from 'react';
import ProductList from './ProductList.json';

function App() {
  let total = 0;
  let priceTotal = 0;
  let[isCartFull,setCartFull] = useState(true);
  ProductList.forEach((data)=>{
    total += data.quantity;
    priceTotal +=data.price_number;
  })
  
  let[totally,setTotally]=useState(priceTotal)
  let[totalCounter,setTotalCounter]=useState(total);
  function getCounterFn(trek, price){
    if(trek){
      setTotalCounter(totalCounter+1);
      setTotally(totally+price);
    }else{
      setTotalCounter(totalCounter-1);
      setTotally(totally-price);
    }
  }
  function reduceProductFn(quantity){
      setTotalCounter(totalCounter-quantity);
  }
  return (
    <div className="App">
        <Header cartTotal={totalCounter}></Header>
        <div className="mx-auto max-w-[1000px]">
          <h2 className='text-5xl font-semibold mb-8'>Your Bag</h2>
          {isCartFull && (<div>
              {
                ProductList.map((data)=>(
                  <ProductCard reducingProduct={reduceProductFn} incCounter={getCounterFn} {...data}  ></ProductCard>
                ))
              }
          </div>)}
          <div className='border-t-2 border-gray-400'>
              <div className='flex justify-between items-center text-xl font-medium py-2'>
                <h3>Total</h3>
                <p className='bg-rose-300 p-2'><span>$</span><span>{totally}</span></p>
              </div>
              <button onClick={()=>{setCartFull(false);
              setTotalCounter(0);
              setTotally(0);}} className='bg-cyan-400 text-blue-600 px-2 py-1 rounded-md active:scale-[0.97] hover:shadow-lg'>Clear Cart</button>
          </div>
        </div>
    </div>
  );
}

export default App;
