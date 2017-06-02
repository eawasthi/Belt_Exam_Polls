import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

transform(value: any[], filter_name: string): any {
  	if(!filter_name){ return value }

  	return value.filter(result => result._User.Name.indexOf(filter_name) > -1)
}

}
