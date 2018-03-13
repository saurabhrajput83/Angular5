import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {CustomTableDirective} from './directives/customtable.directive';

import {ColorPipe} from './pipes/color.pipe';

import {BrandService} from './services/brand.service';
import {DepartmentService} from './services/department.service';
import {ProductService} from './services/product.service';

import { AppComponent } from './app.component';
import { Brand_AddEditComponent } from './components/brand_addedit.component';
import { BrandsComponent } from './components/brands.component';
import { DepartmentsComponent } from './components/departments.component';
import { HomeComponent } from './components/home.component';
import { ProductsComponent } from './components/products.component';

@NgModule({
  declarations: [
    ColorPipe,
    CustomTableDirective,
    AppComponent,
    Brand_AddEditComponent,
    BrandsComponent,
    DepartmentsComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'Home', pathMatch: 'full'},
      {path: 'Brand_Add', component:Brand_AddEditComponent},
      {path: 'Brand_Edit/:id', component:Brand_AddEditComponent},
      {path: 'Brands', component:BrandsComponent},
      {path: 'Departments', component:DepartmentsComponent},
      {path: 'Home', component: HomeComponent},
      {path: 'Products', component:ProductsComponent}
    ]),
    HttpModule,
    FormsModule
  ],
  providers: [
    BrandService,
    DepartmentService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
