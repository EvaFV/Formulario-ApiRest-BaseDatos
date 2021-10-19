import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../../services/Usuario.service";
import { Usuario } from '../../models/Usuario';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.css']
})
export class ListarPersonaComponent implements OnInit {
  listUsuarios: Usuario[] = [];

  constructor(private _usuarioService: UsuarioService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
     this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this._usuarioService.getUsuario().subscribe(data => {
      console.log(data);
      this.listUsuarios = data;
    }, error => {
      console.log(error);
    })
  }
  eliminarUsuario(id: any) {
    this._usuarioService.eliminarUsuario(id).subscribe(data => {
      this.toastr.error('El contacto fue eliminado con éxito! ', 'Contacto Eliminado')
      console.log(data);
      this.obtenerUsuarios();
    }, error => {
      console.log(error)
     

    })
    
  }

 }
