import { Pipe, PipeTransform } from "@angular/core";
 
//Steps for writing custom pipes
//1. Create new class SellingFlowersPipe
//2. Implement PipeTransform in SellingFlowersPipe class
//3. Implement transform method in  your SellingFlowersPipe class
//4. Decorate your class SellingFlowers class using @pipe


export interface Seller{
  canSell:boolean;
}

@Pipe({ name: 'sellingflowers' })
export class SellingflowersPipe implements PipeTransform {

transform(allfloweres: any[]) {
  return allfloweres.filter(flower => (flower.price <30));
}
}