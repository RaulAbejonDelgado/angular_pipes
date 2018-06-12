import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    let passw:string;
    if (args === true){
      return value;
    }else{
      passw = "*";
      return (passw.repeat(value.length));
    }
  }

}
