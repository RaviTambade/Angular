
export class Product {
   constructor(private title:string,
    private description:string,
    private price:number,
    private quantity:number,
    public  likes:number,
    private imageUrl:string){}
}