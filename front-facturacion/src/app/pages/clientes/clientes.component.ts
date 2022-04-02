import { Component, OnInit, } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ClientesService } from '../../shared/services/clientes.service';
import { GetCliente } from '../../models/cliente';
import { DxDataGridComponent, DxButtonModule, DxButtonComponent } from "devextreme-angular";


import notify from 'devextreme/ui/notify';




@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  interface: GetCliente[] = [];
  objCliente: any;
  dataSource: any;
  priority: any[] = [];
  selectedItemKeys: any[] = [];


  constructor(private apiServices: ClientesService, private router: Router) {

  }

  ngOnInit(): void {

    this.getClientes()
  }

  getClientes() {

    const datos = <GetCliente>this.apiServices.getClientes().then((resp) => {
      this.objCliente = resp;
      this.interface = this.objCliente.result
      this.dataSource = this.interface
    }
    );
  }

  onCreateUserClick = () => {
    this.router.navigate(['/create-client-form']);
  }


  //Actualizar registro
  async onSaving(data: any) {


    this.dataSource = await this.apiServices.getClienteById(data.changes[0].key.id);

    console.log("inicio", this.dataSource)

    if (this.dataSource != null) {
      if (data.changes.length > 0) {

        console.log("inicio", data.changes[0].data)
        data.changes[0].data.id = data.changes[0].key
  
        const result = await this.apiServices.putCliente(data.changes[0].key, data.changes[0].data)
  
        this.dataSource = result
        if (this.dataSource != null) {
          this.getClientes();
          notify('CLIENTE MODIFICADO CON EXITO', 'success', 3000);
          console.log("ELIF", this.dataSource.result)
          //this.router.navigate(['/clientes']);
        }
      }  
    }

    
  }



}


