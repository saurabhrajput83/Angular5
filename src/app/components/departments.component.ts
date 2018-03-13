
import {Component, OnInit} from '@angular/core';

import {DepartmentService} from './../services/department.service';

@Component({
    selector:'app-departments',
    templateUrl:'../../partials/Departments.html',
    styleUrls:[]
})
export class DepartmentsComponent implements OnInit {
    
    Departments:any[];
    
    constructor(private departmentService: DepartmentService){

    };

    ngOnInit(){
        
        this.getAllDepartments();
    };

    hasData(key:string):boolean{
        
        if(this.Departments && this.Departments.length>0){
            return true;
        }
        return false;
    };

    private getAllDepartments():void{

        this.departmentService.getAllDepartments().subscribe((res)=>{
            var body = res['_body'];
            var data = JSON.parse(body);
            console.log(data);

            this.Departments = data.value;
        });
    };
}