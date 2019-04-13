import { Component, OnInit } from '@angular/core';
  import { ConexionfirebaseService } from 'src/app/services/conexionfirebase.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  items : any;

  newItem: any = {
    name: ''
  }

  constructor(private conexionFirebase: ConexionfirebaseService) {
    conexionFirebase.getItems().subscribe(item => {
      this.items = item;
      console.log(this.items);
    });
   }

  ngOnInit() {
  }

  eliminar(item){
    this.conexionFirebase.deleteItem(item)
  }

  modificar(){
    this.conexionFirebase.updateItem(this.newItem);
  }

  seleccionarItem(item){
    this.newItem = item;
  }

}
