(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'face-recog';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constants.ts":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.URL = function () { return 'https://school-hub-api.herokuapp.com'; };
    return Constants;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_0__["AppRoutes"])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");


var AppRoutes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    },
    {
        path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    }
];


/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "canvas {\n    /* margin-left: -640px; */\n    /* margin-top: 120px; */\n    position: absolute;\n}\n.pass{\n    font-size: 10rem;\n    color: green;\n}"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row \">\n    <div class=\"col-xs-12 col-md-12 col-lg-12 d-flex justify-content-center\">\n      <video id=\"video\" width=\"640\" height=\"480\" preload autoplay loop muted></video>\n      <canvas id=\"canvas\" width=\"640\" height=\"480\"></canvas>\n    </div>\n  </div>\n  <div class=\"row mt-2\">\n    <div class=\"col-xs-12 col-md-12 col-lg-12 d-flex justify-content-center\">\n      <button type=\"button \" (click)=\"onLogout()\"  class=\"btn btn-info btn-fill btn-wd\" >ออกจากระบบ</button>\n    </div>\n  </div>\n  <div class=\"row mt-5\">\n    <div class=\"col-xs-12 col-md-12 col-lg-12 d-flex justify-content-center\">\n      <p *ngIf=\"isLock\" class=\"pass\">ผ่าน</p>\n    </div>\n  </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _providers_rest_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../providers/rest-api.service */ "./src/app/providers/rest-api.service.ts");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../providers/auth.service */ "./src/app/providers/auth.service.ts");
/* harmony import */ var _providers_face_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../providers/face-api.service */ "./src/app/providers/face-api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tracking_build_tracking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tracking/build/tracking */ "./node_modules/tracking/build/tracking.js");
/* harmony import */ var tracking_build_tracking__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tracking_build_tracking__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tracking_build_data_face__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tracking/build/data/face */ "./node_modules/tracking/build/data/face.js");
/* harmony import */ var tracking_build_data_face__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tracking_build_data_face__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomeComponent = /** @class */ (function () {
    function HomeComponent(faceService, auth, restApi, router) {
        this.faceService = faceService;
        this.auth = auth;
        this.restApi = restApi;
        this.router = router;
        this.isLock = false;
        this.personIDs = [];
        if (this.auth.authenticated()) {
            this.personGroupId = this.auth.Uesr().schoolid;
            //this.personGroupId = "5b4ea676a581760014b38015";
            // console.log(this.personGroupId);
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.initTracker();
    };
    HomeComponent.prototype.initTracker = function () {
        var _this = this;
        try {
            var global = window;
            this.tracker = new global.tracking.ObjectTracker('face');
            this.task = global.tracking.track('#video', this.tracker, { camera: true });
            this.tracker.on('track', function (event) {
                var data = event.data;
                //console.log(data);
                _this.tryToDetectFace(data);
            });
            this.tracker.setInitialScale(4);
            this.tracker.setStepSize(2);
            this.tracker.setEdgesDensity(0.1);
        }
        catch (e) {
            console.log(e);
        }
    };
    HomeComponent.prototype.tryToDetectFace = function (trackedData) {
        var _this = this;
        if (trackedData.length > 0) {
            var video = this.getVideo();
            var canvas_1 = this.getCanvas();
            var ctx_1 = canvas_1.getContext('2d');
            if (video && canvas_1) {
                canvas_1.width = video.videoWidth;
                canvas_1.height = video.videoHeight;
                ctx_1.drawImage(video, 0, 0);
                trackedData.forEach(function (rect) {
                    var img = new Image();
                    img.src = canvas_1.toDataURL("image/jpeg", 0.75);
                    var gradient = ctx_1.createLinearGradient(0, 0, 170, 0);
                    ctx_1.strokeStyle = '#a64ceb';
                    ctx_1.strokeRect(rect.x, rect.y, rect.width, rect.height);
                    ctx_1.font = '11px Helvetica';
                    ctx_1.fillStyle = '#fff';
                    // ctx.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
                    // ctx.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
                    if (!_this.isLock) {
                        _this.detect(img.src);
                    }
                });
            }
        }
        else {
            if (this.personIDs.length > 0) {
                this.personIDs = [];
            }
        }
    };
    HomeComponent.prototype.detect = function (face) {
        var _this = this;
        try {
            this.faceService.Detect(face).then(function (faces) {
                _this.isLock = true;
                _this.faceService.PushFaceIds(faces).then(function (faceIDs) {
                    if (faceIDs.length > 0) {
                        var body = {
                            faceIds: faceIDs,
                            personGroupId: _this.personGroupId,
                            maxNumOfCandidatesReturned: 10,
                            confidenceThreshold: 0.7
                        };
                        _this.faceService.Identify(body).then(function (identifies) {
                            if (identifies) {
                                _this.isLock = false;
                                identifies.forEach(function (identity) {
                                    identity.candidates.forEach(function (person) {
                                        if (_this.personIDs.indexOf(person.personId) < 0) {
                                            _this.personIDs.push(person.personId);
                                            _this.faceService.GetPerson(_this.personGroupId, person.personId).then(function (res) {
                                                var person = res;
                                                person.image = face;
                                                var bodyReq = {
                                                    image: face,
                                                    citizenid: person.userData
                                                };
                                                _this.restApi.post(_app_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].URL() + '/api/time-attendance', bodyReq).then(function (resp) {
                                                    console.log(resp);
                                                }).catch(function (err) {
                                                    console.log(err);
                                                });
                                            });
                                        }
                                    });
                                });
                            }
                            else {
                                _this.isLock = false;
                            }
                        });
                    }
                    else {
                        _this.isLock = false;
                    }
                });
            }).catch(function (err) {
            });
        }
        catch (_a) {
            this.isLock = false;
        }
    };
    HomeComponent.prototype.getCanvas = function () {
        return document.getElementsByTagName('canvas')[0];
    };
    HomeComponent.prototype.getVideo = function () {
        return document.getElementsByTagName('video')[0];
    };
    HomeComponent.prototype.onLogout = function () {
        window.localStorage.removeItem('token-admin@schoolhub');
        this.task.stop();
        this.router.navigate(['']);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_providers_face_api_service__WEBPACK_IMPORTED_MODULE_2__["FaceApiService"], _providers_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _providers_rest_api_service__WEBPACK_IMPORTED_MODULE_0__["RestApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row padding mt-5\">\n    <div class=\"col-md-12 text-center padding\">\n      <h3>ลงชื่อเข้าใช้ School Hub</h3>\n    </div>\n    <div class=\"col-md-12 mt-2 padding\">\n      <form>\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-12 col-md-4\">\n          </div>\n          <div class=\"col-xs-12 col-sm-12 col-md-4\">\n            <div class=\"form-group\">\n              <input  name=\"username\" [(ngModel)]=\"credential.username\" type=\"text\" class=\"form-control border-input\" placeholder=\"ชื่อผู้ใช้\">\n            </div>\n            <div class=\"form-group\">\n              <input  name=\"password\" [(ngModel)]=\"credential.password\" type=\"password\" class=\"form-control border-input \" placeholder=\"รหัสผ่าน\" >\n            </div>\n            <div class=\"text-center\">\n              <button type=\"button \" (click)=\"onLogin()\" [disabled]=\"!formValid()\" class=\"btn btn-info btn-fill btn-wd\" >ลงชื่อเข้าใช้งาน</button>\n            </div>\n          </div>\n          <div class=\"col-xs-12 col-sm-12 col-md-4\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../providers/auth.service */ "./src/app/providers/auth.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _providers_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../providers/rest-api.service */ "./src/app/providers/rest-api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(restApiService, auth, router) {
        this.restApiService = restApiService;
        this.auth = auth;
        this.router = router;
        this.credential = {
            username: '',
            password: ''
        };
        if (this.auth.authenticated()) {
            this.router.navigate(['/home']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.formValid = function () {
        var isValid = this.credential && this.credential.username && this.credential.password ? true : false;
        return isValid;
    };
    LoginComponent.prototype.onLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loginResponse, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.restApiService.post(_app_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].URL() + '/api/auth/signin', this.credential)];
                    case 1:
                        loginResponse = _a.sent();
                        if (loginResponse['status'] === 200) {
                            window.localStorage.setItem('token-admin@schoolhub', loginResponse['token']);
                            this.router.navigate(['/home']);
                        }
                        else {
                            //this.dataService.error('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_providers_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"],
            _providers_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/providers/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/providers/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService() {
        this.jwt = new angular2_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelper"]();
    }
    AuthService.prototype.authenticated = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_1__["tokenNotExpired"])('token-admin@schoolhub');
    };
    AuthService.prototype.Uesr = function () {
        if (this.authenticated()) {
            return this.jwt.decodeToken(window.localStorage.getItem('token-admin@schoolhub'));
        }
        else {
            return null;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/providers/face-api.service.ts":
/*!***********************************************!*\
  !*** ./src/app/providers/face-api.service.ts ***!
  \***********************************************/
/*! exports provided: FaceApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaceApiService", function() { return FaceApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaceApiService = /** @class */ (function () {
    function FaceApiService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': '46547dfcc3d3423c94cce3949093462b'
        });
        this.headersStream = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/octet-stream',
            'Ocp-Apim-Subscription-Key': '46547dfcc3d3423c94cce3949093462b'
        });
        this.uriBase = 'https://southeastasia.api.cognitive.microsoft.com/face/v1.0';
    }
    FaceApiService.prototype.makeblob = function (dataURL) {
        var BASE64_MARKER = ';base64,';
        var parts = dataURL.split(BASE64_MARKER);
        var contentType = parts[0].split(':')[1];
        var raw = window.atob(parts[1]);
        var rawLength = raw.length;
        var uInt8Array = new Uint8Array(rawLength);
        for (var i = 0; i < rawLength; ++i) {
            uInt8Array[i] = raw.charCodeAt(i);
        }
        return new Blob([uInt8Array], { type: contentType });
    };
    FaceApiService.prototype.Detect = function (body) {
        var payload = this.makeblob(body);
        return this.http.post(this.uriBase + '/detect', payload, { headers: this.headersStream }).toPromise();
    };
    FaceApiService.prototype.PushFaceIds = function (faces) {
        var faceIDs = [];
        faces.forEach(function (face) {
            faceIDs.push(face.faceId);
        });
        return new Promise(function (resove, reject) {
            resove(faceIDs);
        });
    };
    FaceApiService.prototype.Identify = function (body) {
        return this.http.post(this.uriBase + '/identify', body, { headers: this.headers }).toPromise();
    };
    FaceApiService.prototype.GetPerson = function (personGroupId, personId) {
        return this.http.get(this.uriBase + '/persongroups/' + personGroupId + '/persons/' + personId, { headers: this.headers }).toPromise();
    };
    FaceApiService.prototype.GetListPersonGroup = function () {
        return this.http.get(this.uriBase + '/persongroups?top=1000', { headers: this.headers }).toPromise();
    };
    FaceApiService.prototype.GetListPerson = function (personGroupId) {
        return this.http.get(this.uriBase + '/persongroups/' + personGroupId + '/persons?top=1000', { headers: this.headers }).toPromise();
    };
    FaceApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FaceApiService);
    return FaceApiService;
}());



/***/ }),

/***/ "./src/app/providers/rest-api.service.ts":
/*!***********************************************!*\
  !*** ./src/app/providers/rest-api.service.ts ***!
  \***********************************************/
/*! exports provided: RestApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestApiService", function() { return RestApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RestApiService = /** @class */ (function () {
    function RestApiService(http) {
        this.http = http;
    }
    RestApiService.prototype.authorizationHeader = function () {
        var token = window.localStorage.getItem('token-admin@schoolhub');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + token);
        return headers;
    };
    RestApiService.prototype.get = function (url) {
        return this.http.get(url, { headers: this.authorizationHeader() }).toPromise();
    };
    RestApiService.prototype.post = function (url, Body) {
        return this.http.post(url, Body, { headers: this.authorizationHeader() }).toPromise();
    };
    RestApiService.prototype.put = function (url, Body) {
        return this.http.put(url, Body, { headers: this.authorizationHeader() }).toPromise();
    };
    RestApiService.prototype.delete = function (url) {
        return this.http.delete(url, { headers: this.authorizationHeader() }).toPromise();
    };
    RestApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RestApiService);
    return RestApiService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jigkoh3/Desktop/POC/face-recog/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map