import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ampersand'
})
export class AmpersandPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace(/&amp;/g, '&')
  }

}
