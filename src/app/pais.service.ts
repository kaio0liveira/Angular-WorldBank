import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http'
import { Observable } from 'rxjs';
import { PaisModel } from './models/pais/pais.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  
  listarPais(): Observable<HttpResponse<PaisModel[]>>{
   return this.http.get<PaisModel[]>(`${environment.apiURL}/countries/bra`, { 
     observe:'response'
   });
  }

}
