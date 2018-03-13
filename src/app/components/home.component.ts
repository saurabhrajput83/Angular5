
import {Component, OnInit} from '@angular/core';

import {BrandService} from './../services/brand.service';
import {DepartmentService} from './../services/department.service';
import {ProductService} from './../services/product.service';

@Component({
    selector:'app-home',
    templateUrl:'../../partials/Home.html',
    styleUrls:[]
})
export class HomeComponent implements OnInit{
    
    Departments:any[];
    Products:any[];

    constructor(private brandService:BrandService, 
        private departmentService: DepartmentService, 
        private productService:ProductService){

    };

    ngOnInit(){

    };

    private getAllDepartments():void{

        this.departmentService.getAllDepartments().subscribe((res)=>{
            var body = res['_body'];
            var data = JSON.parse(body);
            console.log(data);

            this.Departments = data.value;
        });
    };

    private getAllProducts():void{

        this.productService.getAllProducts().subscribe((res)=>{
            var body = res['_body'];
            var data = JSON.parse(body);
            console.log(data);

            this.Products = data.value;
        });
    };
}