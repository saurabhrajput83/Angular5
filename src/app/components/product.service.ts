
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Response } from '@angular/http/src/static_response';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProductService{
    
    private baseUrl:string = "http://services.odata.org/V3/(S(nl1y5a20t4nvntr0v4llwdxy))/OData/OData.svc/";

    constructor(private http:Http){

    }

    getAllProducts():Observable<Response>{
        
        var url:string = this.baseUrl + "Products";
        return this.http.get(url);
    };

    getProductById(productId:number):Observable<Response>{
        
        var url:string = this.baseUrl + "Products(" + productId + ")";
        return this.http.get(url);
    };
}