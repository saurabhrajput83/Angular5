
import {Component, OnInit} from '@angular/core';

import {ProductService} from '../services/product.service';

@Component({
    selector:'app-home',
    templateUrl:'../../partials/Products.html',
    styleUrls:[]
})
export class ProductsComponent implements OnInit {
    
    Products:any[];

    constructor(private productService:ProductService){

    };

    ngOnInit(){
        
        this.getAllProducts();
    };

    hasData(key:string):boolean{
        
        if(this.Products && this.Products.length>0){
            return true;
        }
        return false;
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