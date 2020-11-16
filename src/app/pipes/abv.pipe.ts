import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abv'
})
export class AbvPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let symbol = '%';
    if (args.length > 0){
      symbol = args[0];
    }
    if (typeof value === 'number'){
      const intPart = Math.floor(value);
      const decPart = Math.round(10 * (value % 1));
      return intPart + ',' + decPart + symbol;
    } else {
      console.error('Wrong type in pipe AbvPipe: ' + value);
      return value;
    }
  }

}
