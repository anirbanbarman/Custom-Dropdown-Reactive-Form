import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'searchedFilter'})
export class SearchFilterPipe implements PipeTransform {
    transform(value: any, search: string): any {
         if  (!search) {return value; }
         let searched = value.filter(obj=> {
            if ( !obj ) {return;}
           return  obj.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        })
        return searched;
    }
}