import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import DataSource from 'devextreme/data/data_source';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  paginaPosts = 0;

  constructor(private http: HttpClient) { }

  getInventario(){
    return new Promise<any>(resolve => {
      this.http.get(`${ URL }/api/Inventario`).subscribe(resp => {                         
        resolve(resp)        
      });
    });
  }

  async postInventario(obj: any){
    
    return new Promise<any>(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }    
      this.http.post(`${ URL }/api/Inventario`, obj, httpOptions).subscribe(resp => {                          
        resolve(resp)        
      });
    });
  }

  async putInventario(id:number, obj: any){
    console.log("ENDPOINT: ", URL)
    return new Promise<any>(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
      this.http.put(`${ URL }/api/Inventario/`+ id, obj, httpOptions).subscribe(resp => {                          
        resolve(resp)        
      });
    });
  }

  async delInventario(id:number){
    
    return new Promise<any>(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
      this.http.delete(`${ URL }/api/Inventario/`+id).subscribe(resp => {                          
        resolve(resp)        
      });
    });
  }

  async getInventarioById(id:number){
    
    return new Promise<any>(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
      this.http.get(`${ URL }/api/Inventario/`+id).subscribe(resp => {                          
        resolve(resp)        
      });
    });
  }
  
}
