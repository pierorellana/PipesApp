import { Pipe, PipeTransform } from "@angular/core";
import { Heroe } from '../interfaces/heroe.interface';


@Pipe({
    name: 'vuela'
})

export class VuelaPipe implements PipeTransform{
    transform( valor : boolean ) : string {
        return ( valor ) ? 'vuela' : 'no vuela';
    }
}