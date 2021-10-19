import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../models/Usuario';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/Usuario.service';

@Component({
  selector: 'app-crear-personas',
  templateUrl: './crear-personas.component.html',
  styleUrls: ['./crear-personas.component.css']
})
export class CrearPersonaComponent implements OnInit {
  
  formularioForm : FormGroup
  titulo = 'Crear Contacto';
  id: string | null;

  selected: any = {
    Hombre: '',
    Mujer: '',
    Otro: '',
    Noespecificado: '',
  }

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _usuarioService: UsuarioService,
              private aRouter: ActivatedRoute)
  {
    
    
    this.formularioForm = this.fb.group({

      nombre    : new FormControl ('',[Validators.required, Validators.minLength(3), Validators.maxLength(20), this.noNumeros]),
      apellido  : new FormControl ('',[ Validators.required, Validators.minLength(3), Validators.maxLength(20),this.noNumeros]),
      edad      : new FormControl ('',[ Validators.required, this.edadValidar]),
      dni       : new FormControl ('',[ Validators.required, Validators.minLength(9), Validators.maxLength(9), this.dniValid ]),
      cumple    : new FormControl ('',[ Validators.required]),
      color     : new FormControl ('',[ Validators.required, Validators.minLength(3), this.noNumeros]),
      sexo      : new FormControl ('',[ Validators.required ]),
    })
    
    this.id = this.aRouter.snapshot.paramMap.get('id');

   }

  ngOnInit(): void {
    this.esEditar();
    
  }

  addUsuario() {
    console.log(this.formularioForm);

    console.log(this.formularioForm.get('nombre')?.value);

    const Persona : Usuario = {
      nombre      : this.formularioForm.get('nombre')?.value,
      apellido    : this.formularioForm.get('apellido')?.value,
      edad        : this.formularioForm.get('edad')?.value,
      dni         : this.formularioForm.get('dni')?.value,
      cumple      : this.formularioForm.get('cumple')?.value,
      color       : this.formularioForm.get('color')?.value,
      sexo        : this.formularioForm.get('sexo')?.value,
    }
    
    if (this.id !== null) {
      //editar usuario
      this._usuarioService.editarUsuario(this.id, Persona).subscribe(data => {
        this.toastr.info('¡ Contacto actualizado correctamente !')
        this.router.navigate(['/'])
        console.log(data);
      }, error => {
          console.log(error);
          this.formularioForm.reset();
      })
    } else {
      
      //agregar usuario
  
      console.log(Persona);
      
      this._usuarioService.guardarUsuario(Persona).subscribe(data => {
        this.toastr.success('¡ Contacto guardado correctamente !')
        this.router.navigate(['/'])
        console.log(data);
      }, error => {
        console.log(error);
        this.formularioForm.reset();
        
    })
   } 

  }
  
  //METODO PARA ACTUALIZAR DATOS
  esEditar() {

    if (this.id !== null) {
      this.titulo = 'Editar Contacto';
      this._usuarioService.obtenerUsuarios(this.id).subscribe(data => {
        this.formularioForm.setValue({
          nombre   : data.nombre,
          apellido : data.apellido,
          edad     : data.edad,
          dni      : data.dni,
          cumple   : data.cumple,
          color    : data.color,
          sexo     : data.sexo
        })
      })
    }
  }


  //METODO PARA QUE NO SE PUEDAN INTRODUCIR NUMEROS
    noNumeros(formControl : any) {
    const value :any    = formControl.value;
    if (/[a-zA-Z]$/.test(value)) {
      return null;
    } else
      return { noNumeros: 'No se pueden introducir números en este campo' }
    }
  
  //METODO PARA VALIDAR EL DNI Y COMPROBAR QUE EL NUMERO COINCIDE CON LA LETRA
    dniValid(formControl : any):any {
    const value:any = formControl.value;
    // const Regex:RegExp= /^\d{8}[a-zA-Z]$/;

    if (/[a-zA-Z]$/.test(value)) {
      const num:              number = value.substr(0, value.length - 1);
      const letra:            string = value.charAt(value.length - 1);
      const letter_Answer:    string = 'TRWAGMYFPDXBNJZSQVHLCKET';
      const dni_ok:           number = num % 23;
      const let_seleccionada: string = letter_Answer.charAt(dni_ok);

      if (letra.toUpperCase() == let_seleccionada) {
        return null
      }
      return { dniValid: 'Letra de DNI incorrecta ' }
    }
    return { dniValid: 'DNI no válido. Ejemplo DNI -> 01234567L' }
  }


//METODO PARA VALIDAR LA EDAD ENTRE UN MIN Y UN MAX
 edadValidar(formControl : any) {
    const value :  any = formControl.value;
    const min :    number = 0;
    const max :    number = 125;

    if (value >= min && value <= max) {
      return null;
    }
    return { edadValidar: { min, max } };
  }

}

