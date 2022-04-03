import { Component, OnInit, } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductoService } from '../../shared/services/productos.service';
import { GetCliente } from '../../models/cliente';
import { DxDataGridComponent, DxButtonModule, DxButtonComponent } from "devextreme-angular";

import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  interface: GetCliente[] = [];
  objCliente: any;
  dataSource: any;
  priority: any[] = [];
  selectedItemKeys: any[] = [];


  constructor(private apiServices: ProductoService, private router: Router) {

  }

  ngOnInit(): void {

    this.getClientes()
  }

  getClientes() {

    const datos = <GetCliente>this.apiServices.getProductos().then((resp) => {
      this.objCliente = resp;
      this.interface = this.objCliente.result
      this.dataSource = this.interface
    }
    );
  }

  onCreateUserClick = () => {
    this.router.navigate(['/create-product-form']);
  }

  //Actualizar registro
  async onSaving(data: any) {

    this.dataSource = await this.apiServices.GetProductoById(data.changes[0].key
    );

    if (this.dataSource != null) {

      if (data.changes.length > 0) {

        if (data.changes[0].type === 'remove') {

          const result = await this.apiServices.delProducto(data.changes[0].key)
          this.dataSource = result
          console.log("RESP-DELETE", this.dataSource.result)
          if (this.dataSource != null) {
            this.getClientes();
            notify('PRODUCTO ELIMINADO CON EXITO', 'success', 3000);            
            //this.router.navigate(['/clientes']);
          }
        } else {
          data.changes[0].data.id = data.changes[0].key

          const result = await this.apiServices.putProducto(data.changes[0].key, data.changes[0].data)

          this.dataSource = result
          if (this.dataSource != null) {
            this.getClientes();
            notify('PRODUCTO MODIFICADO CON EXITO', 'success', 3000);          
            //this.router.navigate(['/clientes']);
          }
        }
      }
    }
  }
}


