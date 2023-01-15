export interface Product{
    id: number;
        title: string;
        price: string;
        category: string;
        description: string;
        image: string;
        quantity:number;
        total:number;
}
export interface Cart{
    id:number;
    title:string;
    price:string;
    image:string;
    quantity:number;
    total:number
}