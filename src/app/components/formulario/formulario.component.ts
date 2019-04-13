import { Component, OnInit } from '@angular/core';
import { ConexionfirebaseService } from 'src/app/services/conexionfirebase.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

item: any = {
  name: ''
}

  constructor(private conexionFirebase : ConexionfirebaseService) { }

  ngOnInit() {
  }

  agregar(){
    this.conexionFirebase.addItem(this.item)
    this.item.name="";
  }

}
