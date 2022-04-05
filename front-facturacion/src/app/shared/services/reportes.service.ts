import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import DataSource from 'devextreme/data/data_source';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  paginaPosts = 0;

  constructor(private http: HttpClient) { }

  getViewListaProductos(){
    return new Promise<any>(resolve => {
      this.http.get(`${ URL }/api/ViewListaProductos`).subscribe(resp => {                         
        resolve(resp)        
      });
    });
  }


  getViewClienteNoMayor(){
    return new Promise<any>(resolve => {
      this.http.get(`${ URL }/api/ViewClienteNoMayor`).subscribe(resp => {                         
        resolve(resp)        
      });
    });
  }


  getViewPromedioCompra(){
    return new Promise<any>(resolve => {
      this.http.get(`${ URL }/api/ViewPromedioCompra`).subscribe(resp => {                         
        resolve(resp)        
      });
    });
  }

  getViewVentaPorProductoAno(){
    return new Promise<any>(resolve => {
      this.http.get(`${ URL }/api/ViewVentaPorProductoAno`).subscribe(resp => {                         
        resolve(resp)        
      });
    });
  }


  
}
