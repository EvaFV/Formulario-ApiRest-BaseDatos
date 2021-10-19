import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearPersonaComponent } from './components/crear-personas/crear-personas.component';
import { ListarPersonaComponent } from './components/listar-personas/listar-personas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientJsonpModule } from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';
// import {  } from "@angular/compiler";

import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from "@angular/material/core";
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    CrearPersonaComponent,
    ListarPersonaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule,
    ToastrModule.forRoot(),
    HttpClientJsonpModule,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule,

    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatNativeDateModule,
    MatIconModule,
    MatExpansionModule,
    FormsModule,
    MatDatepickerModule,

   
    
  



    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
