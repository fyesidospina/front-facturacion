import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import DataSource from 'devextreme/data/data_source';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class FacturacionService {

  paginaPosts = 0;

  constructor(private http: HttpClient) { }

  getFacturacion(){
    return new Promise<any>(resolve => {
      this.http.get(`${ URL }/api/Facturacion`).subscribe(resp => {                         
        resolve(resp)        
      });
    });
  }

  async postFacturacion(obj: any){
    
    return new Promise<any>(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }    
      this.http.post(`${ URL }/api/Facturacion`, obj, httpOptions).subscribe(resp => {                          
        resolve(resp)        
      });
    });
  }

  async putFacturacion(id:number, obj: any){
    
    console.log("services", id, obj)

    return new Promise<any>(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
      this.http.put(`${ URL }/api/Facturacion/`+ id, obj, httpOptions).subscribe(resp => {                          
        resolve(resp)        
      });
    });
  }

  async delFacturacion(id:number){
    
    return new Promise<any>(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
      this.http.delete(`${ URL }/api/Facturacion/`+id).subscribe(resp => {                          
        resolve(resp)        
      });
    });
  }

  async getFacturacionById(id:number){
    
    return new Promise<any>(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
      this.http.get(`${ URL }/api/Facturacion/`+id).subscribe(resp => {                          
        resolve(resp)        
      });
    });
  }
  
}
