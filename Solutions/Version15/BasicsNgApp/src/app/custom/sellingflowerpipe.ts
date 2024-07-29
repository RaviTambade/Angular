import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'sellable' })
export class SellingflowersPipe implements PipeTransform {
  transform(allfloweres: any[]) {
    return allfloweres.filter(flower => (flower.canSell == true));
  }
}


@Pipe({ name: 'reasonable' })
export class ReasonablePipe implements PipeTransform {

  transform(allfloweres: any[]) {
    return allfloweres.filter(flower => (flower.unitPrice <20));
  }
}
