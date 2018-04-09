import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hidetext',
})
export class HideTextPipe implements PipeTransform {

  transform(value:string,param1:boolean=false):any{
    if(param1==true){
      let hiddenString = "";
      for (let i = 0; i < value.length; i++) { 
        hiddenString += "*";
      }
      return hiddenString;
    }else{
      return value;
    }
  }

}
