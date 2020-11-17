import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rangeabv'
})
export class RangeabvPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.filter((beer, index, array) => {
      return beer.abv >= args[0] && beer.abv <= args[1];
    });
  }

}
