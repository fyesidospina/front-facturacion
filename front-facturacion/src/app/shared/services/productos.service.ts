import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GetProducto, RespuestaPosts } from '../../models/producto';
import DataSource from 'devextreme/data/data_source';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  paginaPosts = 0;

  constructor(private http: HttpClient) { }

  getProductos(){
    return new Promise<GetProducto>(resolve => {
      this.http.get(`${ URL }/api/Producto`).subscribe(resp => {                         
        resolve(resp)        
      });
    });
  }

  async postProducto(obj: GetProducto){
    
    return new Promise<GetProducto>(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
      this.http.post(`${ URL }/api/Producto`, obj, httpOptions).subscribe(resp => {                          
        resolve(resp)        
      });
    });
  }

  async putProducto(id:number, obj: GetProducto){
    console.log("ENDPOINT: ", URL)
    return new Promise<GetProducto>(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
      this.http.put(`${ URL }/api/Producto/`+ id, obj, httpOptions).subscribe(resp => {                          
        resolve(resp)        
      });
    });
  }

  async delProducto(id:number){
    
    return new Promise<GetProducto>(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
      this.http.delete(`${ URL }/api/Producto/`+id).subscribe(resp => {                          
        resolve(resp)        
      });
    });
  }

  async GetProductoById(id:number){
    
    return new Promise<GetProducto>(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
      this.http.get(`${ URL }/api/Producto/`+id).subscribe(resp => {                          
        resolve(resp)        
      });
    });
  }
  
}
