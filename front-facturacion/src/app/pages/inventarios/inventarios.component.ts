import { Component, OnInit, } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { InventarioService } from '../../shared/services/inventarios.service';
import { ProductoService } from '../../shared/services/productos.service';
import { GetInventario } from '../../models/inventario';
import { GetProducto } from '../../models/producto';
import {
  DxDataGridComponent, DxButtonModule, DxButtonComponent, DxDropDownBoxModule,
  DxTreeViewModule
} from "devextreme-angular";

import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-inventarios',
  templateUrl: './inventarios.component.html',
  styleUrls: ['./inventarios.component.scss']
})
export class InventariosComponent implements OnInit {

  interface: GetInventario[] = [];
  objData: any;
  dataSource: any;
  listaProductos: GetProducto[] = [];

  constructor(private apiServices: InventarioService, private router: Router, private productServices: ProductoService) {

  }

  ngOnInit(): void {    
    this.getInventarios()
  }

  getInventarios() {

    <any>this.productServices.getProductos().then((resp) => {
      this.objData = resp;
      this.listaProductos = this.objData.result      
    }
    );

    <any>this.apiServices.getInventario().then((resp) => {
      this.objData = resp;
      this.dataSource = this.objData.result
    }
    );    

  }

  onCreateUserClick = () => {
    this.router.navigate(['/create-inventario-form']);
  }

  //Actualizar registro
  async onSaving(data: any) {

    this.dataSource = await this.apiServices.getInventarioById(data.changes[0].key);

    if (this.dataSource != null) {

      if (data.changes.length > 0) {

        if (data.changes[0].type === 'remove') {

          const result = await this.apiServices.delInventario(data.changes[0].key)
          this.dataSource = result

          if (this.dataSource != null) {
            this.getInventarios();
            notify('REGISTRO ELIMINADO CON EXITO', 'success', 3000);
            //this.router.navigate(['/clientes']);
          }
        } else {
          data.changes[0].data.id = data.changes[0].key

          const result = await this.apiServices.putInventario(data.changes[0].key, data.changes[0].data)

          this.dataSource = result
          if (this.dataSource != null) {
            this.getInventarios();
            notify('PRODUCTO MODIFICADO CON EXITO', 'success', 3000);
            //this.router.navigate(['/clientes']);
          }
        }
      }
    }
  }


}


