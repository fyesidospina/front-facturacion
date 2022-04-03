import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GetInventario, RespuestaPosts } from '../../models/inventario';
import DataSource from 'devextreme/data/data_source';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  paginaPosts = 0;

  constructor(private http: HttpClient) { }

  getInventario(){
    return new Promise<GetInventario>(resolve => {
      this.http.get(`${ URL }/api/Inventario`).subscribe(resp => {                         
        resolve(resp)        
      });
    });
  }

  async postInventario(obj: GetInventario){
    
    return new Promise<GetInventario>(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
      this.http.post(`${ URL }/api/Inventario`, obj, httpOptions).subscribe(resp => {                          
        resolve(resp)        
      });
    });
  }

  async putInventario(id:number, obj: GetInventario){
    console.log("ENDPOINT: ", URL)
    return new Promise<GetInventario>(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
      this.http.put(`${ URL }/api/Inventario/`+ id, obj, httpOptions).subscribe(resp => {                          
        resolve(resp)        
      });
    });
  }

  async delInventario(id:number){
    
    return new Promise<GetInventario>(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
      this.http.delete(`${ URL }/api/Inventario/`+id).subscribe(resp => {                          
        resolve(resp)        
      });
    });
  }

  async getInventarioById(id:number){
    
    return new Promise<GetInventario>(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
      this.http.get(`${ URL }/api/Inventario/`+id).subscribe(resp => {                          
        resolve(resp)        
      });
    });
  }
  
}
