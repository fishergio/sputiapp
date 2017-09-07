import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domsure'
})
export class DomsurePipe implements PipeTransform {

  constructor(private domsanitizer: DomSanitizer){}

  transform(value: string, url: string): SafeResourceUrl {
    
    return this.domsanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
