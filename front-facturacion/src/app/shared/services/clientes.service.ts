import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
//import { RespuestaPosts } from '../interfaces/interfaces';
import { GetCliente, RespuestaPosts } from '../../models/cliente';
import DataSource from 'devextreme/data/data_source';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  paginaPosts = 0;

  constructor(private http: HttpClient) { }

  // getPosts(pull: boolean = false) {
    
  //   this.paginaPosts ++;
  //   if (pull) {
  //     this.paginaPosts = 0;
  //   }
  //   //return this.http.get<RespuestaPosts>( URL+'/post/?pagina='+ this.paginaPosts);
  // }

  getClientes(){
    return new Promise<GetCliente>(resolve => {
      this.http.get(`${ URL }/api/Cliente`).subscribe(resp => {      
          console.log("servicesss", resp)          
        resolve(resp)        
      });
    });
  }

  async postCliente(obj: GetCliente){
    
    return new Promise<GetCliente>(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
      this.http.post(`${ URL }/api/Cliente`, obj, httpOptions).subscribe(resp => {                          
        resolve(resp)        
      });
    });
  }

  async putCliente(id:number, obj: GetCliente){
    
    return new Promise<GetCliente>(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
      this.http.put(`${ URL }/api/Cliente/`+ id, obj, httpOptions).subscribe(resp => {                          
        resolve(resp)        
      });
    });
  }

  async delCliente(id:number){
    
    return new Promise<GetCliente>(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
      this.http.delete(`${ URL }/api/Cliente/`+id).subscribe(resp => {                          
        resolve(resp)        
      });
    });
  }

  async getClienteById(id:number){
    
    return new Promise<GetCliente>(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
      this.http.get(`${ URL }/api/Cliente/`+id).subscribe(resp => {                          
        resolve(resp)        
      });
    });
  }
  
}
