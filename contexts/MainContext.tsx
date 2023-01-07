import { type } from "os";
import { createContext, ReactNode, useContext,useState,useEffect } from "react";
import {Product} from '../Interfaces/Product'

type UseContextType= {
    product:Product[]
   }
const mainContextDefaultValues: UseContextType = {
    product:[],
};
 export const MainContext = createContext<UseContextType>(mainContextDefaultValues);

 export const useProductContext= ()=>useContext(MainContext)

type Props = {
    children: ReactNode;
};

export function ProductProvider(props: Props) {
    const [product,setProduct] = useState([])
    const [loading,isLoading] = useState(true)
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(data=>{
    
        setProduct(data);
        isLoading(false);
        })
        .catch(err => console.log(err))
      }, []) 
    const value = {
        product
    }
    return (
        <>
            <MainContext.Provider value={value}>
                {props.children}
            </MainContext.Provider>
        </>
    );
}