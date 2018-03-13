
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {BrandService} from './../services/brand.service'

@Component({
    selector:'app-brand_addedit',
    templateUrl:'../../partials/Brand_AddEdit.html',
    styleUrls:[]
})
export class Brand_AddEditComponent implements OnInit {
    
    Brand:any={};
    OpTyp:string;

    constructor(private brandService:BrandService, private route: ActivatedRoute){
 
        console.log("constructor");
    };
    
    ngOnInit(){
        
        console.log("ngOnInit");
        let brandId = this.route.snapshot.params['id'];
        if(brandId>0){
            this.OpTyp = "Edit";
            this.getBrandById(brandId);
        } else {
            this.OpTyp = "Add";
        }
    };

    private getBrandById(brandId:number):void{

        this.brandService.getBrandById(brandId).subscribe((res)=>{
            var body = res['_body'];
            var data = JSON.parse(body);
            console.log(data);

            this.Brand = data;
        });
    };
}