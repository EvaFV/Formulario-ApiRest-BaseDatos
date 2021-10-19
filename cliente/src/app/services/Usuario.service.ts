import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
  
  
export class UsuarioService {
  
 url = 'http://localhost:4000/api/usuario'

  constructor(private http: HttpClient) {}



  
   getUsuario(): Observable<any> {
     return this.http.get(this.url);
   }
  
   eliminarUsuario(id: string): Observable<any> {
    // return this.http.delete(this.url + id);
    return this.http.delete(this.url + `/${id}`);
   }
  obtenerUsuarios(id: string): Observable<any>{
    return this.http.get(this.url + `/${id}`);
  }
  guardarUsuario(usuario: Usuario): Observable<any> {
    return this.http.post(this.url, usuario);
  }
  editarUsuario(id: string, usuario: Usuario): Observable<any>{
    return this.http.put(this.url + `/${id}`, usuario);
  }

 }
