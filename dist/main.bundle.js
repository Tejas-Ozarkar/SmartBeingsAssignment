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

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n\n</router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var new_user_component_1 = __webpack_require__("./src/app/new-user/new-user.component.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var edit_user_component_1 = __webpack_require__("./src/app/edit-user/edit-user.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                new_user_component_1.NewUserComponent,
                edit_user_component_1.EditUserComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/edit-user/edit-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-main\">\n    <div class=\"edit-user-card\">\n        <h3>Edit User</h3>\n        <button (click)=\"closePanel()\" class=\"close-button\">x</button>\n        <form (ngSubmit)=\"onSubmitEditUser(form.value)\" #form=\"ngForm\">\n            <div class=\"top row\">\n                <div class=\"col-md-4\">\n                    <div class=\"profile\">\n                        <div class=\"profile-circle\">\n                            <img src=\"assets/img/avatar.png\">\n                        </div>\n                        <div class=\"edit-buttons\">\n                            <button>Update</button><img src=\"assets/img/bin.png\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-8\">\n                    <div class=\"form-group\">\n                        <label>Username</label>\n                        <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"user.username\" [ngModelOptions]=\"{standalone: true}\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Address</label>\n                        <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"user.address\" [ngModelOptions]=\"{standalone: true}\" />\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col-md-6\">\n                    <label>Contact</label>\n                    <input type=\"text\" class=\"form-control contact\" required [(ngModel)]=\"user.contact\" [ngModelOptions]=\"{standalone: true}\" />\n                </div>\n                <div class=\"form-group col-md-6\">\n                    <label>Email</label>\n                    <input type=\"text\" class=\"form-control email\" required [(ngModel)]=\"user.email\" [ngModelOptions]=\"{standalone: true}\" />\n                </div>\n            </div>\n            <button [disabled]=\"(!user.address)||(!user.username)||(!user.email)||(!user.address)\" type=\"submit\" class=\"btn btn-primary form-control\">Save Changes</button>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/edit-user/edit-user.component.scss":
/***/ (function(module, exports) {

module.exports = ".edit-main {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.808);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .edit-main h3 {\n    margin-bottom: 30px;\n    font-size: 24px;\n    color: #333; }\n  .edit-main .edit-user-card {\n    background: #f5f4f4;\n    padding: 30px;\n    position: relative; }\n  .edit-main .edit-user-card .close-button {\n      position: absolute;\n      right: 40px;\n      top: 20px;\n      background: none;\n      border: none;\n      font-size: 30px;\n      color: #9e9d9d;\n      cursor: pointer; }\n  .edit-main .edit-user-card .close-button:focus {\n      outline: none; }\n  .edit-main .edit-user-card .form-group {\n      margin-bottom: 25px; }\n  .edit-main .edit-user-card .profile {\n      height: 100%;\n      width: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      background: white;\n      border: 0.5px solid #eeecec; }\n  .edit-main .edit-user-card .profile .profile-circle {\n        width: 120px;\n        height: 120px;\n        background: #f0f0f0;\n        border-radius: 100px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        overflow: hidden; }\n  .edit-main .edit-user-card .profile .profile-circle img {\n          width: auto;\n          height: 100%; }\n  .edit-main .edit-user-card .profile .edit-buttons {\n        width: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        margin-top: 10px; }\n  .edit-main .edit-user-card .profile .edit-buttons button {\n          background: white;\n          width: 60%;\n          border: 1px solid #dadada;\n          border-radius: 5px;\n          cursor: pointer;\n          float: left; }\n  .edit-main .edit-user-card .profile .edit-buttons img {\n          margin-left: 10px;\n          height: 100%;\n          width: 15%;\n          float: right;\n          height: 18px;\n          width: auto;\n          padding: 1px 5px;\n          cursor: pointer; }\n  @media (min-width: 767.99px) {\n  .edit-main {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .edit-user-card {\n    width: 40%;\n    border-radius: 5px; } }\n  @media (max-width: 767.98px) {\n  .edit-main {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .profile {\n    padding: 20px; } }\n  @media (max-width: 575.98px) {\n  .edit-user-card {\n    width: 100%;\n    overflow: scroll;\n    border-radius: none; } }\n"

/***/ }),

/***/ "./src/app/edit-user/edit-user.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var EditUserComponent = /** @class */ (function () {
    function EditUserComponent() {
        this.closeEditEvent = new core_1.EventEmitter();
        this.editUserEvent = new core_1.EventEmitter();
    }
    EditUserComponent.prototype.ngOnInit = function () {
        this.oldUser = JSON.parse(JSON.stringify(this.user));
        console.log(this.oldUser);
    };
    EditUserComponent.prototype.closePanel = function () {
        this.user.username = this.oldUser.username;
        this.user.address = this.oldUser.address;
        this.user.contact = this.oldUser.contact;
        this.user.email = this.oldUser.email;
        this.closeEditEvent.emit();
    };
    EditUserComponent.prototype.onSubmitEditUser = function () {
        $(".email").next(".validation").remove();
        $(".contact").next(".validation").remove();
        if (this.validateEmail(this.user.email) && this.validateContact(this.user.contact)) {
            this.editUserEvent.emit(this.user);
        }
        else {
            if (!this.validateEmail(this.user.email)) {
                $(".email").after("<div class='validation' style='color: red;'>Please Enter Valid Email</div>");
            }
            if (!this.validateContact(this.user.contact)) {
                $(".contact").after("<div class='validation' style='color: red;'>Please Enter Valid Contact</div>");
            }
        }
    };
    EditUserComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    EditUserComponent.prototype.validateContact = function (contact) {
        var re = /(^[0-9-]*$)/;
        return re.test(contact);
    };
    EditUserComponent = __decorate([
        core_1.Component({
            selector: 'edit-user',
            template: __webpack_require__("./src/app/edit-user/edit-user.component.html"),
            styles: [__webpack_require__("./src/app/edit-user/edit-user.component.scss")],
            inputs: ['user'],
            outputs: ['closeEditEvent', 'editUserEvent']
        }),
        __metadata("design:paramtypes", [])
    ], EditUserComponent);
    return EditUserComponent;
}());
exports.EditUserComponent = EditUserComponent;


/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-main\">\n    <div class=\"header\">\n        <h1>User Directory</h1>\n        <button class=\"btn btn-primary\" (click)=\"toggleNewUser()\"><img src=\"assets/img/add.png\" height=\"18px\" style=\"margin-right: 10px;margin-top: -5px\" >Add new user</button>\n    </div>\n    <div class=\"content\">\n        <div class=\"user-data\">\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th>USER NAME</th>\n                        <th>ADDRESS</th>\n                        <th>CONTACT</th>\n                        <th>EMAIL</th>\n                        <th class=\"action\"></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let user of users\">\n                        <td><img class=\"profile-pic\" src=\"assets/img/user.png\">{{user.username}}</td>\n                        <td>{{user.address}}</td>\n                        <td>{{user.contact}}</td>\n                        <td>{{user.email}}</td>\n                        <td class=\"action\">\n                            <div class=\"dropdown\">\n                                <button class=\"\" type=\"button\" data-toggle=\"dropdown\"><img src=\"assets/img/more.png\"></button>\n                                <div class=\"dropdown-menu\">\n                                    <button (click)=\"showEditUser(user)\" class=\"dropdown-anchor\"><img src=\"assets/img/edit.png\">Edit User Details</button>\n\n                                    <button (click)=\"deleteUser(user)\" class=\"dropdown-anchor\"><img src=\"assets/img/bin.png\">Delete User</button>\n                                </div>\n                            </div>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n<new-user (closePanelEvent)=\"toggleNewUser()\" (addUserEvent)=\"addUser($event)\" *ngIf=\"flagNewUser\"></new-user>\n<edit-user (closeEditEvent)=\"toggleEditUser()\" (editUserEvent)=\"editUser($event)\" [user]=\"selectedUser\" *ngIf=\"flagEditUser\"></edit-user>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Raleway);\n.home-main {\n  font-family: 'Raleway', sans-serif; }\n.header {\n  width: 100%;\n  background: white;\n  padding: 30px 150px;\n  color: #333;\n  border-bottom: 1px solid #e7e7e7;\n  overflow: hidden; }\n.content {\n  width: 100%;\n  background: #f3f1f1; }\n.content .user-data {\n    background: white;\n    width: 100%;\n    border-radius: 5px;\n    -webkit-box-shadow: 0 4px 8px 0 rgba(212, 210, 210, 0.37), 0 6px 20px 0 rgba(212, 210, 210, 0.363);\n            box-shadow: 0 4px 8px 0 rgba(212, 210, 210, 0.37), 0 6px 20px 0 rgba(212, 210, 210, 0.363); }\n.content .user-data .table,\n    .content .user-data tr,\n    .content .user-data td,\n    .content .user-data th {\n      border: none !important; }\n.content .user-data .table thead {\n      border-bottom: 1px solid rgba(231, 231, 231, 0.63); }\n.content .user-data .table thead th {\n        color: #bebbbb;\n        font-size: 13px;\n        font-weight: BOLD; }\n.content .user-data .table tbody {\n      color: #333;\n      font-weight: bold;\n      font-size: 14px; }\n.content .user-data .table tbody tr {\n        border-bottom: 1px solid rgba(231, 231, 231, 0.63) !important;\n        z-index: 0;\n        overflow: hidden;\n        height: 100%; }\n.content .user-data .table tbody tr:hover {\n        outline: 2px solid #297bff !important;\n        z-index: 2;\n        height: 100%; }\n.content .user-data .table tbody .action {\n        width: 20px;\n        height: 100%; }\n.content .user-data .table tbody .action img {\n          width: 20px; }\n.content .user-data .table tbody .action .dropdown button {\n          background: none;\n          border: none;\n          cursor: pointer;\n          margin: 0;\n          padding: 0; }\n.content .user-data .table tbody .action .dropdown button:focus {\n          outline: none; }\n.content .user-data .table tbody .action .dropdown-menu {\n          margin-top: 35px;\n          margin-right: 180px;\n          width: 200px;\n          height: 100px; }\n.content .user-data .table tbody .action .dropdown-menu .dropdown-anchor {\n            text-align: start;\n            padding: 0px 10px;\n            width: 100%;\n            height: 50%;\n            font-size: 13px;\n            color: #333;\n            text-decoration: none;\n            font-weight: bold;\n            border-radius: 10px;\n            cursor: pointer; }\n.content .user-data .table tbody .action .dropdown-menu .dropdown-anchor img {\n              margin-right: 10px; }\n.content .user-data .table tbody .profile-pic {\n        margin-right: 20px; }\n@media (min-width: 767.99px) {\n  .header h1 {\n    float: left; }\n  .header button {\n    float: right; }\n  .content {\n    padding: 50px 150px; } }\n@media (max-width: 767.98px) {\n  .header {\n    text-align: center; }\n    .header h1 {\n      margin-bottom: 30px; } }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_1 = __webpack_require__("./src/app/user.service.ts");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_userService) {
        this._userService = _userService;
        this.flagNewUser = false;
        this.flagEditUser = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUsers()
            .subscribe(function (resUserData) { return _this.users = resUserData; });
    };
    HomeComponent.prototype.toggleNewUser = function () {
        this.flagNewUser = (this.flagNewUser == true) ? false : true;
    };
    HomeComponent.prototype.addUser = function (user) {
        var _this = this;
        this.toggleNewUser();
        this._userService.addUser(user)
            .subscribe(function (resNewUser) {
            _this.users.push(resNewUser);
        });
    };
    HomeComponent.prototype.showEditUser = function (user) {
        this.toggleEditUser();
        this.selectedUser = user;
    };
    HomeComponent.prototype.toggleEditUser = function () {
        this.flagEditUser = (this.flagEditUser == true) ? false : true;
    };
    HomeComponent.prototype.editUser = function (user) {
        this.toggleEditUser();
        this._userService.updateUser(user)
            .subscribe(function (resUpdatedUser) {
            console.log('updated');
        });
    };
    HomeComponent.prototype.deleteUser = function (user) {
        var usersArray = this.users;
        this._userService.deleteUser(user)
            .subscribe(function (resDeletedUser) {
            for (var i = 0; i < usersArray.length; i++) {
                if (usersArray[i]._id === user._id) {
                    usersArray.splice(i, 1);
                }
            }
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.scss")],
            providers: [user_service_1.UserService]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/new-user/new-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"add-main\">\n    <div class=\"new-user-card\">\n        <h3>Add New User</h3>\n        <button (click)=\"closePanel()\" class=\"close-button\">x</button>\n        <form (ngSubmit)=\"onSubmitAddUser(form.value)\" #form=\"ngForm\">\n            <div class=\"top row\">\n                <div class=\"col-md-4\">\n                    <div class=\"profile\">\n                        <div class=\"profile-circle \">\n                            <img src=\"assets/img/user.png\">\n                        </div>\n                        <button>Upload</button>\n                    </div>\n                </div>\n                <div class=\"col-md-8\">\n                    <div class=\"form-group\">\n                        <label>Username</label>\n                        <input type=\"text\" class=\"form-control\" required name=\"username\" ngModel />\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Address</label>\n                        <input type=\"text\" class=\"form-control\" required name=\"address\" ngModel />\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col-md-6\">\n                    <label>Contact</label>\n                    <input type=\"text\" class=\"form-control contact\" required name=\"contact\" ngModel />\n                </div>\n                <div class=\"form-group col-md-6\">\n                    <label>Email</label>\n                    <input type=\"text\" class=\"form-control email\" required name=\"email\" ngModel />\n                </div>\n            </div>\n            <button [disabled]=\"(!form.value.contact)||(!form.value.username)||(!form.value.email)||(!form.value.address)\" id=\"add-user \" type=\"submit \" class=\"btn btn-primary form-control \">Add New User</button>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/new-user/new-user.component.scss":
/***/ (function(module, exports) {

module.exports = ".add-main {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.808); }\n  .add-main h3 {\n    margin-bottom: 30px;\n    font-size: 24px;\n    color: #333; }\n  .add-main .new-user-card {\n    background: #f5f4f4;\n    padding: 30px;\n    position: relative;\n    overflow-y: auto; }\n  .add-main .new-user-card .close-button {\n      position: absolute;\n      right: 40px;\n      top: 20px;\n      background: none;\n      border: none;\n      font-size: 30px;\n      color: #9e9d9d;\n      cursor: pointer; }\n  .add-main .new-user-card .close-button:focus {\n      outline: none; }\n  .add-main .new-user-card .form-group {\n      margin-bottom: 25px; }\n  .add-main .new-user-card .profile {\n      width: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      background: white;\n      border: 0.5px solid #eeecec; }\n  .add-main .new-user-card .profile .profile-circle {\n        width: 120px;\n        height: 120px;\n        background: #f0f0f0;\n        border-radius: 100px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n  .add-main .new-user-card .profile button {\n        margin-top: 10px;\n        background: white;\n        width: 80%;\n        border: 1px solid #dadada;\n        border-radius: 5px;\n        cursor: pointer; }\n  @media (min-width: 767.99px) {\n  .add-main {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .new-user-card {\n    width: 40%;\n    border-radius: 5px; }\n  .profile {\n    padding: 10px; } }\n  @media (max-width: 767.98px) {\n  .add-main {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .profile {\n    padding: 20px; } }\n  @media (max-width: 575.98px) {\n  .new-user-card {\n    width: 100%;\n    overflow: scroll;\n    border-radius: none; } }\n"

/***/ }),

/***/ "./src/app/new-user/new-user.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var NewUserComponent = /** @class */ (function () {
    function NewUserComponent() {
        this.closePanelEvent = new core_1.EventEmitter();
        this.addUserEvent = new core_1.EventEmitter();
    }
    NewUserComponent.prototype.ngOnInit = function () {
    };
    NewUserComponent.prototype.closePanel = function () {
        this.closePanelEvent.emit();
    };
    NewUserComponent.prototype.onSubmitAddUser = function (user) {
        console.log(user);
        $(".email").next(".validation").remove();
        $(".contact").next(".validation").remove();
        if (this.validateEmail(user.email) && this.validateContact(user.contact)) {
            this.addUserEvent.emit(user);
        }
        else {
            if (!this.validateEmail(user.email)) {
                $(".email").after("<div class='validation' style='color: red;'>Please Enter Valid Email</div>");
            }
            if (!this.validateContact(user.contact)) {
                $(".contact").after("<div class='validation' style='color: red;'>Please Enter Valid Contact</div>");
            }
        }
    };
    NewUserComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    NewUserComponent.prototype.validateContact = function (contact) {
        var re = /(^[0-9-]*$)/;
        return re.test(contact);
    };
    NewUserComponent = __decorate([
        core_1.Component({
            selector: 'new-user',
            template: __webpack_require__("./src/app/new-user/new-user.component.html"),
            styles: [__webpack_require__("./src/app/new-user/new-user.component.scss")],
            outputs: ['closePanelEvent', 'addUserEvent']
        }),
        __metadata("design:paramtypes", [])
    ], NewUserComponent);
    return NewUserComponent;
}());
exports.NewUserComponent = NewUserComponent;


/***/ }),

/***/ "./src/app/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        this._getUrl = '/api/users';
        this._postUrl = '/api/user';
        this._putUrl = '/api/user/';
        this._deleteUrl = '/api/user/';
    }
    UserService.prototype.getUsers = function () {
        return this._http.get(this._getUrl)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.addUser = function (user) {
        var headers = new http_1.Headers({ 'content-type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this._postUrl, JSON.stringify(user), options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.updateUser = function (user) {
        var headers = new http_1.Headers({ 'content-type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.put(this._putUrl + user._id, JSON.stringify(user), options)
            .map(function (response) { return response; });
    };
    UserService.prototype.deleteUser = function (user) {
        return this._http.delete(this._deleteUrl + user._id)
            .map(function (response) { return response.json(); });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map