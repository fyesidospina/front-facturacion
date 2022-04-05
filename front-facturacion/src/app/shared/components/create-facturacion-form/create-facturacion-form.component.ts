import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ValidationCallbackData } from 'devextreme/ui/validation_rules';
import { DxFormComponent, DxFormModule } from 'devextreme-angular/ui/form';
import { DxLoadIndicatorModule } from 'devextreme-angular/ui/load-indicator';
import notify from 'devextreme/ui/notify';
import { InventarioService } from '../../services/inventarios.service';
import { GetInventario } from 'src/app/models/inventario';
import { FacturacionService } from '../../services/facturacion.service';
import { ClientesService } from '../../services/clientes.service';
import { GetProducto, GetProductoLIst } from 'src/app/models/producto';
import {
  DxButtonModule, DxDropDownBoxModule, DxTextBoxModule,
  DxTreeViewModule, DxSelectBoxModule, DxDropDownButtonModule, DxNumberBoxModule
} from "devextreme-angular";



@Component({
  selector: 'app-create-facturacion-form',
  templateUrl: './create-facturacion-form.component.html',
  styleUrls: ['./create-facturacion-form.component.scss']
})
export class CreateFacturacionFormComponent {

  loading = false;
  formData: any[] = [];
  dataProd: any
  listadataInvent: any
  listaInvent: any[]= [];
  listaInvent2: any[]= [];

  listadataCli: any
  listaCli: any[]= [];
  listaCli2: any[]= [];



  constructor(private inventarioService: InventarioService, private router: Router,
    private clientServices: ClientesService, private factServices: FacturacionService ) {


    //Lista producto inventario
    <any>this.inventarioService.getInventario().then((resp) => {
      this.dataProd = resp;
      this.listaCli = this.dataProd.result
      
      this.listaCli.forEach(element => {
        this.listadataInvent = {
          id_inventario: element.id          
        }
        this.listaInvent2.push(this.listadataInvent.id_inventario);                
      });           
    });

    //Lista clientes
    <any>this.clientServices.getClientes().then((resp) => {
      this.dataProd = resp;
      this.listadataCli = this.dataProd.result
      
      this.listaCli.forEach(element => {
        this.listadataCli = {
          id_cliente: element.id          
        }

        this.listaCli2.push(this.listadataCli.id_cliente);
                
      });  
    });
  
  }

  async onFormSubmit(e: Event) {
    e.preventDefault();

    this.loading = true;
    this.dataProd = this.formData

    var fecha = new Date();

    var sendObject = {
      fecha_compra : fecha,
      id_inventario: parseInt(this.dataProd.id_inventario),
      id_cliente: parseInt(this.dataProd.id_cliente),      
      cantidad: parseInt(this.dataProd.cantidad),
      valor_und: parseInt(this.dataProd.valor_und),
      existencia: parseInt(this.dataProd.existencia),
      descripcion: this.dataProd.descripcion

    }

    const result = await this.factServices.postFacturacion(sendObject)

    if (result) {
      notify('VENTA REGISTRADA CON EXITO', 'success', 3000);
      this.router.navigate(['/facturacion']);
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
  declarations: [CreateFacturacionFormComponent],
  exports: [CreateFacturacionFormComponent]
})
export class CreateFacturacionFormModule { }
