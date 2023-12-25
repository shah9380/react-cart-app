import { useState } from "react";

const ProductCard = (props)=>{
    let quantity = props.quantity;
    let[counter,setCounter]=useState(quantity);
    let[isCardVisible,setIsCardVisible] = useState(true);


    const increaseCount = ()=>{
        setCounter(counter+1);
        let price = props.price_number;
        props.incCounter(true, price);
        
    };
    const decreaseCount = (price)=>{
        if(counter > 0){
            setCounter(counter-1);
            let price = props.price_number;
            props.incCounter(false, price);
        }else{
        //    const card = document.getElementById('card');
        //    card.remove();

            // instead we hide the card

            setIsCardVisible(false);
        }
    };
    return(
        <>
            {isCardVisible && (
                <div className="flex justify-center items-center p-4" id="card">
                <img className="w-20" src={props.src} alt="mobileImage"></img>
                <div className="grow flex flex-col justify-center items-start">
                    <h3 className="font-medium text-start">{props.name}</h3>
                    <p><span>$</span><span>{props.price_number}</span></p>
                    <button className="text-blue-600 cursor-pointer" onClick={()=>{setIsCardVisible(false);
                    props.reducingProduct(counter)}}>remove</button>
                </div>
                <div>
                    <button onClick={increaseCount}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path fill="#0049c7" d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/></svg>
                    </button>
                    <p>{counter}</p>
                    <button onClick={decreaseCount}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path fill="#0040ad" d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                    </button>
                </div>
            </div>
            )}
        </>
        
    )
}
export default ProductCard;