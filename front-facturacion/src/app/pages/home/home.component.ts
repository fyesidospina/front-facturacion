import { ThisReceiver } from '@angular/compiler';
import { NgModule, Component, enableProdMode, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridComponent, DxButtonModule, DxButtonComponent, DxChartModule } from "devextreme-angular";

//import { Service, ComplaintsWithPercent } from './app.service';
import { ReportesService } from '../../shared/services/reportes.service';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {


  datasource: any;
  listaDatasource: any;
  getViewClienteNoMayor: any
  getViewPromedioCompra: any
  getViewVentaPorProductoAno: any

  constructor(private _reporteServices: ReportesService) { }

  ngOnInit(): void {
    this.loadReporteListaPrecios();
  }


  loadReporteListaPrecios() {

    this._reporteServices.getViewListaProductos().then((resp) => {
      this.datasource = resp
      this.listaDatasource = this.datasource.result
    })

    this._reporteServices.getViewClienteNoMayor().then((resp) => {
      this.datasource = resp
      this.getViewClienteNoMayor = this.datasource.result
    })

    this._reporteServices.getViewPromedioCompra().then((resp) => {
      this.datasource = resp
      this.getViewPromedioCompra = this.datasource.result
    })

    this._reporteServices.getViewVentaPorProductoAno().then((resp) => {
      this.datasource = resp
      this.getViewVentaPorProductoAno = this.datasource.result
    })

    

    console.log("REPORTE1", this.listaDatasource)

  }

}
