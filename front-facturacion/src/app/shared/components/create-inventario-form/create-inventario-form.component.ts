import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ValidationCallbackData } from 'devextreme/ui/validation_rules';
import { DxFormComponent, DxFormModule } from 'devextreme-angular/ui/form';
import { DxLoadIndicatorModule } from 'devextreme-angular/ui/load-indicator';
import notify from 'devextreme/ui/notify';
import { InventarioService } from '../../services/inventarios.service';
import { GetInventario } from 'src/app/models/inventario';

import { ProductoService } from '../../services/productos.service';
import { GetProducto, GetProductoLIst } from 'src/app/models/producto';
import {
  DxButtonModule, DxDropDownBoxModule, DxTextBoxModule,
  DxTreeViewModule, DxSelectBoxModule, DxDropDownButtonModule, DxNumberBoxModule
} from "devextreme-angular";



@Component({
  selector: 'app-create-inventario-form',
  templateUrl: './create-inventario-form.component.html',
  styleUrls: ['./create-inventario-form.component.scss']
})
export class CreateInventarioFormComponent {

  loading = false;
  formData: GetInventario[] = [];

  listaProductos: GetProducto[] = [];
  dataProd: any
  listdataProd: any

  listdataProd2: GetProductoLIst[] = []

  constructor(private inventarioService: InventarioService, private router: Router,
    private productServices: ProductoService) {


    //Lista de productos
    <any>this.productServices.getProductos().then((resp) => {
      this.dataProd = resp;
      this.listaProductos = this.dataProd.result

      this.listaProductos.forEach(element => {
        this.listdataProd = {
          id: element.id,
          nombre: element.nombre_producto
        }
        this.listdataProd2.push(this.listdataProd.nombre);
      });
    });

  }


  async onFormSubmit(e: Event) {
    e.preventDefault();

    this.loading = true;
    this.listdataProd = this.formData

    const found = this.listaProductos.find(element => element.nombre_producto == this.listdataProd.id_producto)?.id;
    this.listdataProd.id_producto = "" + found + ""

    var sendObject  = {
      id_producto: parseInt(this.listdataProd.id_producto),
      cantidad: parseInt(this.listdataProd.cantidad),
      valor_und: parseInt(this.listdataProd.valor_und),
      existencia: parseInt(this.listdataProd.existencia)

    }

    const result = await this.inventarioService.postInventario(sendObject)
        
    if (result.isSuccess) {
      notify('INVENTARIO CREADO CON EXITO', 'success', 3000);
      this.router.navigate(['/inventarios']);
    } else {
      notify('result.message', 'error', 2000);
    }
  }

}
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DxFormModule,
    DxLoadIndicatorModule,
    DxSelectBoxModule,
    DxDropDownButtonModule,
    DxDropDownBoxModule,
    DxTreeViewModule,
    DxNumberBoxModule,
    DxTextBoxModule,
    DxButtonModule
  ],
  declarations: [CreateInventarioFormComponent],
  exports: [CreateInventarioFormComponent]
})
export class CreateInventarioFormModule { }
