import { CountryModel } from "./pais.country";

export class PaisModel{

    
   
    country: CountryModel | undefined;
    //id: CountryModel | undefined;
    date: string | undefined;
    value: string | undefined;

    constructor({date, value, country }: 
        {date?: number;
        value?: string;
        country?: CountryModel;
        }){
            Object.assign(this,{date, value,country})
        }

   
}