import { Component, OnInit, } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { InventarioService } from '../../shared/services/inventarios.service';
import { ClientesService } from '../../shared/services/clientes.service';
import { FacturacionService } from '../../shared/services/facturacion.service';
import { ProductoService } from '../../shared/services/productos.service';
import { GetInventario } from '../../models/inventario';
import { GetProducto } from '../../models/producto';
import {
  DxDataGridComponent, DxButtonModule, DxButtonComponent, DxDropDownBoxModule,
  DxTreeViewModule
} from "devextreme-angular";

import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.scss']
})
export class FacturacionComponent implements OnInit {

  objData: any;
  dataSource: any;
  listaClientes: any[] = [];
  listaInventarios: any[] = [];
  listaFacturacion: any[] = [];
  listaProductos: any[] = [];
  listaGrid: any[] = [];

  constructor(private apiServices: InventarioService, private router: Router, 
          private clienteServices: ClientesService, private factService: FacturacionService,
          private productServices: ProductoService) {

  }

  ngOnInit(): void {    
    this.LoadData()
  }

  LoadData() {

    <any>this.clienteServices.getClientes().then((resp) => {
      this.objData = resp;
      this.listaClientes = this.objData.result      
      console.log("LISTCLIENT", this.listaClientes)
    });

    <any>this.apiServices.getInventario().then((resp) => {
      this.objData = resp;
      this.listaInventarios = this.objData.result
      console.log("LISTINVEN", this.listaInventarios)
    });    

    <any>this.factService.getFacturacion().then((resp) => {
      this.objData = resp;
      this.listaFacturacion = this.objData.result
    });

    <any>this.productServices.getProductos().then((resp) => {
      this.objData = resp;
      this.listaProductos = this.objData.result
    });

  }

  onCreateFacturacionClick = () => {
    this.router.navigate(['/create-facturacion-form']);
  }

  //Actualizar registro
  async onSaving(data: any) {

    this.dataSource = await this.factService.getFacturacionById(data.changes[0].key);

    if (this.dataSource != null) {

      if (data.changes.length > 0) {

        if (data.changes[0].type === 'remove') {

          const result = await this.factService.delFacturacion(data.changes[0].key)
          this.dataSource = result

          if (this.dataSource != null) {
            this.LoadData();
            notify('REGISTRO ELIMINADO CON EXITO', 'success', 3000);
            //this.router.navigate(['/clientes']);
          }
        } else {
          data.changes[0].data.id = data.changes[0].key

          console.log("FACUP",data.changes[0].key, data.changes[0].data)

          const result = await this.factService.putFacturacion(data.changes[0].key, data.changes[0].data)

          this.dataSource = result
          if (this.dataSource != null) {
            this.LoadData();
            notify('REGISTRO MODIFICADO CON EXITO', 'success', 3000);
            //this.router.navigate(['/clientes']);
          }
        }
      }
    }
  }

 


}


