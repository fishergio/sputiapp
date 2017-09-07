import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(value: any[]): string {

    let noimagex = 'assets/img/noimage.png';

    if(!value) {
      return noimagex;
    }
    return (value.length > 0) ? value[1].url : noimagex;
  }

}
