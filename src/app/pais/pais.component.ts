import { Component, OnInit } from '@angular/core';
import { PaisModel } from '../models/pais/pais.model';
import { PaisService } from '../pais.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  
  pais: PaisModel[] |null = [];

  constructor(private paisService: PaisService) { }

  ngOnInit() {
    this.listarPais();
  }

  listarPais(){
    
    this.paisService.listarPais().subscribe(
      response => {
    this.pais = response.body;
    }, 
      err => {
      console.log('Erro ao listar os PAÍSES', err);

    })
  }

}
