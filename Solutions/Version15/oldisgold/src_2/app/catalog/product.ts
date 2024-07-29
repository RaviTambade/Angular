export class Product {
    //short cut for get set. initializing properties using constructors
  constructor(private title:string,
    private description:string,
    private price:number,
    private quantity:number,
    private likes:number,
    private imageUrl:string) {}
}
