
import {Component, OnInit} from '@angular/core';

import {BrandService} from './../services/brand.service'

@Component({
    selector:'app-brands',
    templateUrl:'../../partials/Brands.html',
    styleUrls:[]
})
export class BrandsComponent implements OnInit {
    
    Brands:any[];

    constructor(private brandService:BrandService){
        
        console.log("constructor");
    };

    hasData(key:string):boolean{
        
        if(this.Brands && this.Brands.length>0){
            return true;
        }
        return false;
    };

    ngOnInit(){
        
        console.log("ngOnInit");
        this.getAllBrands();
    };

    private getAllBrands():void{

        this.brandService.getAllBrands().subscribe((res)=>{
            var body = res['_body'];
            var data = JSON.parse(body);
            console.log(data);

            this.Brands = data.value;
        });
    };
}