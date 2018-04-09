import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendtext',
})
export class AppendTextPipe implements PipeTransform {

  transform(value:string,param1:string):string{
    return value+' '+param1;
  }

}
