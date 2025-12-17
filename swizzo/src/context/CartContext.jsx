import { useEffect } from "react";
import { createContext,useContext,useState } from "react";
const API_BASE = "http://localhost:3001"

const CartContext = createContext(null)

export function CartProvider({children}){
    const [cartItem,SetCartItem]=useState([])
    const USER_ID=1

  const fetchCart = async () => {
        const res = await fetch(`${API_BASE}/cart?userId=${USER_ID}`)
        const data = await res.json()
        SetCartItem(data);
  }    

  const addToCart= async (Product)=>{
    const existing = cartItem.find((item)=> item.productId === Product.id);
    if(existing){
        await updateQuantity(existing.id,existing.quantity+1,Product.Price)
    }else{
        await fetch(`${API_BASE}/cart`,{
            method:"post",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({
                userId:USER_ID,
                quantity:1,
                price:Product.Price,
                addedAt:new Date()
            })


        }) 
    }
    fetchCart();
  }

  const updateQuantity= async ({cartId,newQty,Price})=>{
    
    const body = {quantity:newQty}; 
    if(Price !== undefined)body.Price = Price;

    await fetch(`${API_BASE}/Cart/${cartId}`,{
        method:"Patch",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(body)
    })

  }

  useEffect(()=>{
    fetchCart();    
  },[])




    return <CartContext.Provider value={{cartItem,addToCart,updateQuantity}}>{children}</CartContext.Provider>;
}

export const useCart=()=>useContext(CartContext);