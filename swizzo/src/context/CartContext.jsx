import { useEffect, useMemo } from "react";
import { createContext,useContext,useState } from "react";
const API_BASE = "http://localhost:3000"

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
    console.log("product",Product)
    const existing = cartItem.find((item)=> item.productId === Product.id);
    if(existing){
        await updateQuantity(existing.id,existing.quantity+1,Product.Price)
    }else{
        await fetch(`${API_BASE}/cart`,{
            method:"post",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({
                id:Product.id,
                userId:USER_ID,
                quantity:1,
                price:Product.price,
                addedAt:new Date()
            })


        }) 
    }
    fetchCart();
  }

  const updateQuantity= async (cartId,newQty,Price)=>{
    
    const body = {quantity:newQty}; 
    if(Price !== undefined)body.Price = Price;

    await fetch(`${API_BASE}/cart/${cartId}`,{
        method:"PATCH",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(body)
    })
    fetchCart()
  }

    const removeFromCart = async (cartId)=>{
      await fetch(`${API_BASE}/cart/${cartId}`,{
        method:"DELETE",

    })
    fetchCart()
    }

    const {totalQty,totalAmount} = useMemo(()=>{
         return cartItem.reduce((acc,item)=>{
          acc.totalQty += item.quantity 
          acc.totalAmount += item.quantity*(item.price||0)
          return acc
         },{totalQty:0,totalAmount:0})
    },[cartItem])

  useEffect(()=>{
    fetchCart();    
  },[])




    return <CartContext.Provider value={{cartItem,addToCart,updateQuantity,removeFromCart,totalQty,totalAmount}}>{children}</CartContext.Provider>;
}

export const useCart=()=>useContext(CartContext);