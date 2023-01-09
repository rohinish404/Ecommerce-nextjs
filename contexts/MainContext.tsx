import { type } from "os";
import { createContext, ReactNode, useContext,useState,useEffect, Dispatch, SetStateAction } from "react";
import {Product,Cart} from '../Interfaces/Product'

type UseContextType= {
    product:Product[]
    idState:number
    setidState:Dispatch<SetStateAction<number>>
    showCart:boolean
    showCartHandler:()=>void
    cartItems:Cart[]
    setCartItems:Dispatch<SetStateAction<Cart[]>>
    setQuantities:number 
    settotalQuantities:Dispatch<SetStateAction<number>>
}
const mainContextDefaultValues: UseContextType = {
    product:[],
    idState:0,
    setidState:()=>{},
    showCart:false,
    showCartHandler:()=>{},
    cartItems:[],
    setCartItems:()=>{}, 
    setQuantities:1,
    settotalQuantities:()=>{}
};
 export const MainContext = createContext<UseContextType>(mainContextDefaultValues);

 export const useProductContext= ()=>useContext(MainContext)

type Props = {
    children: ReactNode;
};

export function ProductProvider(props: Props) {
    const [product,setProduct] = useState([])
    const [loading,isLoading] = useState(true)
    const [idState,setidState] = useState<number>(0)
    const [showCart, setshowCart] = useState(false);
    const [cartItems, setCartItems] = useState<Cart[]>([]);
    const [setQuantities, settotalQuantities] = useState<number>(1);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(data=>{
    
        setProduct(data);
        isLoading(false);
        })
        .catch(err => console.log(err))
      }, []) 

    const showCartHandler = ()=>{
        setshowCart((prev)=>!prev)
    }
    
    const value = {
        product,
        idState,
        setidState,
        showCart,
        showCartHandler,
        cartItems,
        setCartItems,
        setQuantities,
        settotalQuantities
    }
    return (
        <>
            <MainContext.Provider value={value}>
                {props.children}
            </MainContext.Provider>
        </>
    );
}