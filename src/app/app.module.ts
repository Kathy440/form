import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { Form1Component } from './form1/form1.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormMaterial2Component } from './form-material2/form-material2.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { CatFormComponent } from './cat-form/cat-form.component';
import { StoreModule } from '@ngrx/store';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { EffectsModule } from '@ngrx/effects';
import { FormEffets } from './effets/form.effets';
import { formReducer } from './reducers/form1.reducer';

import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appEffects, getReducers, REDUCER_TOKEN } from './store/index';

import { AjoutMatiereComponent } from './ajout-matiere/ajout-matiere.component';
import { MatieresComponent } from './matieres/matieres.component';
import { MatiereService } from './service/matiere.service';
import { LocalStorageService } from './service/localStorage.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'form1', component: Form1Component },
  { path: '', component: HomeComponent },
  { path: 'cat', component: CatFormComponent },
  { path: 'formMaterial2', component: FormMaterial2Component },
  { path: 'ajout-matiere', component: AjoutMatiereComponent },
  { path: 'matiere', component: MatieresComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Form1Component,
    HomeComponent,
    FormMaterial2Component,
    CatFormComponent,
    ReadComponent,
    CreateComponent,
    AjoutMatiereComponent,
    MatieresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatButtonModule,
    HttpClientModule,

    StoreModule.forRoot({ form: formReducer })
    /* StoreModule.forRoot(REDUCER_TOKEN),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({
      name: '[test]',
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }) */
  ],
  providers: [
    {
      provide: REDUCER_TOKEN,
      useFactory: getReducers
    },
    MatiereService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
