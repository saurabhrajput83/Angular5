webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container\">\n    <nav class=\"navbar navbar-default\">\n      <div class=\"col-md-6\">\n        <h5>Angular5 Demo</h5>\n      </div>\n      <div class=\"col-md-6\">\n        <ul class=\"nav nav-pills\">\n          <li><a routerLink=\"Home\">Home</a></li>\n          <li><a routerLink=\"Brands\">Brands</a></li>\n          <li><a routerLink=\"Departments\">Departments</a></li>\n          <li><a routerLink=\"Products\">Products</a></li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n</header>\n<section>\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n</section>\n<footer>\n    <div class=\"container\">\n      @Copyright \n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_customtable_directive__ = __webpack_require__("./src/app/directives/customtable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_color_pipe__ = __webpack_require__("./src/app/pipes/color.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_brand_service__ = __webpack_require__("./src/app/services/brand.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_department_service__ = __webpack_require__("./src/app/services/department.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_brand_addedit_component__ = __webpack_require__("./src/app/components/brand_addedit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_brands_component__ = __webpack_require__("./src/app/components/brands.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_departments_component__ = __webpack_require__("./src/app/components/departments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_home_component__ = __webpack_require__("./src/app/components/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_products_component__ = __webpack_require__("./src/app/components/products.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__pipes_color_pipe__["a" /* ColorPipe */],
                __WEBPACK_IMPORTED_MODULE_5__directives_customtable_directive__["a" /* CustomTableDirective */],
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_brand_addedit_component__["a" /* Brand_AddEditComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_brands_component__["a" /* BrandsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_departments_component__["a" /* DepartmentsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_products_component__["a" /* ProductsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot([
                    { path: '', redirectTo: 'Home', pathMatch: 'full' },
                    { path: 'Brand_Add', component: __WEBPACK_IMPORTED_MODULE_11__components_brand_addedit_component__["a" /* Brand_AddEditComponent */] },
                    { path: 'Brand_Edit/:id', component: __WEBPACK_IMPORTED_MODULE_11__components_brand_addedit_component__["a" /* Brand_AddEditComponent */] },
                    { path: 'Brands', component: __WEBPACK_IMPORTED_MODULE_12__components_brands_component__["a" /* BrandsComponent */] },
                    { path: 'Departments', component: __WEBPACK_IMPORTED_MODULE_13__components_departments_component__["a" /* DepartmentsComponent */] },
                    { path: 'Home', component: __WEBPACK_IMPORTED_MODULE_14__components_home_component__["a" /* HomeComponent */] },
                    { path: 'Products', component: __WEBPACK_IMPORTED_MODULE_15__components_products_component__["a" /* ProductsComponent */] }
                ]),
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_brand_service__["a" /* BrandService */],
                __WEBPACK_IMPORTED_MODULE_8__services_department_service__["a" /* DepartmentService */],
                __WEBPACK_IMPORTED_MODULE_9__services_product_service__["a" /* ProductService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/brand_addedit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Brand_AddEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_brand_service__ = __webpack_require__("./src/app/services/brand.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Brand_AddEditComponent = /** @class */ (function () {
    function Brand_AddEditComponent(brandService, route) {
        this.brandService = brandService;
        this.route = route;
        this.Brand = {};
        console.log("constructor");
    }
    ;
    Brand_AddEditComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit");
        var brandId = this.route.snapshot.params['id'];
        if (brandId > 0) {
            this.OpTyp = "Edit";
            this.getBrandById(brandId);
        }
        else {
            this.OpTyp = "Add";
        }
    };
    ;
    Brand_AddEditComponent.prototype.getBrandById = function (brandId) {
        var _this = this;
        this.brandService.getBrandById(brandId).subscribe(function (res) {
            var body = res['_body'];
            var data = JSON.parse(body);
            console.log(data);
            _this.Brand = data;
        });
    };
    ;
    Brand_AddEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-brand_addedit',
            template: __webpack_require__("./src/partials/Brand_AddEdit.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_brand_service__["a" /* BrandService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], Brand_AddEditComponent);
    return Brand_AddEditComponent;
}());



/***/ }),

/***/ "./src/app/components/brands.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_brand_service__ = __webpack_require__("./src/app/services/brand.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrandsComponent = /** @class */ (function () {
    function BrandsComponent(brandService) {
        this.brandService = brandService;
        console.log("constructor");
    }
    ;
    BrandsComponent.prototype.hasData = function (key) {
        if (this.Brands && this.Brands.length > 0) {
            return true;
        }
        return false;
    };
    ;
    BrandsComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit");
        this.getAllBrands();
    };
    ;
    BrandsComponent.prototype.getAllBrands = function () {
        var _this = this;
        this.brandService.getAllBrands().subscribe(function (res) {
            var body = res['_body'];
            var data = JSON.parse(body);
            console.log(data);
            _this.Brands = data.value;
        });
    };
    ;
    BrandsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-brands',
            template: __webpack_require__("./src/partials/Brands.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_brand_service__["a" /* BrandService */]])
    ], BrandsComponent);
    return BrandsComponent;
}());



/***/ }),

/***/ "./src/app/components/departments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_department_service__ = __webpack_require__("./src/app/services/department.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DepartmentsComponent = /** @class */ (function () {
    function DepartmentsComponent(departmentService) {
        this.departmentService = departmentService;
    }
    ;
    DepartmentsComponent.prototype.ngOnInit = function () {
        this.getAllDepartments();
    };
    ;
    DepartmentsComponent.prototype.hasData = function (key) {
        if (this.Departments && this.Departments.length > 0) {
            return true;
        }
        return false;
    };
    ;
    DepartmentsComponent.prototype.getAllDepartments = function () {
        var _this = this;
        this.departmentService.getAllDepartments().subscribe(function (res) {
            var body = res['_body'];
            var data = JSON.parse(body);
            console.log(data);
            _this.Departments = data.value;
        });
    };
    ;
    DepartmentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-departments',
            template: __webpack_require__("./src/partials/Departments.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_department_service__["a" /* DepartmentService */]])
    ], DepartmentsComponent);
    return DepartmentsComponent;
}());



/***/ }),

/***/ "./src/app/components/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_brand_service__ = __webpack_require__("./src/app/services/brand.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_department_service__ = __webpack_require__("./src/app/services/department.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(brandService, departmentService, productService) {
        this.brandService = brandService;
        this.departmentService = departmentService;
        this.productService = productService;
    }
    ;
    HomeComponent.prototype.ngOnInit = function () {
    };
    ;
    HomeComponent.prototype.getAllDepartments = function () {
        var _this = this;
        this.departmentService.getAllDepartments().subscribe(function (res) {
            var body = res['_body'];
            var data = JSON.parse(body);
            console.log(data);
            _this.Departments = data.value;
        });
    };
    ;
    HomeComponent.prototype.getAllProducts = function () {
        var _this = this;
        this.productService.getAllProducts().subscribe(function (res) {
            var body = res['_body'];
            var data = JSON.parse(body);
            console.log(data);
            _this.Products = data.value;
        });
    };
    ;
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/partials/Home.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_brand_service__["a" /* BrandService */],
            __WEBPACK_IMPORTED_MODULE_2__services_department_service__["a" /* DepartmentService */],
            __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productService) {
        this.productService = productService;
    }
    ;
    ProductsComponent.prototype.ngOnInit = function () {
        this.getAllProducts();
    };
    ;
    ProductsComponent.prototype.hasData = function (key) {
        if (this.Products && this.Products.length > 0) {
            return true;
        }
        return false;
    };
    ;
    ProductsComponent.prototype.getAllProducts = function () {
        var _this = this;
        this.productService.getAllProducts().subscribe(function (res) {
            var body = res['_body'];
            var data = JSON.parse(body);
            console.log(data);
            _this.Products = data.value;
        });
    };
    ;
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/partials/Products.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/directives/customtable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomTableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomTableDirective = /** @class */ (function () {
    function CustomTableDirective(el) {
        this.el = el;
        //this.el.nativeElement.outerHTML = "<table><tr><td>1</td><td>1</td></tr></table>";
    }
    ;
    CustomTableDirective.prototype.ngOnInit = function () {
    };
    ;
    CustomTableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[customtable]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], CustomTableDirective);
    return CustomTableDirective;
}());

;


/***/ }),

/***/ "./src/app/pipes/color.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColorPipe = /** @class */ (function () {
    function ColorPipe() {
    }
    ;
    ColorPipe.prototype.transform = function (val) {
    };
    ColorPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'color'
        }),
        __metadata("design:paramtypes", [])
    ], ColorPipe);
    return ColorPipe;
}());



/***/ }),

/***/ "./src/app/services/brand.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrandService = /** @class */ (function () {
    function BrandService(http) {
        this.http = http;
        this.baseUrl = "http://services.odata.org/V3/(S(nl1y5a20t4nvntr0v4llwdxy))/OData/OData.svc/";
    }
    BrandService.prototype.getAllBrands = function () {
        var url = this.baseUrl + "Suppliers";
        return this.http.get(url);
    };
    ;
    BrandService.prototype.getBrandById = function (brandId) {
        var url = this.baseUrl + "Suppliers(" + brandId + ")";
        return this.http.get(url);
    };
    ;
    BrandService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], BrandService);
    return BrandService;
}());



/***/ }),

/***/ "./src/app/services/department.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DepartmentService = /** @class */ (function () {
    function DepartmentService(http) {
        this.http = http;
        this.baseUrl = "http://services.odata.org/V3/(S(nl1y5a20t4nvntr0v4llwdxy))/OData/OData.svc/";
    }
    DepartmentService.prototype.getAllDepartments = function () {
        var url = this.baseUrl + "Categories";
        return this.http.get(url);
    };
    ;
    DepartmentService.prototype.getDepartmentById = function (departmentId) {
        var url = this.baseUrl + "Categories(" + departmentId + ")";
        return this.http.get(url);
    };
    ;
    DepartmentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DepartmentService);
    return DepartmentService;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.baseUrl = "http://services.odata.org/V3/(S(nl1y5a20t4nvntr0v4llwdxy))/OData/OData.svc/";
    }
    ProductService.prototype.getAllProducts = function () {
        var url = this.baseUrl + "Products";
        return this.http.get(url);
    };
    ;
    ProductService.prototype.getProductById = function (productId) {
        var url = this.baseUrl + "Products(" + productId + ")";
        return this.http.get(url);
    };
    ;
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/partials/Brand_AddEdit.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"brand_AddEdit_content\">\r\n    <nav aria-label=\"breadcrumb\">\r\n        <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\"><a routerLink=\"../../Home\">Home</a></li>\r\n            <li class=\"breadcrumb-item\"><a routerLink=\"../../Brands\">Brands</a></li>\r\n            <li class=\"breadcrumb-item active\">{{OpTyp}} Brand</li>\r\n        </ol>\r\n    </nav>\r\n    <br />\r\n    <section>\r\n        <form id=\"brand_AddEdit_form\" name=\"brand_AddEdit_form\" role=\"form\">\r\n            <input type=\"hidden\" id=\"Id\" name=\"Id\" [(ngModel)]=\"Brand.Id\"   />\r\n            <fieldset>\r\n                <div class=\"text-danger validation-summary-error\">\r\n                    <ul>\r\n                        <li data-ng-if=\"!brand_AddEdit_form.Name.$valid\">The Name field is required.</li>\r\n                        <li data-ng-if=\"!brand_AddEdit_form.Description.$valid\">The Name Description is required.</li>\r\n                    </ul>\r\n                </div>\r\n                <legend>{{OpTyp}} Brand</legend>\r\n                <div class=\"form-group\">\r\n                    <label for=\"Name\">Name</label>\r\n                    <input type=\"text\" id=\"Name\" name=\"Name\" [(ngModel)]=\"Brand.Name\"   class=\"form-control\" required />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"Description\">Description</label>\r\n                    <textarea type=\"text\" id=\"Description\" name=\"Description\" [(ngModel)]=\"Brand.Description\"   class=\"form-control\" required></textarea>\r\n                </div>\r\n                <div class=\"form-check\">\r\n                    <input type=\"checkbox\" id=\"IsHidden\" name=\"IsHidden\" [(ngModel)]=\"Brand.IsHidden\"   />\r\n                    <label for=\"IsHidden\">Is Hidden</label>\r\n                </div>\r\n                <input type=\"button\" class=\"btn btn-primary\" value=\"Save\" data-ng-click=\"Brand_CreateUpdate(brand_AddEdit_form.$valid)\" />\r\n                <input type=\"reset\" class=\"btn btn-primary\" value=\"Reset\" />\r\n            </fieldset>\r\n        </form>\r\n    </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/partials/Brands.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"brands_content\">\r\n    <nav aria-label=\"breadcrumb\">\r\n        <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\"><a routerLink=\"../Home\">Home</a></li>\r\n            <li class=\"breadcrumb-item active\">Brands</li>\r\n        </ol>\r\n    </nav>\r\n    <br />\r\n    <section class=\"actions right\">\r\n        <a class=\"btn btn-primary\" routerLink=\"Brand_Add\">Add New Brand</a>\r\n    </section>\r\n    <br />\r\n    <section class=\"data\">\r\n        <div *ngIf=\"hasData('Brands')\">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                    <tr>\r\n                        <th scope=\"col\">Id</th>\r\n                        <th scope=\"col\">Name</th>\r\n                        <th scope=\"col\">Address</th>\r\n                        <th scope=\"col\"></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let brand of Brands\">\r\n                        <td>{{brand.ID}}</td>\r\n                        <td>{{brand.Name}}</td>\r\n                        <td>{{brand.Address.Street}}, {{brand.Address.City}}, {{brand.Address.State}}, {{brand.Address.Country}} ({{brand.Address.ZipCode}})</td>\r\n                        <td>\r\n                            <a routerLink=\"../Brand_Edit/{{brand.ID}}\">Edit</a> |\r\n                            <a data-ng-click=\"brand_Delete(brand.Id)\">Delete</a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div *ngIf=\"!hasData('Brands')\">\r\n            <p>No data found.</p>\r\n        </div>\r\n    </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/partials/Departments.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"departments_content\">\r\n    <nav aria-label=\"breadcrumb\">\r\n        <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\"><a routerLink=\"../Home\">Home</a></li>\r\n            <li class=\"breadcrumb-item active\">Departments</li>\r\n        </ol>\r\n    </nav>\r\n    <br />\r\n    <section class=\"actions right\">\r\n        <a class=\"btn btn-primary\" href=\"#!/Department_Add\">Add New Department</a>\r\n    </section>\r\n    <br />\r\n    <section class=\"data\">\r\n        <div data-ng-if=\"hasData('Departments')\">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                    <tr>\r\n                        <th scope=\"col\">Id</th>\r\n                        <th scope=\"col\">Name</th>\r\n                        <th></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let department of Departments\">\r\n                        <td>{{department.ID}}</td>\r\n                        <td>{{department.Name}}</td>\r\n                        <td>\r\n                            <a routerLink=\"../Product_Edit/{{department.ID}}\">Edit</a> |\r\n                            <a data-ng-click=\"Model_Delete('Department', department.Id)\">Delete</a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div data-ng-if=\"!hasData('Departments')\">\r\n            <p>No data found.</p>\r\n        </div>\r\n    </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/partials/Home.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"banner\" class=\"jumbotron\">\r\n        <h2>AngularJS Demo</h2>\r\n        <p>The is an AngularJS Demo appliocation.</p>\r\n        <p>This application uses AngularJS, Bootstrap, jQuery.</p>\r\n</div>\r\n<div id=\"home_content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <ul class=\"list-group\">\r\n                <li class=\"list-group-item\"><h5>Brands</h5></li>\r\n                <li class=\"list-group-item\" *ngFor=\"let brand of Brands | slice:0:2\">{{brand.Name}}</li>\r\n                <li class=\"list-group-item\">\r\n                    <a href=\"#!/Brand_Add\">Create Brand</a> | <a href=\"#!/Brands\">View All</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <ul class=\"list-group\">\r\n                <li class=\"list-group-item\"><h5>Departments</h5></li>\r\n                <li class=\"list-group-item\" *ngFor=\"let department of Departments | slice:0:2\">{{department.Name}}</li>\r\n                <li class=\"list-group-item\">\r\n                    <a href=\"#!/Department_Add\">Create Department</a> | <a href=\"#!/Departments\">View All</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <ul class=\"list-group\">\r\n                <li class=\"list-group-item\"><h5>Products</h5></li>\r\n                <li class=\"list-group-item\" *ngFor=\"let product of Products | slice:0:2\">{{product.Name}}</li>\r\n                <li class=\"list-group-item\">\r\n                    <a href=\"#!/Product_Add\">Create Prkoduct</a> | <a href=\"#!/Products\">View All</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/partials/Products.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"products_content\">\r\n    <nav aria-label=\"breadcrumb\">\r\n        <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\"><a routerLink=\"../Home\">Home</a></li>\r\n            <li class=\"breadcrumb-item active\">Products</li>\r\n        </ol>\r\n    </nav>\r\n    <br />\r\n    <section class=\"actions\">\r\n        <a class=\"btn btn-primary\" href=\"#!/Product_Add\">Add New Product</a>\r\n    </section>\r\n    <br />\r\n    <section class=\"data\">\r\n        <div data-ng-if=\"hasData('Products')\">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                    <tr>\r\n                        <th scope=\"col\">Id</th>\r\n                        <th scope=\"col\">Name</th>\r\n                        <th scope=\"col\">Rating</th>\r\n                        <th scope=\"col\">Description</th>\r\n                        <th scope=\"col\">Price</th>\r\n                        <th scope=\"col\">Release Date</th>\r\n                        <th></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let product of Products\">\r\n                        <td>{{product.ID}}</td>\r\n                        <td>{{product.Name}}</td>\r\n                        <td>{{product.Rating}}</td>\r\n                        <td>{{product.Description}}</td>\r\n                        <td>{{product.Price}}</td>\r\n                        <td>{{product.ReleaseDate | date}}</td>\r\n                        <td>\r\n                            <a routerLink=\"../Product_Edit/{{product.ID}}\">Edit</a> |\r\n                            <a data-ng-click=\"product_Delete(product.ID)\">Delete</a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div data-ng-if=\"!hasData('Products')\">\r\n            <p>No data found.</p>\r\n        </div>\r\n    </section>\r\n</div>\r\n"

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map