require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/blue.css", () => __webpack_require__("../node_modules/@nativescript/webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/blue.css"));
global.registerModule("@nativescript/theme/css/blue.css", () => __webpack_require__("../node_modules/@nativescript/webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/blue.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"'~@nativescript/theme/css/core.css'"},{"type":"import","import":"'~@nativescript/theme/css/blue.css'"},{"type":"comment","comment":" Ref: https://medium.com/@JCAguilera/fontawesome-5-and-nativescript-22653f2b3bac "},{"type":"rule","selectors":[".far"],"declarations":[{"type":"declaration","property":"font-family","value":"\"Font Awesome 5 Free\", \"fa-regular-400\""},{"type":"declaration","property":"font-weight","value":"400"}]},{"type":"rule","selectors":[".fab"],"declarations":[{"type":"declaration","property":"font-family","value":"\"Font Awesome 5 Brands\", \"fa-brands-400\""},{"type":"declaration","property":"font-weight","value":"400"}]},{"type":"rule","selectors":[".fas"],"declarations":[{"type":"declaration","property":"font-family","value":"\"Font Awesome 5 Free\", \"fa-solid-900\""},{"type":"declaration","property":"font-weight","value":"900"}]},{"type":"rule","selectors":["ActionBar"],"declarations":[{"type":"declaration","property":"padding-top","value":"16"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/app-routing.module.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _src_app_app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app.routes.ts");





var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(_src_app_app_routes__WEBPACK_IMPORTED_MODULE_2__["routes"])], _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]], exports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(_src_app_app_routes__WEBPACK_IMPORTED_MODULE_2__["routes"])],
                exports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "GridLayout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "page-router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["PageRouterOutlet"]], styles: [""] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/app.module.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app-routing.module.tns.ts");
/* harmony import */ var _src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _src_app_utils_app_utils_app_utils_tns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/utils/app-utils/app-utils.tns.ts");
/* harmony import */ var _src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/services/http.service.ts");
/* harmony import */ var _src_app_services_poke_api_poke_api_service_tns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/services/poke-api/poke-api.service.tns.ts");
/* harmony import */ var _src_app_services_cache_cache_service_tns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/services/cache/cache.service.tns.ts");
/* harmony import */ var _src_app_utils_hide_action_bar_hide_action_bar_tns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/utils/hide-action-bar/hide-action-bar.tns.ts");
/* harmony import */ var _src_app_utils_platform_view_platform_view_tns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./app/utils/platform-view/platform-view.tns.ts");
/* harmony import */ var _src_app_shared_container_container_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./app/shared/container/container.component.ts");
/* harmony import */ var _src_app_shared_pokemon_info_pokemon_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./app/shared/pokemon-info/pokemon-info.component.ts");
/* harmony import */ var _src_app_pages_home_home_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./app/pages/home/home.page.ts");
/* harmony import */ var _src_app_pages_today_today_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./app/pages/today/today.page.ts");
/* harmony import */ var _src_app_pages_random_random_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./app/pages/random/random.page.ts");
/* harmony import */ var _src_app_pages_pokedex_pokedex_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./app/pages/pokedex/pokedex.page.ts");
/* harmony import */ var _src_app_pages_pokemon_pokemon_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./app/pages/pokemon/pokemon.page.ts");
/* harmony import */ var _pages_book_book_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./app/pages/book/book.page.ts");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};



















var pages = [_src_app_pages_home_home_page__WEBPACK_IMPORTED_MODULE_12__["HomePage"], _src_app_pages_today_today_page__WEBPACK_IMPORTED_MODULE_13__["TodayPage"], _src_app_pages_random_random_page__WEBPACK_IMPORTED_MODULE_14__["RandomPage"], _src_app_pages_pokedex_pokedex_page__WEBPACK_IMPORTED_MODULE_15__["PokedexPage"], _src_app_pages_pokemon_pokemon_page__WEBPACK_IMPORTED_MODULE_16__["PokemonPage"], _pages_book_book_page__WEBPACK_IMPORTED_MODULE_17__["BookPage"]];
var directives = [_src_app_utils_hide_action_bar_hide_action_bar_tns__WEBPACK_IMPORTED_MODULE_8__["HideActionBarDirective"]];
var components = [_src_app_utils_platform_view_platform_view_tns__WEBPACK_IMPORTED_MODULE_9__["PlatformViewComponent"], _src_app_shared_container_container_component__WEBPACK_IMPORTED_MODULE_10__["ContainerComponent"], _src_app_shared_pokemon_info_pokemon_info_component__WEBPACK_IMPORTED_MODULE_11__["PokemonInfoComponent"]];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
            _src_app_utils_app_utils_app_utils_tns__WEBPACK_IMPORTED_MODULE_4__["AppUtils"],
            _src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"],
            _src_app_services_poke_api_poke_api_service_tns__WEBPACK_IMPORTED_MODULE_6__["PokeApiService"],
            _src_app_services_cache_cache_service_tns__WEBPACK_IMPORTED_MODULE_7__["CacheService"],
        ], imports: [[
                _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptHttpClientModule"],
                _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptFormsModule"],
                _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _src_app_pages_home_home_page__WEBPACK_IMPORTED_MODULE_12__["HomePage"], _src_app_pages_today_today_page__WEBPACK_IMPORTED_MODULE_13__["TodayPage"], _src_app_pages_random_random_page__WEBPACK_IMPORTED_MODULE_14__["RandomPage"], _src_app_pages_pokedex_pokedex_page__WEBPACK_IMPORTED_MODULE_15__["PokedexPage"], _src_app_pages_pokemon_pokemon_page__WEBPACK_IMPORTED_MODULE_16__["PokemonPage"], _pages_book_book_page__WEBPACK_IMPORTED_MODULE_17__["BookPage"], _src_app_utils_hide_action_bar_hide_action_bar_tns__WEBPACK_IMPORTED_MODULE_8__["HideActionBarDirective"], _src_app_utils_platform_view_platform_view_tns__WEBPACK_IMPORTED_MODULE_9__["PlatformViewComponent"], _src_app_shared_container_container_component__WEBPACK_IMPORTED_MODULE_10__["ContainerComponent"], _src_app_shared_pokemon_info_pokemon_info_component__WEBPACK_IMPORTED_MODULE_11__["PokemonInfoComponent"]], imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
        _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
        _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptHttpClientModule"],
        _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptFormsModule"],
        _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: __spreadArrays([
                    _src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ], pages, directives, components),
                imports: [
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptHttpClientModule"],
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptFormsModule"],
                    _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                ],
                providers: [
                    _src_app_utils_app_utils_app_utils_tns__WEBPACK_IMPORTED_MODULE_4__["AppUtils"],
                    _src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"],
                    _src_app_services_poke_api_poke_api_service_tns__WEBPACK_IMPORTED_MODULE_6__["PokeApiService"],
                    _src_app_services_cache_cache_service_tns__WEBPACK_IMPORTED_MODULE_7__["CacheService"],
                ],
                bootstrap: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _src_app_shared_container_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/shared/container/container.component.ts");
/* harmony import */ var _src_app_pages_home_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/pages/home/home.page.ts");
/* harmony import */ var _src_app_pages_today_today_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/pages/today/today.page.ts");
/* harmony import */ var _src_app_pages_random_random_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/pages/random/random.page.ts");
/* harmony import */ var _pages_pokedex_pokedex_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/pages/pokedex/pokedex.page.ts");
/* harmony import */ var _pages_pokemon_pokemon_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/pages/pokemon/pokemon.page.ts");
/* harmony import */ var _pages_book_book_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/pages/book/book.page.ts");







var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full', },
    { path: 'home', component: _src_app_pages_home_home_page__WEBPACK_IMPORTED_MODULE_1__["HomePage"], },
    {
        path: 'app', component: _src_app_shared_container_container_component__WEBPACK_IMPORTED_MODULE_0__["ContainerComponent"], children: [
            { path: '', redirectTo: '/today', pathMatch: 'full' },
            { path: 'today', component: _src_app_pages_today_today_page__WEBPACK_IMPORTED_MODULE_2__["TodayPage"], },
            { path: 'random', component: _src_app_pages_random_random_page__WEBPACK_IMPORTED_MODULE_3__["RandomPage"], },
            { path: 'pokedex', component: _pages_pokedex_pokedex_page__WEBPACK_IMPORTED_MODULE_4__["PokedexPage"], },
            { path: 'pokemon/:number', component: _pages_pokemon_pokemon_page__WEBPACK_IMPORTED_MODULE_5__["PokemonPage"], },
            { path: 'book', component: _pages_book_book_page__WEBPACK_IMPORTED_MODULE_6__["BookPage"], },
        ]
    }
];


/***/ }),

/***/ "./app/models/pokemon.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POKEMON_SPRITES", function() { return POKEMON_SPRITES; });
var POKEMON_SPRITES = ['frontDefault', 'backDefault', 'frontShiny', 'backShiny', 'frontFemale', 'backFemale', 'frontShinyFemale', 'backShinyFemale'];


/***/ }),

/***/ "./app/pages/book/book.page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookPage", function() { return BookPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _src_app_utils_app_utils_app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/utils/app-utils/app-utils.tns.ts");
/* harmony import */ var _src_app_services_poke_api_poke_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/services/poke-api/poke-api.service.tns.ts");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _src_app_shared_pokemon_info_pokemon_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/shared/pokemon-info/pokemon-info.component.ts");










function BookPage_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar-menu");
} }
function BookPage_app_pokemon_info_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pokemon-info", 4);
} if (rf & 2) {
    var pokemon_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pokemon", pokemon_r5);
} }
function BookPage_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "GridLayout", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "Label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var BookPage = /** @class */ (function () {
    function BookPage(utils, pokeApi) {
        this.utils = utils;
        this.pokeApi = pokeApi;
    }
    BookPage.prototype.ngOnInit = function () {
        var _this = this;
        var now = new Date();
        var start = new Date(now.getFullYear(), 0, 0);
        var diff = now - start;
        var oneDay = 1000 * 60 * 60 * 24;
        var day = Math.floor(diff / oneDay);
        this.pokemon$ = this.pokeApi.getPokemonByNumber(day).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return _this.utils.generatePokemonObject(res);
        }));
    };
    BookPage.ɵfac = function BookPage_Factory(t) { return new (t || BookPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_utils_app_utils_app_utils__WEBPACK_IMPORTED_MODULE_2__["AppUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_services_poke_api_poke_api_service__WEBPACK_IMPORTED_MODULE_3__["PokeApiService"])); };
    BookPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookPage, selectors: [["page-book"]], decls: 8, vars: 4, consts: [["title", "Book of Today", 1, "navbar-dark", "bg-dark"], ["web", ""], [3, "pokemon", 4, "ngIf", "ngIfElse"], ["loading", ""], [3, "pokemon"], ["rows", "*", "columns", "*", 1, ""], ["text", "Loading...", 1, "h1", "text-center", "align-self-center"]], template: function BookPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ActionBar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookPage_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "Container");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BookPage_app_pokemon_info_4_Template, 1, 1, "app-pokemon-info", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BookPage_ng_template_6_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx.pokemon$))("ngIfElse", _r3);
        } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_4__["ActionBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _src_app_shared_pokemon_info_pokemon_info_component__WEBPACK_IMPORTED_MODULE_6__["PokemonInfoComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [""] });
    return BookPage;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'page-book',
                templateUrl: './book.page.html',
                styleUrls: ['./book.page.css'],
            }]
    }], function () { return [{ type: _src_app_utils_app_utils_app_utils__WEBPACK_IMPORTED_MODULE_2__["AppUtils"] }, { type: _src_app_services_poke_api_poke_api_service__WEBPACK_IMPORTED_MODULE_3__["PokeApiService"] }]; }, null); })();


/***/ }),

/***/ "./app/pages/home/home.page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _src_app_utils_app_utils_app_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/utils/app-utils/app-utils.tns.ts");
/* harmony import */ var _src_app_utils_hide_action_bar_hide_action_bar_tns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/utils/hide-action-bar/hide-action-bar.tns.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");







var _c0 = function () { return ["/", "app", "book"]; };
var _c1 = function () { return ["/", "app", "today"]; };
function HomePage_GridLayout_1_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "GridLayout", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("layoutChanged", function HomePage_GridLayout_1_Template_GridLayout_layoutChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onLayoutChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "Label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "Button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "Image", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "Button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx_r0.gridLayoutRows);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("text", "Welcome to ", ctx_r0.title, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("row", ctx_r0.gridElementsRows[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("row", ctx_r0.gridElementsRows[1])("nsRouterLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("row", ctx_r0.gridElementsRows[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("row", ctx_r0.gridElementsRows[3])("nsRouterLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
} }
var HomePage = /** @class */ (function () {
    function HomePage(utils, cdr) {
        this.utils = utils;
        this.cdr = cdr;
        this.title = 'nativescript-pokedex';
    }
    HomePage.prototype.ngOnInit = function () {
        this.onLayoutChanged(null);
    };
    HomePage.prototype.onLayoutChanged = function ($event) {
        if (this.utils.platform() == 'web' && this.utils.screenWidth() > 640) {
            this.gridLayoutRows = '100 auto auto * auto 100';
            this.gridElementsRows = ['1', '2', '3', '4'];
        }
        else {
            this.gridLayoutRows = 'auto auto * auto';
            this.gridElementsRows = ['0', '1', '2', '3'];
        }
    };
    HomePage.ɵfac = function HomePage_Factory(t) { return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_utils_app_utils_app_utils__WEBPACK_IMPORTED_MODULE_1__["AppUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
    HomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePage, selectors: [["page-home"]], decls: 2, vars: 1, consts: [["hideActionBar", "", 1, "flex"], ["class", "p-20 py-2", "columns", "*", 3, "rows", "layoutChanged", 4, "ngIf"], ["columns", "*", 1, "p-20", "py-2", 3, "rows", "layoutChanged"], ["textWrap", "true", 1, "h1", "text-center", 3, "row", "text"], ["clearHistory", "true", "text", "go to book page", 1, "btn", 3, "row", "nsRouterLink"], ["src", "~/assets/pokeapi_logo.png", "loadMode", "async", "stretch", "aspectFit", 3, "row"], ["clearHistory", "true", "text", "Go to Home!", 1, "btn", "btn-primary", "btn-lg", 3, "row", "nsRouterLink"]], template: function HomePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "Container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomePage_GridLayout_1_Template, 5, 10, "GridLayout", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gridLayoutRows);
        } }, directives: [_src_app_utils_hide_action_bar_hide_action_bar_tns__WEBPACK_IMPORTED_MODULE_2__["HideActionBarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _nativescript_angular__WEBPACK_IMPORTED_MODULE_4__["NSRouterLink"]], styles: [""] });
    return HomePage;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'page-home',
                templateUrl: './home.page.html',
                styleUrls: ['./home.page.css'],
            }]
    }], function () { return [{ type: _src_app_utils_app_utils_app_utils__WEBPACK_IMPORTED_MODULE_1__["AppUtils"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./app/pages/pokedex/pokedex.page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokedexPage", function() { return PokedexPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _src_app_services_poke_api_poke_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/services/poke-api/poke-api.service.tns.ts");
/* harmony import */ var _src_app_utils_app_utils_app_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/utils/app-utils/app-utils.tns.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











var _c0 = ["PokemonsStack"];
function PokedexPage_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar-menu");
} }
function PokedexPage_GridLayout_7_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "GridLayout", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tap", function PokedexPage_GridLayout_7_Template_GridLayout_tap_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); var pokemon_r5 = ctx.$implicit; var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.navigatePokemon(pokemon_r5.number); })("click", function PokedexPage_GridLayout_7_Template_GridLayout_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); var pokemon_r5 = ctx.$implicit; var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.navigatePokemon(pokemon_r5.number); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "Label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "Image", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "Label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var pokemon_r5 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", pokemon_r5.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", pokemon_r5.sprites.frontDefault);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx_r3.utils.kebabCaseToSpaced(pokemon_r5.name));
} }
function PokedexPage_GridLayout_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "GridLayout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "Label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var PokedexPage = /** @class */ (function () {
    function PokedexPage(utils, pokeApi, router) {
        this.utils = utils;
        this.pokeApi = pokeApi;
        this.router = router;
        this.isLoading = false;
        this.pokemons = {};
        this.pageSize = 15;
    }
    Object.defineProperty(PokedexPage.prototype, "pokemonsList", {
        get: function () {
            return Object.values(this.pokemons);
        },
        enumerable: false,
        configurable: true
    });
    PokedexPage.prototype.ngOnInit = function () {
        if (this.utils.platform() == 'web') {
            this.getPokemons(true);
        }
        else {
            this.getPokemons();
        }
    };
    PokedexPage.prototype.getPokemons = function (repeat) {
        var _this = this;
        if (repeat === void 0) { repeat = false; }
        this.isLoading = true;
        var padding = Object.keys(this.pokemons).length + 1;
        var pokemons$ = Array(this.pageSize).fill(undefined).map(function (n, i) {
            var pokemon$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
                var pokemonNumber = i + padding;
                _this.pokeApi.getPokemonByNumber(pokemonNumber).subscribe(function (res) {
                    observer.next(_this.utils.generatePokemonObject(res));
                    observer.complete();
                    observer.unsubscribe();
                });
            });
            return pokemon$;
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(pokemons$).subscribe({
            next: function (res) {
                for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                    var pokemon = res_1[_i];
                    _this.pokemons[pokemon.number] = pokemon;
                }
            },
            complete: function () {
                if (repeat) {
                    _this.getPokemons();
                }
                _this.isLoading = false;
            }
        });
    };
    PokedexPage.prototype.onScroll = function ($event) {
        if (this.isLoading)
            return;
        if (this.utils.platform() == 'web') {
            // Ref: https://stackoverflow.com/a/9439807/2393762
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                this.getPokemons();
            }
        }
        else {
            // Ref: https://stackoverflow.com/a/54483235/2393762
            var length_1 = this.PokemonsStack.nativeElement.getChildrenCount();
            var lastItem = this.PokemonsStack.nativeElement.getChildAt(length_1 - 1);
            var lastItemY = lastItem.getLocationRelativeTo(this.PokemonsStack.nativeElement).y;
            var scrollView = $event.object;
            var verticalOffset = scrollView.getActualSize().height + scrollView.verticalOffset;
            if (verticalOffset >= lastItemY) {
                this.getPokemons();
            }
        }
    };
    PokedexPage.prototype.navigatePokemon = function (pokemonNumber) {
        this.router.navigate(['/', 'app', 'pokemon', pokemonNumber]);
    };
    PokedexPage.ɵfac = function PokedexPage_Factory(t) { return new (t || PokedexPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_utils_app_utils_app_utils__WEBPACK_IMPORTED_MODULE_3__["AppUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_services_poke_api_poke_api_service__WEBPACK_IMPORTED_MODULE_2__["PokeApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
    PokedexPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokedexPage, selectors: [["page-pokedex"]], viewQuery: function PokedexPage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.PokemonsStack = _t.first);
        } }, decls: 9, vars: 2, consts: [["title", "Pok\u00E9dex", 1, "navbar-dark", "bg-dark"], ["web", ""], ["orientation", "vertical", 3, "scroll"], ["style.padding", "0 8"], ["PokemonsStack", ""], ["columns", "75 100 *", "class", "align-items-center card btn btn-light col col-12 col-md-6 col-lg-4", "height", "50", "style.margin", "5", "style.borderColor", "black", "style.borderWidth", "1 1 1 1", 3, "tap", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["columns", "75 100 *", "height", "50", "style.margin", "5", "style.borderColor", "black", "style.borderWidth", "1 1 1 1", 1, "align-items-center", "card", "btn", "btn-light", "col", "col-12", "col-md-6", "col-lg-4", 3, "tap", "click"], ["col", "0", 1, "h3", "text-center", 3, "text"], ["col", "1", 3, "src"], ["col", "2", 1, "h3", "text-capitalize", 3, "text"], ["text", "Loading...", 1, "h4"]], template: function PokedexPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ActionBar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokedexPage_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "Container");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ScrollView", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function PokedexPage_Template_ScrollView_scroll_4_listener($event) { return ctx.onScroll($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "StackLayout", 3, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PokedexPage_GridLayout_7_Template, 4, 3, "GridLayout", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PokedexPage_GridLayout_8_Template, 2, 0, "GridLayout", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pokemonsList);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_5__["ActionBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [""] });
    return PokedexPage;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokedexPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'page-pokedex',
                templateUrl: './pokedex.page.html',
                styleUrls: ['./pokedex.page.css'],
            }]
    }], function () { return [{ type: _src_app_utils_app_utils_app_utils__WEBPACK_IMPORTED_MODULE_3__["AppUtils"] }, { type: _src_app_services_poke_api_poke_api_service__WEBPACK_IMPORTED_MODULE_2__["PokeApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { PokemonsStack: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['PokemonsStack', { static: true }]
        }] }); })();


/***/ }),

/***/ "./app/pages/pokemon/pokemon.page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonPage", function() { return PokemonPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _src_app_services_poke_api_poke_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/services/poke-api/poke-api.service.tns.ts");
/* harmony import */ var _src_app_utils_app_utils_app_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/utils/app-utils/app-utils.tns.ts");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _src_app_utils_platform_view_platform_view_tns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/utils/platform-view/platform-view.tns.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _src_app_shared_pokemon_info_pokemon_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/shared/pokemon-info/pokemon-info.component.ts");













function PokemonPage_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar-menu");
} }
var _c0 = function () { return ["/", "app", "pokedex"]; };
function PokemonPage_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "Button", 5);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function PokemonPage_app_pokemon_info_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pokemon-info", 6);
} if (rf & 2) {
    var pokemon_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pokemon", pokemon_r7);
} }
function PokemonPage_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "GridLayout", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "Label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var PokemonPage = /** @class */ (function () {
    function PokemonPage(route, pokeApi, utils) {
        this.route = route;
        this.pokeApi = pokeApi;
        this.utils = utils;
    }
    PokemonPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.pokemon$ = _this.pokeApi.getPokemonByNumber(params.number).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                return _this.utils.generatePokemonObject(res);
            }));
        });
    };
    PokemonPage.ɵfac = function PokemonPage_Factory(t) { return new (t || PokemonPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_services_poke_api_poke_api_service__WEBPACK_IMPORTED_MODULE_3__["PokeApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_utils_app_utils_app_utils__WEBPACK_IMPORTED_MODULE_4__["AppUtils"])); };
    PokemonPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokemonPage, selectors: [["page-pokemon"]], decls: 11, vars: 4, consts: [["title", "Pok\u00E9dex", 1, "navbar-dark", "bg-dark"], ["web", ""], [1, "text-center"], [3, "pokemon", 4, "ngIf", "ngIfElse"], ["loading", ""], ["text", "Back to Pok\u00E9dex", 1, "btn", "btn-primary", "btn-lg", "mt-4", 3, "routerLink"], [3, "pokemon"], ["rows", "*", "columns", "*", 1, ""], ["text", "Loading...", 1, "h1", "text-center", "align-self-center"]], template: function PokemonPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ActionBar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonPage_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "Container", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "PlatformView");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PokemonPage_ng_template_5_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PokemonPage_app_pokemon_info_7_Template, 1, 1, "app-pokemon-info", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PokemonPage_ng_template_9_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, ctx.pokemon$))("ngIfElse", _r5);
        } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_5__["ActionBarComponent"], _src_app_utils_platform_view_platform_view_tns__WEBPACK_IMPORTED_MODULE_6__["PlatformViewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _src_app_shared_pokemon_info_pokemon_info_component__WEBPACK_IMPORTED_MODULE_8__["PokemonInfoComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [""] });
    return PokemonPage;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'page-pokemon',
                templateUrl: './pokemon.page.html',
                styleUrls: ['./pokemon.page.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _src_app_services_poke_api_poke_api_service__WEBPACK_IMPORTED_MODULE_3__["PokeApiService"] }, { type: _src_app_utils_app_utils_app_utils__WEBPACK_IMPORTED_MODULE_4__["AppUtils"] }]; }, null); })();


/***/ }),

/***/ "./app/pages/random/random.page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomPage", function() { return RandomPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _src_app_utils_app_utils_app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/utils/app-utils/app-utils.tns.ts");
/* harmony import */ var _src_app_services_poke_api_poke_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/services/poke-api/poke-api.service.tns.ts");
/* harmony import */ var _src_app_models_pokemon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/models/pokemon.ts");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _src_app_shared_pokemon_info_pokemon_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/shared/pokemon-info/pokemon-info.component.ts");











function RandomPage_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar-menu");
} }
function RandomPage_app_pokemon_info_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pokemon-info", 5);
} if (rf & 2) {
    var pokemon_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pokemon", pokemon_r5);
} }
function RandomPage_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "GridLayout", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "Label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var RandomPage = /** @class */ (function () {
    function RandomPage(utils, pokeApi) {
        this.utils = utils;
        this.pokeApi = pokeApi;
        this.POKEMON_SPRITES = _src_app_models_pokemon__WEBPACK_IMPORTED_MODULE_4__["POKEMON_SPRITES"];
        this.isLoading = true;
    }
    RandomPage.prototype.ngOnInit = function () {
        this.getRandomPokemon();
    };
    RandomPage.prototype.getRandomPokemon = function () {
        var _this = this;
        this.isLoading = true;
        var randomNumber = 808;
        while (randomNumber > 807) {
            randomNumber = Math.floor(Math.random() * 1000);
        }
        this.pokemon$ = this.pokeApi.getPokemonByNumber(randomNumber).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
            _this.isLoading = false;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return _this.utils.generatePokemonObject(res);
        }));
    };
    RandomPage.ɵfac = function RandomPage_Factory(t) { return new (t || RandomPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_utils_app_utils_app_utils__WEBPACK_IMPORTED_MODULE_2__["AppUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_services_poke_api_poke_api_service__WEBPACK_IMPORTED_MODULE_3__["PokeApiService"])); };
    RandomPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RandomPage, selectors: [["page-random"]], decls: 9, vars: 4, consts: [["title", "Lucky Pok\u00E9mon!", 1, "navbar-dark", "bg-dark"], ["ios.systemIcon", "13", "ios.position", "right", "android.systemIcon", "ic_popup_sync", "android.position", "actionBar", 3, "tap"], ["web", ""], [3, "pokemon", 4, "ngIf", "ngIfElse"], ["loading", ""], [3, "pokemon"], ["rows", "*", "columns", "*", 1, ""], ["text", "Loading...", 1, "h1", "text-center", "align-self-center"]], template: function RandomPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ActionBar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ActionItem", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tap", function RandomPage_Template_ActionItem_tap_1_listener() { return ctx.getRandomPokemon(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RandomPage_ng_template_2_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "Container");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RandomPage_app_pokemon_info_5_Template, 1, 1, "app-pokemon-info", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RandomPage_ng_template_7_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.pokemon$))("ngIfElse", _r3);
        } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_5__["ActionBarComponent"], _nativescript_angular__WEBPACK_IMPORTED_MODULE_5__["ActionItemDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _src_app_shared_pokemon_info_pokemon_info_component__WEBPACK_IMPORTED_MODULE_7__["PokemonInfoComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [""] });
    return RandomPage;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RandomPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'page-random',
                templateUrl: './random.page.html',
                styleUrls: ['./random.page.css'],
            }]
    }], function () { return [{ type: _src_app_utils_app_utils_app_utils__WEBPACK_IMPORTED_MODULE_2__["AppUtils"] }, { type: _src_app_services_poke_api_poke_api_service__WEBPACK_IMPORTED_MODULE_3__["PokeApiService"] }]; }, null); })();


/***/ }),

/***/ "./app/pages/today/today.page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodayPage", function() { return TodayPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _src_app_utils_app_utils_app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/utils/app-utils/app-utils.tns.ts");
/* harmony import */ var _src_app_services_poke_api_poke_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/services/poke-api/poke-api.service.tns.ts");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _src_app_shared_pokemon_info_pokemon_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/shared/pokemon-info/pokemon-info.component.ts");










function TodayPage_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar-menu");
} }
function TodayPage_app_pokemon_info_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pokemon-info", 4);
} if (rf & 2) {
    var pokemon_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pokemon", pokemon_r5);
} }
function TodayPage_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "GridLayout", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "Label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var TodayPage = /** @class */ (function () {
    function TodayPage(utils, pokeApi) {
        this.utils = utils;
        this.pokeApi = pokeApi;
    }
    TodayPage.prototype.ngOnInit = function () {
        var _this = this;
        var now = new Date();
        var start = new Date(now.getFullYear(), 0, 0);
        var diff = now - start;
        var oneDay = 1000 * 60 * 60 * 24;
        var day = Math.floor(diff / oneDay);
        this.pokemon$ = this.pokeApi.getPokemonByNumber(day).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return _this.utils.generatePokemonObject(res);
        }));
    };
    TodayPage.ɵfac = function TodayPage_Factory(t) { return new (t || TodayPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_utils_app_utils_app_utils__WEBPACK_IMPORTED_MODULE_2__["AppUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_services_poke_api_poke_api_service__WEBPACK_IMPORTED_MODULE_3__["PokeApiService"])); };
    TodayPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodayPage, selectors: [["page-today"]], decls: 8, vars: 4, consts: [["title", "Pok\u00E9mon of Today", 1, "navbar-dark", "bg-dark"], ["web", ""], [3, "pokemon", 4, "ngIf", "ngIfElse"], ["loading", ""], [3, "pokemon"], ["rows", "*", "columns", "*", 1, ""], ["text", "Loading...", 1, "h1", "text-center", "align-self-center"]], template: function TodayPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ActionBar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodayPage_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "Container");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TodayPage_app_pokemon_info_4_Template, 1, 1, "app-pokemon-info", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TodayPage_ng_template_6_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx.pokemon$))("ngIfElse", _r3);
        } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_4__["ActionBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _src_app_shared_pokemon_info_pokemon_info_component__WEBPACK_IMPORTED_MODULE_6__["PokemonInfoComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [""] });
    return TodayPage;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodayPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'page-today',
                templateUrl: './today.page.html',
                styleUrls: ['./today.page.css'],
            }]
    }], function () { return [{ type: _src_app_utils_app_utils_app_utils__WEBPACK_IMPORTED_MODULE_2__["AppUtils"] }, { type: _src_app_services_poke_api_poke_api_service__WEBPACK_IMPORTED_MODULE_3__["PokeApiService"] }]; }, null); })();


/***/ }),

/***/ "./app/services/cache/cache.service.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheService", function() { return CacheService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/index.js");



var CacheService = /** @class */ (function () {
    function CacheService() {
    }
    CacheService.prototype.get = function (key) {
        return _nativescript_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationSettings"].getString(key);
    };
    CacheService.prototype.put = function (key, val) {
        _nativescript_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationSettings"].setString(key, val);
    };
    CacheService.prototype.remove = function (key) {
        _nativescript_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationSettings"].remove(key);
    };
    CacheService.ɵfac = function CacheService_Factory(t) { return new (t || CacheService)(); };
    CacheService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CacheService, factory: CacheService.ɵfac });
    return CacheService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CacheService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./app/services/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.get = function (uri) {
        return this.http.get(uri);
    };
    HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac });
    return HttpService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./app/services/poke-api/poke-api.service.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokeApiService", function() { return PokeApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/services/http.service.ts");
/* harmony import */ var _src_app_services_cache_cache_service_tns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/services/cache/cache.service.tns.ts");







var API_URI = 'https://pokeapi.co/api/v2/';
var PokeApiService = /** @class */ (function () {
    function PokeApiService(http, cache) {
        this.http = http;
        this.cache = cache;
    }
    PokeApiService.prototype.getPokemonByNumber = function (number) {
        var _this = this;
        var pokemonData = this.cache.get("pokemon_" + number);
        if (pokemonData) {
            var pokemonData$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
                observer.next(JSON.parse(pokemonData));
                observer.complete();
                observer.unsubscribe();
            });
            return pokemonData$;
        }
        else {
            var httpRequest = this.http.get(API_URI + "pokemon/" + number);
            httpRequest.subscribe(function (res) {
                try {
                    _this.cache.put("pokemon_" + number, JSON.stringify(res));
                }
                catch (err) {
                    console.warn(err);
                }
            });
            return httpRequest;
        }
    };
    PokeApiService.ɵfac = function PokeApiService_Factory(t) { return new (t || PokeApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_services_cache_cache_service_tns__WEBPACK_IMPORTED_MODULE_3__["CacheService"])); };
    PokeApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PokeApiService, factory: PokeApiService.ɵfac });
    return PokeApiService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokeApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }, { type: _src_app_services_cache_cache_service_tns__WEBPACK_IMPORTED_MODULE_3__["CacheService"] }]; }, null); })();


/***/ }),

/***/ "./app/shared/container/container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _src_app_utils_platform_view_platform_view_tns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/utils/platform-view/platform-view.tns.ts");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");






var _c0 = function () { return ["/", "app", "today"]; };
var _c1 = function () { return ["/", "app", "random"]; };
var _c2 = function () { return ["pokedex", "pokemon"]; };
var _c3 = function () { return ["/", "app", "pokedex"]; };
function ContainerComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "Container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "GridLayout", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "GridLayout", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "GridLayout", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "Label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "Label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "GridLayout", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "Label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "Label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "GridLayout", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "Label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "Label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r1.isCurrentRoute("today") ? "blue" : "gray");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nsRouterLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r1.isCurrentRoute("random") ? "blue" : "gray");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nsRouterLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r1.isCurrentRoute(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2)) ? "blue" : "gray");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nsRouterLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
} }
function ContainerComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
} }
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    ContainerComponent.prototype.ngOnInit = function () { };
    ContainerComponent.prototype.isCurrentRoute = function (routes) {
        var _this = this;
        if (typeof routes == 'string') {
            routes = [routes];
        }
        return routes.some(function (route) {
            return _this.router.url.split('/')[2] == route;
        });
    };
    ContainerComponent.ɵfac = function ContainerComponent_Factory(t) { return new (t || ContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    ContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContainerComponent, selectors: [["app-container"]], decls: 5, vars: 0, consts: [["mobile", ""], ["web", ""], ["style.paddingTop", "16"], ["rows", "* 60"], ["row", "0"], ["row", "1", "columns", "8 * 8 * 8 * 8", "style.borderColor", "black", "style.borderWidth", "1 0 0 0", "style.padding", "10", 1, "text-center"], ["col", "1", "rows", "* *", 3, "nsRouterLink"], ["text", "\uF133", 1, "far"], ["row", "1", "style.background", "white", "text", "Today", 1, "far"], ["col", "3", "rows", "* *", 3, "nsRouterLink"], ["text", "\uF522", 1, "fas"], ["row", "1", "text", "Random"], ["col", "5", "rows", "* *", 3, "nsRouterLink"], ["text", "\uF03A", 1, "fas"], ["row", "1", "text", "Pok\u00E9dex"]], template: function ContainerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "PlatformView");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContainerComponent_ng_template_1_Template, 13, 13, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContainerComponent_ng_template_3_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_src_app_utils_platform_view_platform_view_tns__WEBPACK_IMPORTED_MODULE_2__["PlatformViewComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["NSRouterLink"]], styles: [".far[_ngcontent-%COMP%] {\n    font-family: \"Font Awesome 5 Free\", \"fa-regular-400\";\n    font-weight: 400; \n}\n.fab[_ngcontent-%COMP%] {\n    font-family: \"Font Awesome 5 Brands\", \"fa-brands-400\";\n    font-weight: 400; \n}\n.fas[_ngcontent-%COMP%] {\n    font-family: \"Font Awesome 5 Free\", \"fa-solid-900\";\n    font-weight: 900; \n}"] });
    return ContainerComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-container',
                templateUrl: './container.component.html',
                styleUrls: ['./container.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./app/shared/pokemon-info/pokemon-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonInfoComponent", function() { return PokemonInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _src_app_utils_app_utils_app_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/utils/app-utils/app-utils.tns.ts");
/* harmony import */ var _src_app_models_pokemon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/models/pokemon.ts");
/* harmony import */ var _src_app_utils_platform_view_platform_view_tns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/utils/platform-view/platform-view.tns.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function PokemonInfoComponent_ng_template_6_Image_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "Image", 15);
} if (rf & 2) {
    var sprite_r6 = ctx.$implicit;
    var i_r7 = ctx.index;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("col", i_r7)("src", ctx_r5.pokemon.sprites[sprite_r6]);
} }
function PokemonInfoComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "GridLayout", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonInfoComponent_ng_template_6_Image_1_Template, 1, 2, "Image", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.POKEMON_SPRITES);
} }
function PokemonInfoComponent_ng_template_8_ng_container_1_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "Image", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var sprite_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r11.pokemon.sprites[sprite_r9]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.utils.camelCaseToSpaced(sprite_r9));
} }
function PokemonInfoComponent_ng_template_8_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonInfoComponent_ng_template_8_ng_container_1_ng_container_1_ng_template_1_Template, 5, 2, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function PokemonInfoComponent_ng_template_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonInfoComponent_ng_template_8_ng_container_1_ng_container_1_Template, 2, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var sprite_r9 = ctx.$implicit;
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.pokemon.sprites[sprite_r9]);
} }
function PokemonInfoComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonInfoComponent_ng_template_8_ng_container_1_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.POKEMON_SPRITES);
} }
function PokemonInfoComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "Label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "Label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "Label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "Label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var stat_r13 = ctx.$implicit;
    var i_r14 = ctx.index;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("row", i_r14 + 2)("text", stat_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("row", i_r14 + 2)("text", ctx_r4.utils.kebabCaseToSpaced(stat_r13.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("row", i_r14 + 2)("text", stat_r13.effort);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("row", i_r14 + 2)("text", stat_r13.baseStat);
} }
var PokemonInfoComponent = /** @class */ (function () {
    function PokemonInfoComponent(utils) {
        this.utils = utils;
        this.POKEMON_SPRITES = _src_app_models_pokemon__WEBPACK_IMPORTED_MODULE_2__["POKEMON_SPRITES"];
    }
    PokemonInfoComponent.prototype.ngOnInit = function () { };
    PokemonInfoComponent.ɵfac = function PokemonInfoComponent_Factory(t) { return new (t || PokemonInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_utils_app_utils_app_utils__WEBPACK_IMPORTED_MODULE_1__["AppUtils"])); };
    PokemonInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokemonInfoComponent, selectors: [["app-pokemon-info"]], inputs: { pokemon: "pokemon" }, decls: 17, vars: 5, consts: [[1, "p-20", "mt-5"], [1, "h3", "text-center", 3, "text"], [1, "h1", "text-center", "text-capitalize", 3, "text"], [1, "h5", "text-center", 3, "text"], ["mobile", ""], ["web", ""], ["columns", "* 3* 2* 2*", 1, "card", "text-white", "bg-info", "text-center", "col", "col-12", "col-md-8", "offset-md-2", "col-lg-6", "offset-lg-3", 3, "rows"], ["row", "0", "col", "0", "colSpan", "4", "text", "Pok\u00E9mon Stats", 1, "card-header", "h3", "text-dark", "bg-white"], ["row", "1", "col", "0", "text", "ID", 1, "h5", "mt-2"], ["row", "1", "col", "1", "text", "Name", 1, "h5", "mt-2"], ["row", "1", "col", "2", "text", "Effort", 1, "h5", "mt-2"], ["row", "1", "col", "3", "text", "Stat", 1, "h5", "mt-2"], [4, "ngFor", "ngForOf"], ["columns", "* * * * * * * *", "background", "black", "height", "100"], ["stretch", "aspectFit", 3, "col", "src", 4, "ngFor", "ngForOf"], ["stretch", "aspectFit", 3, "col", "src"], [1, "bg-secondary", "card", "col-12", "col-md-8", "offset-md-2", "col-lg-6", "offset-lg-3", "mb-3"], [4, "ngIf"], ["ngbSlide", ""], [1, "picsum-img-wrapper", "p-4", "mb-4"], ["stretch", "none", 1, "p-4", "mb-4", 3, "src"], [1, "carousel-caption"], [1, "text-capitalize"], ["col", "0", 1, "h6", 3, "row", "text"], ["col", "1", 1, "h6", "text-center", "text-capitalize", 3, "row", "text"], ["col", "2", 1, "h6", 3, "row", "text"], ["col", "3", 1, "h6", 3, "row", "text"]], template: function PokemonInfoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "GridLayout", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "StackLayout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "Label", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "Label", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "Label", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "PlatformView");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PokemonInfoComponent_ng_template_6_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PokemonInfoComponent_ng_template_8_Template, 2, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "GridLayout", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "Label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "Label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "Label", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "Label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "Label", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PokemonInfoComponent_ng_container_16_Template, 5, 8, "ng-container", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("text", "#", ctx.pokemon.number, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx.pokemon.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx.pokemon.types.join(" "));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", "* * " + "* ".repeat(ctx.pokemon.stats.length));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pokemon.stats);
        } }, directives: [_src_app_utils_platform_view_platform_view_tns__WEBPACK_IMPORTED_MODULE_3__["PlatformViewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [""] });
    return PokemonInfoComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pokemon-info',
                templateUrl: './pokemon-info.component.html',
                styleUrls: ['./pokemon-info.component.css'],
            }]
    }], function () { return [{ type: _src_app_utils_app_utils_app_utils__WEBPACK_IMPORTED_MODULE_1__["AppUtils"] }]; }, { pokemon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['pokemon']
        }] }); })();


/***/ }),

/***/ "./app/utils/app-utils/app-utils.common.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debugLog", function() { return debugLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelCaseToSpaced", function() { return camelCaseToSpaced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kebabCaseToSpaced", function() { return kebabCaseToSpaced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePokemonObject", function() { return generatePokemonObject; });
function debugLog() {
    var msg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        msg[_i] = arguments[_i];
    }
    console.log.apply(console, msg);
}
function camelCaseToSpaced(camelCase) {
    if (!camelCase)
        return '';
    return camelCase.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
}
function kebabCaseToSpaced(kebabCase) {
    if (!kebabCase)
        return '';
    return kebabCase.replace(/-/g, ' ').toLowerCase();
}
function generatePokemonObject(pokemonData) {
    var pokemon = {
        number: pokemonData.id,
        order: pokemonData.order,
        name: pokemonData.name,
        types: pokemonData.types.map(function (type) { return type.name; }),
        height: pokemonData.height,
        baseExperience: pokemonData.baseExperience,
        sprites: {
            frontDefault: pokemonData.sprites.front_default,
            backDefault: pokemonData.sprites.back_default,
            frontShiny: pokemonData.sprites.front_shiny,
            backShiny: pokemonData.sprites.back_shiny,
            frontFemale: pokemonData.sprites.front_female,
            backFemale: pokemonData.sprites.back_female,
            frontShinyFemale: pokemonData.sprites.front_shiny_female,
            backShinyFemale: pokemonData.sprites.back_shiny_female,
        },
        stats: pokemonData.stats.map(function (stat) {
            return {
                id: stat.stat.url.split('/')[6],
                name: stat.stat.name,
                effort: stat.effort,
                baseStat: stat.base_stat,
            };
        }),
    };
    return pokemon;
}


/***/ }),

/***/ "./app/utils/app-utils/app-utils.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUtils", function() { return AppUtils; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/index.js");
/* harmony import */ var _src_app_utils_app_utils_app_utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/utils/app-utils/app-utils.common.ts");




var AppUtils = /** @class */ (function () {
    function AppUtils() {
        var _this = this;
        this.debugLog = _src_app_utils_app_utils_app_utils_common__WEBPACK_IMPORTED_MODULE_2__["debugLog"];
        this.camelCaseToSpaced = _src_app_utils_app_utils_app_utils_common__WEBPACK_IMPORTED_MODULE_2__["camelCaseToSpaced"];
        this.kebabCaseToSpaced = _src_app_utils_app_utils_app_utils_common__WEBPACK_IMPORTED_MODULE_2__["kebabCaseToSpaced"];
        this.generatePokemonObject = _src_app_utils_app_utils_app_utils_common__WEBPACK_IMPORTED_MODULE_2__["generatePokemonObject"];
        this.platformVal = function (vals, verbose) {
            if (verbose === void 0) { verbose = false; }
            return vals[_this.platform(verbose)];
        };
        this.platform = function (verbose) {
            if (verbose === void 0) { verbose = false; }
            if (verbose) {
                if (_nativescript_core__WEBPACK_IMPORTED_MODULE_1__["isAndroid"]) {
                    return 'android';
                }
                else if (_nativescript_core__WEBPACK_IMPORTED_MODULE_1__["isIOS"]) {
                    return 'ios';
                }
            }
            return 'mobile';
        };
        this.screenWidth = function () {
            return _nativescript_core__WEBPACK_IMPORTED_MODULE_1__["Screen"].mainScreen.widthDIPs;
        };
    }
    AppUtils.ɵfac = function AppUtils_Factory(t) { return new (t || AppUtils)(); };
    AppUtils.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppUtils, factory: AppUtils.ɵfac });
    return AppUtils;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppUtils, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./app/utils/hide-action-bar/hide-action-bar.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideActionBarDirective", function() { return HideActionBarDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/index.js");




var HideActionBarDirective = /** @class */ (function () {
    function HideActionBarDirective(page) {
        page.actionBarHidden = true;
    }
    HideActionBarDirective.ɵfac = function HideActionBarDirective_Factory(t) { return new (t || HideActionBarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nativescript_core__WEBPACK_IMPORTED_MODULE_1__["Page"])); };
    HideActionBarDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HideActionBarDirective, selectors: [["", "hideActionBar", ""]] });
    return HideActionBarDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HideActionBarDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[hideActionBar]'
            }]
    }], function () { return [{ type: _nativescript_core__WEBPACK_IMPORTED_MODULE_1__["Page"] }]; }, null); })();


/***/ }),

/***/ "./app/utils/platform-view/platform-view.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformViewComponent", function() { return PlatformViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




var _c0 = ["mobile"];
var _c1 = ["android"];
var _c2 = ["ios"];
function PlatformViewComponent_ng_template_0_Template(rf, ctx) { }
var PlatformViewComponent = /** @class */ (function () {
    function PlatformViewComponent() {
        this.verbose = false;
    }
    PlatformViewComponent.prototype.viewTemplate = function () {
        if (this.verbose == false) {
            return this.mobile;
        }
        else if (_nativescript_core__WEBPACK_IMPORTED_MODULE_1__["isAndroid"]) {
            return this.android;
        }
        else if (_nativescript_core__WEBPACK_IMPORTED_MODULE_1__["isIOS"]) {
            return this.ios;
        }
    };
    PlatformViewComponent.ɵfac = function PlatformViewComponent_Factory(t) { return new (t || PlatformViewComponent)(); };
    PlatformViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlatformViewComponent, selectors: [["PlatformView"]], contentQueries: function PlatformViewComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticContentQuery"](dirIndex, _c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticContentQuery"](dirIndex, _c1, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticContentQuery"](dirIndex, _c2, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mobile = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.android = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ios = _t.first);
        } }, inputs: { verbose: "verbose" }, decls: 1, vars: 1, consts: [[3, "ngTemplateOutlet"]], template: function PlatformViewComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PlatformViewComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.viewTemplate());
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], encapsulation: 2 });
    return PlatformViewComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'PlatformView',
                template: "<ng-template [ngTemplateOutlet]=\"viewTemplate()\"></ng-template>",
            }]
    }], function () { return []; }, { verbose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['verbose']
        }], mobile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: ['mobile', { static: true }]
        }], android: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: ['android', { static: true }]
        }], ios: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: ['ios', { static: true }]
        }] }); })();


/***/ }),

/***/ "./main.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _src_app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.tns.ts");

        const isAndroid = __webpack_require__("../node_modules/@nativescript/core/index.js").isAndroid;
        if (isAndroid && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/index.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/@nativescript/webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/@nativescript/webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        


var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app/app.module.tns.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app/app.module.tns.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _src_app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.tns.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
}
// Optional - attach to livesync hooks and perfrom navigation
// import './livesync-navigation.tns';
var options = {};
// if (module['hot']) {
// 	options.hmrOptions = {
// 		moduleTypeFactory: () => AppModule,
// 		livesyncCallback: (platformReboot) => {
// 			setTimeout(platformReboot, 0);
// 		},
// 	};
// 	// Path to your app module.
// 	// You might have to change it if your module is in a different place.
// 	module['hot'].accept(['./app/app.module'], () => {
// 		global['hmrRefresh']();
// 	});
// }
// Don't forget to pass the options when creating the platform
_nativescript_angular__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign(options, options_Generated)).bootstrapModule(_src_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "~/package.json":
/***/ (function(module, exports) {

module.exports = require("~/package.json");

/***/ })

},[["./main.tns.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudG5zLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5tb2R1bGUudG5zLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAucm91dGVzLnRzIiwid2VicGFjazovLy8uL2FwcC9tb2RlbHMvcG9rZW1vbi50cyIsIndlYnBhY2s6Ly8vLi9hcHAvcGFnZXMvYm9vay9ib29rLnBhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BhZ2VzL2Jvb2svYm9vay5wYWdlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnRzIiwid2VicGFjazovLy8uL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5odG1sIiwid2VicGFjazovLy8uL2FwcC9wYWdlcy9wb2tlZGV4L3Bva2VkZXgucGFnZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvcGFnZXMvcG9rZWRleC9wb2tlZGV4LnBhZ2UuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvcGFnZXMvcG9rZW1vbi9wb2tlbW9uLnBhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BhZ2VzL3Bva2Vtb24vcG9rZW1vbi5wYWdlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BhZ2VzL3JhbmRvbS9yYW5kb20ucGFnZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvcGFnZXMvcmFuZG9tL3JhbmRvbS5wYWdlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BhZ2VzL3RvZGF5L3RvZGF5LnBhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BhZ2VzL3RvZGF5L3RvZGF5LnBhZ2UuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvc2VydmljZXMvY2FjaGUvY2FjaGUuc2VydmljZS50bnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlcnZpY2VzL2h0dHAuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2VydmljZXMvcG9rZS1hcGkvcG9rZS1hcGkuc2VydmljZS50bnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NoYXJlZC9jb250YWluZXIvY29udGFpbmVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NoYXJlZC9wb2tlbW9uLWluZm8vcG9rZW1vbi1pbmZvLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3Bva2Vtb24taW5mby9wb2tlbW9uLWluZm8uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3V0aWxzL2FwcC11dGlscy9hcHAtdXRpbHMuY29tbW9uLnRzIiwid2VicGFjazovLy8uL2FwcC91dGlscy9hcHAtdXRpbHMvYXBwLXV0aWxzLnRucy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvdXRpbHMvaGlkZS1hY3Rpb24tYmFyL2hpZGUtYWN0aW9uLWJhci50bnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3V0aWxzL3BsYXRmb3JtLXZpZXcvcGxhdGZvcm0tdmlldy50bnMudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50bnMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwifi9wYWNrYWdlLmpzb25cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLDRDQUE0QyxXQUFXO0FBQ3ZEO0FBQ0E7QUFDQSx5RTs7Ozs7OztBQ1pBLCtHQUFpRSxtQkFBTyxDQUFDLHlIQUF1RjtBQUNoSyxnRUFBZ0UsbUJBQU8sQ0FBQyx5SEFBdUY7QUFDL0osaUVB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QkFBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ0csT0FBTztrQkFBakQsMERBQVk7bUJBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNGLEdBQUc7a0JBQXpDLDBEQUFZO21CQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0FDWHRDLE9BQU8sRUFBRSxrRkFBK0MsWUFBd0I7QUFFaEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVhO0FBQzdELHNDQUFzQztBQUV0QyxJQUFJLE9BQU8sR0FBZSxFQUFFLENBQUM7QUFFN0IsdUJBQXVCO0FBQ3ZCLDBCQUEwQjtBQUMxQixtQkFBd0M7QUFDeEMsY0FBNEM7QUFDUjtBQUNwQyxPQUFPO0FBQ1AsTUFBTTtBQUVOLFNBQStCO0FBQy9CLFFBQTBFO0FBQzFFLFlBQXNEO0FBQ3RELHVGQUE0QjtBQUM1QixPQUFPO0FBQ0g7QUFFMEQ7QUFDOUQsMkJBQWdFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCaEUsMkMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuLi8kJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgcmVjdXJzaXZlXCI7IiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhQG5hdGl2ZXNjcmlwdC93ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhQG5hdGl2ZXNjcmlwdC93ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIUBuYXRpdmVzY3JpcHQvd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIUBuYXRpdmVzY3JpcHQvd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIid+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3MnXCJ9LHtcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCInfkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzJ1wifSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgUmVmOiBodHRwczovL21lZGl1bS5jb20vQEpDQWd1aWxlcmEvZm9udGF3ZXNvbWUtNS1hbmQtbmF0aXZlc2NyaXB0LTIyNjUzZjJiM2JhYyBcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZhclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwiXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiLCBcXFwiZmEtcmVndWxhci00MDBcXFwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCI0MDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZmFiXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1mYW1pbHlcIixcInZhbHVlXCI6XCJcXFwiRm9udCBBd2Vzb21lIDUgQnJhbmRzXFxcIiwgXFxcImZhLWJyYW5kcy00MDBcXFwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCI0MDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZmFzXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1mYW1pbHlcIixcInZhbHVlXCI6XCJcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCIsIFxcXCJmYS1zb2xpZC05MDBcXFwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCI5MDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJBY3Rpb25CYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjE2XCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xuXG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICdAc3JjL2FwcC9hcHAucm91dGVzJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuXHRleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2FwcC1yb290Jyxcblx0dGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2FwcC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgfVxuIiwiPCEtLSBcbiAgICBpT1MgaGFzIGlzc3VlcyB3aXRoIG5lc3RlZCBwYWdlcyB3aXRoIFBhZ2VcbiAgICBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9OYXRpdmVTY3JpcHQvbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaXNzdWVzLzE0NDFcbi0tPlxuPEdyaWRMYXlvdXQ+XG5cdDxwYWdlLXJvdXRlci1vdXRsZXQ+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XG48L0dyaWRMYXlvdXQ+IiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSwgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLCBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLCBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICdAc3JjL2FwcC9hcHAtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnQHNyYy9hcHAvYXBwLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEFwcFV0aWxzIH0gZnJvbSAnQHNyYy9hcHAvdXRpbHMvYXBwLXV0aWxzL2FwcC11dGlscy50bnMnO1xuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zZXJ2aWNlcy9odHRwLnNlcnZpY2UnO1xuaW1wb3J0IHsgUG9rZUFwaVNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zZXJ2aWNlcy9wb2tlLWFwaS9wb2tlLWFwaS5zZXJ2aWNlLnRucyc7XG5pbXBvcnQgeyBDYWNoZVNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zZXJ2aWNlcy9jYWNoZS9jYWNoZS5zZXJ2aWNlLnRucyc7XG5cbmltcG9ydCB7IEhpZGVBY3Rpb25CYXJEaXJlY3RpdmUgfSBmcm9tICdAc3JjL2FwcC91dGlscy9oaWRlLWFjdGlvbi1iYXIvaGlkZS1hY3Rpb24tYmFyLnRucyc7XG5pbXBvcnQgeyBQbGF0Zm9ybVZpZXdDb21wb25lbnQgfSBmcm9tICdAc3JjL2FwcC91dGlscy9wbGF0Zm9ybS12aWV3L3BsYXRmb3JtLXZpZXcudG5zJztcbmltcG9ydCB7IENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJ0BzcmMvYXBwL3NoYXJlZC9jb250YWluZXIvY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQb2tlbW9uSW5mb0NvbXBvbmVudCB9IGZyb20gJ0BzcmMvYXBwL3NoYXJlZC9wb2tlbW9uLWluZm8vcG9rZW1vbi1pbmZvLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSAnQHNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2UnO1xuaW1wb3J0IHsgVG9kYXlQYWdlIH0gZnJvbSAnQHNyYy9hcHAvcGFnZXMvdG9kYXkvdG9kYXkucGFnZSc7XG5pbXBvcnQgeyBSYW5kb21QYWdlIH0gZnJvbSAnQHNyYy9hcHAvcGFnZXMvcmFuZG9tL3JhbmRvbS5wYWdlJztcbmltcG9ydCB7IFBva2VkZXhQYWdlIH0gZnJvbSAnQHNyYy9hcHAvcGFnZXMvcG9rZWRleC9wb2tlZGV4LnBhZ2UnO1xuaW1wb3J0IHsgUG9rZW1vblBhZ2UgfSBmcm9tICdAc3JjL2FwcC9wYWdlcy9wb2tlbW9uL3Bva2Vtb24ucGFnZSc7XG5pbXBvcnQgeyBCb29rUGFnZSB9IGZyb20gJy4vcGFnZXMvYm9vay9ib29rLnBhZ2UnO1xuXG5cblxubGV0IHBhZ2VzID0gW0hvbWVQYWdlLCBUb2RheVBhZ2UsIFJhbmRvbVBhZ2UsIFBva2VkZXhQYWdlLCBQb2tlbW9uUGFnZSwgQm9va1BhZ2VdO1xubGV0IGRpcmVjdGl2ZXMgPSBbSGlkZUFjdGlvbkJhckRpcmVjdGl2ZV07XG5sZXQgY29tcG9uZW50cyA9IFtQbGF0Zm9ybVZpZXdDb21wb25lbnQsIENvbnRhaW5lckNvbXBvbmVudCwgUG9rZW1vbkluZm9Db21wb25lbnRdXG5cblxuQE5nTW9kdWxlKHtcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0QXBwQ29tcG9uZW50LFxuXHRcdC4uLnBhZ2VzLFxuXHRcdC4uLmRpcmVjdGl2ZXMsXG5cdFx0Li4uY29tcG9uZW50cyxcblx0XSxcblx0aW1wb3J0czogW1xuXHRcdE5hdGl2ZVNjcmlwdE1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcblx0XHRBcHBSb3V0aW5nTW9kdWxlLFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRBcHBVdGlscyxcblx0XHRIdHRwU2VydmljZSxcblx0XHRQb2tlQXBpU2VydmljZSxcblx0XHRDYWNoZVNlcnZpY2UsXG5cdF0sXG5cdGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG5cdHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBDb250YWluZXJDb21wb25lbnQgfSBmcm9tICdAc3JjL2FwcC9zaGFyZWQvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJ0BzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlJztcbmltcG9ydCB7IFRvZGF5UGFnZSB9IGZyb20gJ0BzcmMvYXBwL3BhZ2VzL3RvZGF5L3RvZGF5LnBhZ2UnO1xuaW1wb3J0IHsgUmFuZG9tUGFnZSB9IGZyb20gJ0BzcmMvYXBwL3BhZ2VzL3JhbmRvbS9yYW5kb20ucGFnZSc7XG5pbXBvcnQgeyBQb2tlZGV4UGFnZSB9IGZyb20gJy4vcGFnZXMvcG9rZWRleC9wb2tlZGV4LnBhZ2UnO1xuaW1wb3J0IHsgUG9rZW1vblBhZ2UgfSBmcm9tICcuL3BhZ2VzL3Bva2Vtb24vcG9rZW1vbi5wYWdlJztcbmltcG9ydCB7IEJvb2tQYWdlIH0gZnJvbSAnLi9wYWdlcy9ib29rL2Jvb2sucGFnZSc7XG5cblxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuXHR7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2hvbWUnLCBwYXRoTWF0Y2g6ICdmdWxsJywgfSxcblx0eyBwYXRoOiAnaG9tZScsIGNvbXBvbmVudDogSG9tZVBhZ2UsIH0sXG5cdHtcblx0XHRwYXRoOiAnYXBwJywgY29tcG9uZW50OiBDb250YWluZXJDb21wb25lbnQsIGNoaWxkcmVuOiBbXG5cdFx0XHR7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL3RvZGF5JywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcblx0XHRcdHsgcGF0aDogJ3RvZGF5JywgY29tcG9uZW50OiBUb2RheVBhZ2UsIH0sXG5cdFx0XHR7IHBhdGg6ICdyYW5kb20nLCBjb21wb25lbnQ6IFJhbmRvbVBhZ2UsIH0sXG5cdFx0XHR7IHBhdGg6ICdwb2tlZGV4JywgY29tcG9uZW50OiBQb2tlZGV4UGFnZSwgfSxcblx0XHRcdHsgcGF0aDogJ3Bva2Vtb24vOm51bWJlcicsIGNvbXBvbmVudDogUG9rZW1vblBhZ2UsIH0sXG5cdFx0XHR7IHBhdGg6ICdib29rJywgY29tcG9uZW50OiBCb29rUGFnZSwgfSxcblxuXHRcdF1cblx0fVxuXTtcbiIsImV4cG9ydCBjb25zdCBQT0tFTU9OX1NQUklURVM6IEFycmF5PHN0cmluZz4gPSBbJ2Zyb250RGVmYXVsdCcsICdiYWNrRGVmYXVsdCcsICdmcm9udFNoaW55JywgJ2JhY2tTaGlueScsICdmcm9udEZlbWFsZScsICdiYWNrRmVtYWxlJywgJ2Zyb250U2hpbnlGZW1hbGUnLCAnYmFja1NoaW55RmVtYWxlJ107XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9rZW1vbiB7XG4gICAgbnVtYmVyOiBudW1iZXI7XG4gICAgb3JkZXI6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdHlwZXM6IEFycmF5PHN0cmluZz47XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgYmFzZUV4cGVyaWVuY2U6IG51bWJlcjtcbiAgICBzcHJpdGVzOiB7XG4gICAgICAgIGZyb250RGVmYXVsdDogc3RyaW5nO1xuICAgICAgICBiYWNrRGVmYXVsdDogc3RyaW5nO1xuICAgICAgICBmcm9udFNoaW55Pzogc3RyaW5nO1xuICAgICAgICBiYWNrU2hpbnk/OiBzdHJpbmc7XG4gICAgICAgIGZyb250RmVtYWxlPzogc3RyaW5nO1xuICAgICAgICBiYWNrRmVtYWxlPzogc3RyaW5nO1xuICAgICAgICBmcm9udFNoaW55RmVtYWxlPzogc3RyaW5nO1xuICAgICAgICBiYWNrU2hpbnlGZW1hbGU/OiBzdHJpbmc7XG4gICAgfTtcbiAgICBzdGF0czogQXJyYXk8e1xuICAgICAgICBpZDogbnVtYmVyO1xuICAgICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICAgIGVmZm9ydDogbnVtYmVyO1xuICAgICAgICBiYXNlU3RhdDogbnVtYmVyO1xuICAgIH0+O1xufSIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFwcFV0aWxzIH0gZnJvbSAnQHNyYy9hcHAvdXRpbHMvYXBwLXV0aWxzL2FwcC11dGlscyc7XG5pbXBvcnQgeyBQb2tlQXBpU2VydmljZSB9IGZyb20gJ0BzcmMvYXBwL3NlcnZpY2VzL3Bva2UtYXBpL3Bva2UtYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgUG9rZW1vbiB9IGZyb20gJ0BzcmMvYXBwL21vZGVscy9wb2tlbW9uJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAncGFnZS1ib29rJyxcblx0dGVtcGxhdGVVcmw6ICcuL2Jvb2sucGFnZS5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vYm9vay5wYWdlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBCb29rUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0cG9rZW1vbiQhOiBPYnNlcnZhYmxlPFBva2Vtb24+O1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyB1dGlsczogQXBwVXRpbHMsIHByaXZhdGUgcG9rZUFwaTogUG9rZUFwaVNlcnZpY2UpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuXHRcdGxldCBzdGFydCA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCAwLCAwKTtcblx0XHRsZXQgZGlmZiA9IChub3cgYXMgYW55KSAtIChzdGFydCBhcyBhbnkpO1xuXHRcdGxldCBvbmVEYXkgPSAxMDAwICogNjAgKiA2MCAqIDI0O1xuXHRcdGxldCBkYXkgPSBNYXRoLmZsb29yKGRpZmYgLyBvbmVEYXkpO1xuXHRcdHRoaXMucG9rZW1vbiQgPSB0aGlzLnBva2VBcGkuZ2V0UG9rZW1vbkJ5TnVtYmVyKGRheSkucGlwZShcblx0XHRcdG1hcCgocmVzKSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnV0aWxzLmdlbmVyYXRlUG9rZW1vbk9iamVjdChyZXMpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG59IiwiPEFjdGlvbkJhciB0aXRsZT1cIkJvb2sgb2YgVG9kYXlcIiBjbGFzcz1cIm5hdmJhci1kYXJrIGJnLWRhcmtcIj5cblx0PG5nLXRlbXBsYXRlICN3ZWI+XG5cdFx0PGFwcC1uYXZiYXItbWVudT48L2FwcC1uYXZiYXItbWVudT5cblx0PC9uZy10ZW1wbGF0ZT5cbjwvQWN0aW9uQmFyPlxuPENvbnRhaW5lcj5cblx0IFxuXHQ8YXBwLXBva2Vtb24taW5mbyAqbmdJZj1cIihwb2tlbW9uJCB8IGFzeW5jKSBhcyBwb2tlbW9uOyBlbHNlIGxvYWRpbmdcIiBbcG9rZW1vbl09XCJwb2tlbW9uXCI+PC9hcHAtcG9rZW1vbi1pbmZvPlxuXHQ8bmctdGVtcGxhdGUgI2xvYWRpbmc+XG5cdFx0PEdyaWRMYXlvdXQgY2xhc3M9XCJcIiByb3dzPVwiKlwiIGNvbHVtbnM9XCIqXCI+XG5cdFx0XHQ8TGFiZWwgY2xhc3M9XCJoMSB0ZXh0LWNlbnRlciBhbGlnbi1zZWxmLWNlbnRlclwiIHRleHQ9XCJMb2FkaW5nLi4uXCI+PC9MYWJlbD5cblx0XHQ8L0dyaWRMYXlvdXQ+XG5cdDwvbmctdGVtcGxhdGU+XG48L0NvbnRhaW5lcj4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXBwVXRpbHMgfSBmcm9tICdAc3JjL2FwcC91dGlscy9hcHAtdXRpbHMvYXBwLXV0aWxzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAncGFnZS1ob21lJyxcblx0dGVtcGxhdGVVcmw6ICcuL2hvbWUucGFnZS5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vaG9tZS5wYWdlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBIb21lUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdHRpdGxlID0gJ25hdGl2ZXNjcmlwdC1wb2tlZGV4Jztcblx0Z3JpZExheW91dFJvd3MhOiBzdHJpbmc7XG5cdGdyaWRFbGVtZW50c1Jvd3MhOiBBcnJheTxzdHJpbmc+O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgdXRpbHM6IEFwcFV0aWxzLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMub25MYXlvdXRDaGFuZ2VkKG51bGwpO1xuXHR9XG5cblx0b25MYXlvdXRDaGFuZ2VkKCRldmVudCkge1xuXHRcdGlmICh0aGlzLnV0aWxzLnBsYXRmb3JtKCkgPT0gJ3dlYicgJiYgdGhpcy51dGlscy5zY3JlZW5XaWR0aCgpID4gNjQwKSB7XG5cdFx0XHR0aGlzLmdyaWRMYXlvdXRSb3dzID0gJzEwMCBhdXRvIGF1dG8gKiBhdXRvIDEwMCc7XG5cdFx0XHR0aGlzLmdyaWRFbGVtZW50c1Jvd3MgPSBbJzEnLCAnMicsICczJywgJzQnXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5ncmlkTGF5b3V0Um93cyA9ICdhdXRvIGF1dG8gKiBhdXRvJztcblx0XHRcdHRoaXMuZ3JpZEVsZW1lbnRzUm93cyA9IFsnMCcsICcxJywgJzInLCAnMyddO1xuXHRcdH1cblx0fVxufVxuIiwiPENvbnRhaW5lciBjbGFzcz1cImZsZXhcIiBoaWRlQWN0aW9uQmFyPlxuXHQ8R3JpZExheW91dCAqbmdJZj1cImdyaWRMYXlvdXRSb3dzXCIgY2xhc3M9XCJwLTIwIHB5LTJcIiBbcm93c109XCJncmlkTGF5b3V0Um93c1wiIGNvbHVtbnM9XCIqXCJcblx0XHQobGF5b3V0Q2hhbmdlZCk9XCJvbkxheW91dENoYW5nZWQoJGV2ZW50KVwiPlxuXHRcdDxMYWJlbCBbcm93XT1cImdyaWRFbGVtZW50c1Jvd3NbMF1cIiB0ZXh0PVwiV2VsY29tZSB0byB7eyB0aXRsZSB9fSFcIiBjbGFzcz1cImgxIHRleHQtY2VudGVyXCJcblx0XHRcdHRleHRXcmFwPVwidHJ1ZVwiPjwvTGFiZWw+XG5cdFx0PEJ1dHRvbiBbcm93XT1cImdyaWRFbGVtZW50c1Jvd3NbMV1cIiBjbGFzcz1cImJ0blwiIFtuc1JvdXRlckxpbmtdPVwiWycvJywgJ2FwcCcsICdib29rJ11cIiBjbGVhckhpc3Rvcnk9XCJ0cnVlXCIgdGV4dD1cImdvIHRvIGJvb2sgcGFnZVwiPjwvQnV0dG9uPlxuXHRcdDxJbWFnZSBbcm93XT1cImdyaWRFbGVtZW50c1Jvd3NbMl1cIiBzcmM9XCJ+L2Fzc2V0cy9wb2tlYXBpX2xvZ28ucG5nXCIgbG9hZE1vZGU9XCJhc3luY1wiIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIj48L0ltYWdlPlxuXHRcdDxCdXR0b24gW3Jvd109XCJncmlkRWxlbWVudHNSb3dzWzNdXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXCIgW25zUm91dGVyTGlua109XCJbJy8nLCAnYXBwJywgJ3RvZGF5J11cIiBjbGVhckhpc3Rvcnk9XCJ0cnVlXCJcblx0XHRcdHRleHQ9XCJHbyB0byBIb21lIVwiPjwvQnV0dG9uPlxuXHQ8L0dyaWRMYXlvdXQ+XG48L0NvbnRhaW5lcj4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFBva2VBcGlTZXJ2aWNlIH0gZnJvbSAnQHNyYy9hcHAvc2VydmljZXMvcG9rZS1hcGkvcG9rZS1hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBBcHBVdGlscyB9IGZyb20gJ0BzcmMvYXBwL3V0aWxzL2FwcC11dGlscy9hcHAtdXRpbHMnO1xuaW1wb3J0IHsgUG9rZW1vbiB9IGZyb20gJ0BzcmMvYXBwL21vZGVscy9wb2tlbW9uJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAncGFnZS1wb2tlZGV4Jyxcblx0dGVtcGxhdGVVcmw6ICcuL3Bva2VkZXgucGFnZS5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vcG9rZWRleC5wYWdlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQb2tlZGV4UGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0aXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cdHBva2Vtb25zOiB7XG5cdFx0W2tleTogbnVtYmVyXTogUG9rZW1vbjtcblx0fSA9IHt9O1xuXHRnZXQgcG9rZW1vbnNMaXN0KCk6IEFycmF5PFBva2Vtb24+IHtcblx0XHRyZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLnBva2Vtb25zKTtcblx0fVxuXHRwYWdlU2l6ZTogbnVtYmVyID0gMTU7XG5cblx0QFZpZXdDaGlsZCgnUG9rZW1vbnNTdGFjaycsIHsgc3RhdGljOiB0cnVlIH0pIFBva2Vtb25zU3RhY2s6IEVsZW1lbnRSZWY7XG5cdGxhc3RJdGVtWSE6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgdXRpbHM6IEFwcFV0aWxzLCBwcml2YXRlIHBva2VBcGk6IFBva2VBcGlTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRpZiAodGhpcy51dGlscy5wbGF0Zm9ybSgpID09ICd3ZWInKSB7XG5cdFx0XHR0aGlzLmdldFBva2Vtb25zKHRydWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmdldFBva2Vtb25zKCk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0UG9rZW1vbnMocmVwZWF0OiBib29sZWFuID0gZmFsc2UpIHtcblx0XHR0aGlzLmlzTG9hZGluZyA9IHRydWU7XG5cdFx0bGV0IHBhZGRpbmc6IG51bWJlciA9IE9iamVjdC5rZXlzKHRoaXMucG9rZW1vbnMpLmxlbmd0aCArIDE7XG5cdFx0bGV0IHBva2Vtb25zJDogQXJyYXk8T2JzZXJ2YWJsZTxQb2tlbW9uPj4gPSBBcnJheSh0aGlzLnBhZ2VTaXplKS5maWxsKHVuZGVmaW5lZCkubWFwKChuLCBpKSA9PiB7XG5cdFx0XHRsZXQgcG9rZW1vbiQ6IE9ic2VydmFibGU8UG9rZW1vbj4gPSBuZXcgT2JzZXJ2YWJsZShcblx0XHRcdFx0KG9ic2VydmVyKSA9PiB7XG5cdFx0XHRcdFx0bGV0IHBva2Vtb25OdW1iZXIgPSBpICsgcGFkZGluZztcblx0XHRcdFx0XHR0aGlzLnBva2VBcGkuZ2V0UG9rZW1vbkJ5TnVtYmVyKHBva2Vtb25OdW1iZXIpLnN1YnNjcmliZSgocmVzKSA9PiB7XG5cdFx0XHRcdFx0XHRvYnNlcnZlci5uZXh0KHRoaXMudXRpbHMuZ2VuZXJhdGVQb2tlbW9uT2JqZWN0KHJlcykpO1xuXHRcdFx0XHRcdFx0b2JzZXJ2ZXIuY29tcGxldGUoKTtcblx0XHRcdFx0XHRcdG9ic2VydmVyLnVuc3Vic2NyaWJlKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gcG9rZW1vbiQ7XG5cdFx0fSk7XG5cdFx0Y29tYmluZUxhdGVzdChwb2tlbW9ucyQpLnN1YnNjcmliZSh7XG5cdFx0XHRuZXh0OiAocmVzKSA9PiB7XG5cdFx0XHRcdGZvciAobGV0IHBva2Vtb24gb2YgcmVzKSB7XG5cdFx0XHRcdFx0dGhpcy5wb2tlbW9uc1twb2tlbW9uLm51bWJlcl0gPSBwb2tlbW9uO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Y29tcGxldGU6ICgpID0+IHtcblx0XHRcdFx0aWYgKHJlcGVhdCkge1xuXHRcdFx0XHRcdHRoaXMuZ2V0UG9rZW1vbnMoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0b25TY3JvbGwoJGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMuaXNMb2FkaW5nKSByZXR1cm47XG5cdFx0aWYgKHRoaXMudXRpbHMucGxhdGZvcm0oKSA9PSAnd2ViJykge1xuXHRcdFx0Ly8gUmVmOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvOTQzOTgwNy8yMzkzNzYyXG5cdFx0XHRpZiAoKHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5zY3JvbGxZKSA+PSBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCkge1xuXHRcdFx0XHR0aGlzLmdldFBva2Vtb25zKCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIFJlZjogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU0NDgzMjM1LzIzOTM3NjJcblx0XHRcdGxldCBsZW5ndGggPSB0aGlzLlBva2Vtb25zU3RhY2submF0aXZlRWxlbWVudC5nZXRDaGlsZHJlbkNvdW50KCk7XG5cdFx0XHRsZXQgbGFzdEl0ZW0gPSB0aGlzLlBva2Vtb25zU3RhY2submF0aXZlRWxlbWVudC5nZXRDaGlsZEF0KGxlbmd0aCAtIDEpO1xuXHRcdFx0bGV0IGxhc3RJdGVtWSA9IGxhc3RJdGVtLmdldExvY2F0aW9uUmVsYXRpdmVUbyh0aGlzLlBva2Vtb25zU3RhY2submF0aXZlRWxlbWVudCkueTtcblxuXHRcdFx0bGV0IHNjcm9sbFZpZXcgPSAkZXZlbnQub2JqZWN0O1xuXHRcdFx0bGV0IHZlcnRpY2FsT2Zmc2V0ID0gc2Nyb2xsVmlldy5nZXRBY3R1YWxTaXplKCkuaGVpZ2h0ICsgc2Nyb2xsVmlldy52ZXJ0aWNhbE9mZnNldDtcblxuXHRcdFx0aWYgKHZlcnRpY2FsT2Zmc2V0ID49IGxhc3RJdGVtWSkge1xuXHRcdFx0XHR0aGlzLmdldFBva2Vtb25zKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bmF2aWdhdGVQb2tlbW9uKHBva2Vtb25OdW1iZXI6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLycsICdhcHAnLCAncG9rZW1vbicsIHBva2Vtb25OdW1iZXJdKTtcblx0fVxuXG59XG4iLCI8QWN0aW9uQmFyIHRpdGxlPVwiUG9rw6lkZXhcIiBjbGFzcz1cIm5hdmJhci1kYXJrIGJnLWRhcmtcIj5cblx0PG5nLXRlbXBsYXRlICN3ZWI+XG5cdFx0PGFwcC1uYXZiYXItbWVudT48L2FwcC1uYXZiYXItbWVudT5cblx0PC9uZy10ZW1wbGF0ZT5cbjwvQWN0aW9uQmFyPlxuPENvbnRhaW5lcj5cblx0PFNjcm9sbFZpZXcgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIChzY3JvbGwpPVwib25TY3JvbGwoJGV2ZW50KVwiPlxuXHRcdDxTdGFja0xheW91dCAjUG9rZW1vbnNTdGFjayBzdHlsZS5wYWRkaW5nPVwiMCA4XCI+XG5cdFx0XHQ8R3JpZExheW91dCAqbmdGb3I9XCJsZXQgcG9rZW1vbiBvZiBwb2tlbW9uc0xpc3RcIiBjb2x1bW5zPVwiNzUgMTAwICpcIiBjbGFzcz1cImFsaWduLWl0ZW1zLWNlbnRlciBjYXJkIGJ0biBidG4tbGlnaHQgY29sIGNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNFwiIGhlaWdodD1cIjUwXCIgc3R5bGUubWFyZ2luPVwiNVwiIHN0eWxlLmJvcmRlckNvbG9yPVwiYmxhY2tcIiBzdHlsZS5ib3JkZXJXaWR0aD1cIjEgMSAxIDFcIiAodGFwKT1cIm5hdmlnYXRlUG9rZW1vbihwb2tlbW9uLm51bWJlcilcIiAoY2xpY2spPVwibmF2aWdhdGVQb2tlbW9uKHBva2Vtb24ubnVtYmVyKVwiPlxuXHRcdFx0XHQ8TGFiZWwgY29sPVwiMFwiIGNsYXNzPVwiaDMgdGV4dC1jZW50ZXJcIiBbdGV4dF09XCJwb2tlbW9uLm51bWJlclwiPjwvTGFiZWw+XG5cdFx0XHRcdDxJbWFnZSBjb2w9XCIxXCIgW3NyY109XCJwb2tlbW9uLnNwcml0ZXMuZnJvbnREZWZhdWx0XCI+PC9JbWFnZT5cblx0XHRcdFx0PExhYmVsIGNvbD1cIjJcIiBjbGFzcz1cImgzIHRleHQtY2FwaXRhbGl6ZVwiIFt0ZXh0XT1cInV0aWxzLmtlYmFiQ2FzZVRvU3BhY2VkKHBva2Vtb24ubmFtZSlcIj48L0xhYmVsPlxuXHRcdFx0PC9HcmlkTGF5b3V0PlxuXHRcdFx0PEdyaWRMYXlvdXQgKm5nSWY9XCJpc0xvYWRpbmdcIj5cblx0XHRcdFx0PExhYmVsIGNsYXNzPVwiaDRcIiB0ZXh0PVwiTG9hZGluZy4uLlwiPjwvTGFiZWw+XG5cdFx0XHQ8L0dyaWRMYXlvdXQ+XG5cdFx0PC9TdGFja0xheW91dD5cblx0PC9TY3JvbGxWaWV3PlxuPC9Db250YWluZXI+IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUG9rZW1vbiB9IGZyb20gJ0BzcmMvYXBwL21vZGVscy9wb2tlbW9uJztcbmltcG9ydCB7IFBva2VBcGlTZXJ2aWNlIH0gZnJvbSAnQHNyYy9hcHAvc2VydmljZXMvcG9rZS1hcGkvcG9rZS1hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBBcHBVdGlscyB9IGZyb20gJ0BzcmMvYXBwL3V0aWxzL2FwcC11dGlscy9hcHAtdXRpbHMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3BhZ2UtcG9rZW1vbicsXG5cdHRlbXBsYXRlVXJsOiAnLi9wb2tlbW9uLnBhZ2UuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3Bva2Vtb24ucGFnZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUG9rZW1vblBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHBva2Vtb24kITogT2JzZXJ2YWJsZTxQb2tlbW9uPjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBwb2tlQXBpOiBQb2tlQXBpU2VydmljZSwgcHJpdmF0ZSB1dGlsczogQXBwVXRpbHMpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG5cdFx0XHR0aGlzLnBva2Vtb24kID0gdGhpcy5wb2tlQXBpLmdldFBva2Vtb25CeU51bWJlcihwYXJhbXMubnVtYmVyKS5waXBlKFxuXHRcdFx0XHRtYXAoKHJlcykgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLnV0aWxzLmdlbmVyYXRlUG9rZW1vbk9iamVjdChyZXMpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9KVxuXHR9XG59XG4iLCI8QWN0aW9uQmFyIHRpdGxlPVwiUG9rw6lkZXhcIiBjbGFzcz1cIm5hdmJhci1kYXJrIGJnLWRhcmtcIj5cblx0PG5nLXRlbXBsYXRlICN3ZWI+XG5cdFx0PGFwcC1uYXZiYXItbWVudT48L2FwcC1uYXZiYXItbWVudT5cblx0PC9uZy10ZW1wbGF0ZT5cbjwvQWN0aW9uQmFyPlxuPENvbnRhaW5lciBjbGFzcz1cInRleHQtY2VudGVyXCI+XG5cdDwhLS0gUmVmczpcbiAgICBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTI3NTA2OTUvMjM5Mzc2MlxuICAgIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80MzMyNzQ2Ni8yMzkzNzYyXG4gIC0tPlxuXHQ8UGxhdGZvcm1WaWV3PlxuXHRcdDxuZy10ZW1wbGF0ZSAjd2ViPlxuXHRcdFx0PEJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tbGcgbXQtNFwiIHRleHQ9XCJCYWNrIHRvIFBva8OpZGV4XCIgW3JvdXRlckxpbmtdPVwiWycvJywgJ2FwcCcsICdwb2tlZGV4J11cIj48L0J1dHRvbj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHQ8L1BsYXRmb3JtVmlldz5cblx0PGFwcC1wb2tlbW9uLWluZm8gKm5nSWY9XCIocG9rZW1vbiQgfCBhc3luYykgYXMgcG9rZW1vbjsgZWxzZSBsb2FkaW5nXCIgW3Bva2Vtb25dPVwicG9rZW1vblwiPjwvYXBwLXBva2Vtb24taW5mbz5cblx0PG5nLXRlbXBsYXRlICNsb2FkaW5nPlxuXHRcdDxHcmlkTGF5b3V0IGNsYXNzPVwiXCIgcm93cz1cIipcIiBjb2x1bW5zPVwiKlwiPlxuXHRcdFx0PExhYmVsIGNsYXNzPVwiaDEgdGV4dC1jZW50ZXIgYWxpZ24tc2VsZi1jZW50ZXJcIiB0ZXh0PVwiTG9hZGluZy4uLlwiPjwvTGFiZWw+XG5cdFx0PC9HcmlkTGF5b3V0PlxuXHQ8L25nLXRlbXBsYXRlPlxuPC9Db250YWluZXI+IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwLCBkZWxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQXBwVXRpbHMgfSBmcm9tICdAc3JjL2FwcC91dGlscy9hcHAtdXRpbHMvYXBwLXV0aWxzJztcbmltcG9ydCB7IFBva2VBcGlTZXJ2aWNlIH0gZnJvbSAnQHNyYy9hcHAvc2VydmljZXMvcG9rZS1hcGkvcG9rZS1hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBQb2tlbW9uLCBQT0tFTU9OX1NQUklURVMgfSBmcm9tICdAc3JjL2FwcC9tb2RlbHMvcG9rZW1vbic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3BhZ2UtcmFuZG9tJyxcblx0dGVtcGxhdGVVcmw6ICcuL3JhbmRvbS5wYWdlLmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9yYW5kb20ucGFnZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUmFuZG9tUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0UE9LRU1PTl9TUFJJVEVTOiBBcnJheTxzdHJpbmc+ID0gUE9LRU1PTl9TUFJJVEVTO1xuXHRpc0xvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXHRwb2tlbW9uJCE6IE9ic2VydmFibGU8UG9rZW1vbj47XG5cblx0Y29uc3RydWN0b3IocHVibGljIHV0aWxzOiBBcHBVdGlscywgcHJpdmF0ZSBwb2tlQXBpOiBQb2tlQXBpU2VydmljZSkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5nZXRSYW5kb21Qb2tlbW9uKCk7XG5cdH1cblxuXHRnZXRSYW5kb21Qb2tlbW9uKCk6IHZvaWQge1xuXHRcdHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcblx0XHRsZXQgcmFuZG9tTnVtYmVyOiBudW1iZXIgPSA4MDg7XG5cdFx0d2hpbGUgKHJhbmRvbU51bWJlciA+IDgwNykge1xuXHRcdFx0cmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMClcblx0XHR9XG5cdFx0dGhpcy5wb2tlbW9uJCA9IHRoaXMucG9rZUFwaS5nZXRQb2tlbW9uQnlOdW1iZXIocmFuZG9tTnVtYmVyKS5waXBlKFxuXHRcdFx0dGFwKCgpID0+IHtcblx0XHRcdFx0dGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcblx0XHRcdH0pLFxuXHRcdFx0bWFwKChyZXMpID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMudXRpbHMuZ2VuZXJhdGVQb2tlbW9uT2JqZWN0KHJlcyk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cbn1cbiIsIjxBY3Rpb25CYXIgdGl0bGU9XCJMdWNreSBQb2vDqW1vbiFcIiBjbGFzcz1cIm5hdmJhci1kYXJrIGJnLWRhcmtcIj5cblx0PEFjdGlvbkl0ZW0gKHRhcCk9XCJnZXRSYW5kb21Qb2tlbW9uKClcIiBpb3Muc3lzdGVtSWNvbj1cIjEzXCIgaW9zLnBvc2l0aW9uPVwicmlnaHRcIiBhbmRyb2lkLnN5c3RlbUljb249XCJpY19wb3B1cF9zeW5jXCJcblx0XHRhbmRyb2lkLnBvc2l0aW9uPVwiYWN0aW9uQmFyXCI+PC9BY3Rpb25JdGVtPlxuXHQ8bmctdGVtcGxhdGUgI3dlYj5cblx0XHQ8YXBwLW5hdmJhci1tZW51PjwvYXBwLW5hdmJhci1tZW51PlxuXHQ8L25nLXRlbXBsYXRlPlxuPC9BY3Rpb25CYXI+XG48Q29udGFpbmVyPlxuXHQ8IS0tIFJlZnM6XG4gICAgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzUyNzUwNjk1LzIzOTM3NjJcbiAgICBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDMzMjc0NjYvMjM5Mzc2MlxuICAtLT5cblx0PGFwcC1wb2tlbW9uLWluZm8gKm5nSWY9XCIocG9rZW1vbiQgfCBhc3luYykgYXMgcG9rZW1vbjsgZWxzZSBsb2FkaW5nXCIgW3Bva2Vtb25dPVwicG9rZW1vblwiPjwvYXBwLXBva2Vtb24taW5mbz5cblx0PG5nLXRlbXBsYXRlICNsb2FkaW5nPlxuXHRcdDxHcmlkTGF5b3V0IGNsYXNzPVwiXCIgcm93cz1cIipcIiBjb2x1bW5zPVwiKlwiPlxuXHRcdFx0PExhYmVsIGNsYXNzPVwiaDEgdGV4dC1jZW50ZXIgYWxpZ24tc2VsZi1jZW50ZXJcIiB0ZXh0PVwiTG9hZGluZy4uLlwiPjwvTGFiZWw+XG5cdFx0PC9HcmlkTGF5b3V0PlxuXHQ8L25nLXRlbXBsYXRlPlxuPC9Db250YWluZXI+IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQXBwVXRpbHMgfSBmcm9tICdAc3JjL2FwcC91dGlscy9hcHAtdXRpbHMvYXBwLXV0aWxzJztcbmltcG9ydCB7IFBva2VBcGlTZXJ2aWNlIH0gZnJvbSAnQHNyYy9hcHAvc2VydmljZXMvcG9rZS1hcGkvcG9rZS1hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBQb2tlbW9uIH0gZnJvbSAnQHNyYy9hcHAvbW9kZWxzL3Bva2Vtb24nO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdwYWdlLXRvZGF5Jyxcblx0dGVtcGxhdGVVcmw6ICcuL3RvZGF5LnBhZ2UuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3RvZGF5LnBhZ2UuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRvZGF5UGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0cG9rZW1vbiQhOiBPYnNlcnZhYmxlPFBva2Vtb24+O1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyB1dGlsczogQXBwVXRpbHMsIHByaXZhdGUgcG9rZUFwaTogUG9rZUFwaVNlcnZpY2UpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuXHRcdGxldCBzdGFydCA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCAwLCAwKTtcblx0XHRsZXQgZGlmZiA9IChub3cgYXMgYW55KSAtIChzdGFydCBhcyBhbnkpO1xuXHRcdGxldCBvbmVEYXkgPSAxMDAwICogNjAgKiA2MCAqIDI0O1xuXHRcdGxldCBkYXkgPSBNYXRoLmZsb29yKGRpZmYgLyBvbmVEYXkpO1xuXHRcdHRoaXMucG9rZW1vbiQgPSB0aGlzLnBva2VBcGkuZ2V0UG9rZW1vbkJ5TnVtYmVyKGRheSkucGlwZShcblx0XHRcdG1hcCgocmVzKSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnV0aWxzLmdlbmVyYXRlUG9rZW1vbk9iamVjdChyZXMpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG59XG4iLCI8QWN0aW9uQmFyIHRpdGxlPVwiUG9rw6ltb24gb2YgVG9kYXlcIiBjbGFzcz1cIm5hdmJhci1kYXJrIGJnLWRhcmtcIj5cblx0PG5nLXRlbXBsYXRlICN3ZWI+XG5cdFx0PGFwcC1uYXZiYXItbWVudT48L2FwcC1uYXZiYXItbWVudT5cblx0PC9uZy10ZW1wbGF0ZT5cbjwvQWN0aW9uQmFyPlxuPENvbnRhaW5lcj5cblx0PCEtLSBSZWZzOlxuICAgIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81Mjc1MDY5NS8yMzkzNzYyXG4gICAgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQzMzI3NDY2LzIzOTM3NjJcbiAgLS0+XG5cdDxhcHAtcG9rZW1vbi1pbmZvICpuZ0lmPVwiKHBva2Vtb24kIHwgYXN5bmMpIGFzIHBva2Vtb247IGVsc2UgbG9hZGluZ1wiIFtwb2tlbW9uXT1cInBva2Vtb25cIj48L2FwcC1wb2tlbW9uLWluZm8+XG5cdDxuZy10ZW1wbGF0ZSAjbG9hZGluZz5cblx0XHQ8R3JpZExheW91dCBjbGFzcz1cIlwiIHJvd3M9XCIqXCIgY29sdW1ucz1cIipcIj5cblx0XHRcdDxMYWJlbCBjbGFzcz1cImgxIHRleHQtY2VudGVyIGFsaWduLXNlbGYtY2VudGVyXCIgdGV4dD1cIkxvYWRpbmcuLi5cIj48L0xhYmVsPlxuXHRcdDwvR3JpZExheW91dD5cblx0PC9uZy10ZW1wbGF0ZT5cbjwvQ29udGFpbmVyPiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXBwbGljYXRpb25TZXR0aW5ncyB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYWNoZVNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cblx0Z2V0KGtleTogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gQXBwbGljYXRpb25TZXR0aW5ncy5nZXRTdHJpbmcoa2V5KTtcblx0fVxuXHRwdXQoa2V5OiBzdHJpbmcsIHZhbDogc3RyaW5nKTogdm9pZCB7XG5cdFx0QXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoa2V5LCB2YWwpO1xuXHR9XG5cblx0cmVtb3ZlKGtleTogc3RyaW5nKTogdm9pZCB7XG5cdFx0QXBwbGljYXRpb25TZXR0aW5ncy5yZW1vdmUoa2V5KTtcblx0fVxufSIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEh0dHBTZXJ2aWNlIHtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuXHRnZXQodXJpOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KHVyaSk7XG5cdH1cbn0iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zZXJ2aWNlcy9odHRwLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FjaGVTZXJ2aWNlIH0gZnJvbSAnQHNyYy9hcHAvc2VydmljZXMvY2FjaGUvY2FjaGUuc2VydmljZS50bnMnO1xuXG5jb25zdCBBUElfVVJJOiBzdHJpbmcgPSAnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi8nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUG9rZUFwaVNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cFNlcnZpY2UsIHByaXZhdGUgY2FjaGU6IENhY2hlU2VydmljZSkgeyB9XG5cblx0Z2V0UG9rZW1vbkJ5TnVtYmVyKG51bWJlcjogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRsZXQgcG9rZW1vbkRhdGEgPSB0aGlzLmNhY2hlLmdldChgcG9rZW1vbl8ke251bWJlcn1gKVxuXHRcdGlmIChwb2tlbW9uRGF0YSkge1xuXHRcdFx0bGV0IHBva2Vtb25EYXRhJCA9IG5ldyBPYnNlcnZhYmxlKFxuXHRcdFx0XHQob2JzZXJ2ZXIpID0+IHtcblx0XHRcdFx0XHRvYnNlcnZlci5uZXh0KEpTT04ucGFyc2UocG9rZW1vbkRhdGEpKTtcblx0XHRcdFx0XHRvYnNlcnZlci5jb21wbGV0ZSgpO1xuXHRcdFx0XHRcdG9ic2VydmVyLnVuc3Vic2NyaWJlKCk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gcG9rZW1vbkRhdGEkO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgaHR0cFJlcXVlc3QgPSB0aGlzLmh0dHAuZ2V0KGAke0FQSV9VUkl9cG9rZW1vbi8ke251bWJlcn1gKTtcblx0XHRcdGh0dHBSZXF1ZXN0LnN1YnNjcmliZSgocmVzKSA9PiB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5jYWNoZS5wdXQoYHBva2Vtb25fJHtudW1iZXJ9YCwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XHRcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKGVycik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGh0dHBSZXF1ZXN0O1xuXHRcdH1cblx0fVxuXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhcHAtY29udGFpbmVyJyxcblx0dGVtcGxhdGVVcmw6ICcuL2NvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2NvbnRhaW5lci5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y29uc3RydWN0b3IocHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG5cblx0bmdPbkluaXQoKSB7IH1cblxuXHRpc0N1cnJlbnRSb3V0ZShyb3V0ZXM6IHN0cmluZyB8IEFycmF5PHN0cmluZz4pOiBib29sZWFuIHtcblx0XHRpZiAodHlwZW9mIHJvdXRlcyA9PSAnc3RyaW5nJykge1xuXHRcdFx0cm91dGVzID0gW3JvdXRlc107XG5cdFx0fVxuXHRcdHJldHVybiAocm91dGVzIGFzIEFycmF5PHN0cmluZz4pLnNvbWUoKHJvdXRlKSA9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yb3V0ZXIudXJsLnNwbGl0KCcvJylbMl0gPT0gcm91dGU7XG5cdFx0fSk7XG5cdH1cblxufVxuIiwiPFBsYXRmb3JtVmlldz5cblx0PG5nLXRlbXBsYXRlICNtb2JpbGU+XG5cdFx0PENvbnRhaW5lciBzdHlsZS5wYWRkaW5nVG9wPVwiMTZcIj5cblx0XHRcdDxHcmlkTGF5b3V0IHJvd3M9XCIqIDYwXCI+XG5cdFx0XHRcdDxyb3V0ZXItb3V0bGV0IHJvdz1cIjBcIj48L3JvdXRlci1vdXRsZXQ+XG5cdFx0XHRcdDxHcmlkTGF5b3V0IHJvdz1cIjFcIiBjb2x1bW5zPVwiOCAqIDggKiA4ICogOFwiIGNsYXNzPVwidGV4dC1jZW50ZXJcIiBzdHlsZS5ib3JkZXJDb2xvcj1cImJsYWNrXCJcblx0XHRcdFx0XHRzdHlsZS5ib3JkZXJXaWR0aD1cIjEgMCAwIDBcIiBzdHlsZS5wYWRkaW5nPVwiMTBcIj5cblx0XHRcdFx0XHQ8R3JpZExheW91dCBjb2w9XCIxXCIgcm93cz1cIiogKlwiIFtzdHlsZS5jb2xvcl09XCIoaXNDdXJyZW50Um91dGUoJ3RvZGF5JykpID8gJ2JsdWUnIDogJ2dyYXknXCJcblx0XHRcdFx0XHRcdFtuc1JvdXRlckxpbmtdPVwiWycvJywgJ2FwcCcsICd0b2RheSddXCI+XG5cdFx0XHRcdFx0XHQ8TGFiZWwgY2xhc3M9XCJmYXJcIiB0ZXh0PVwiJiN4ZjEzMztcIj48L0xhYmVsPlxuXHRcdFx0XHRcdFx0PExhYmVsIHJvdz1cIjFcIiBzdHlsZS5iYWNrZ3JvdW5kPVwid2hpdGVcIiB0ZXh0PVwiVG9kYXlcIiBjbGFzcz1cImZhclwiPjwvTGFiZWw+XG5cdFx0XHRcdFx0PC9HcmlkTGF5b3V0PlxuXHRcdFx0XHRcdDxHcmlkTGF5b3V0IGNvbD1cIjNcIiByb3dzPVwiKiAqXCIgW3N0eWxlLmNvbG9yXT1cIihpc0N1cnJlbnRSb3V0ZSgncmFuZG9tJykpID8gJ2JsdWUnIDogJ2dyYXknXCJcblx0XHRcdFx0XHRcdFtuc1JvdXRlckxpbmtdPVwiWycvJywgJ2FwcCcsICdyYW5kb20nXVwiPlxuXHRcdFx0XHRcdFx0PExhYmVsIGNsYXNzPVwiZmFzXCIgdGV4dD1cIiYjeGY1MjI7XCI+PC9MYWJlbD5cblx0XHRcdFx0XHRcdDxMYWJlbCByb3c9XCIxXCIgdGV4dD1cIlJhbmRvbVwiPjwvTGFiZWw+XG5cdFx0XHRcdFx0PC9HcmlkTGF5b3V0PlxuXHRcdFx0XHRcdDxHcmlkTGF5b3V0IGNvbD1cIjVcIiByb3dzPVwiKiAqXCIgW3N0eWxlLmNvbG9yXT1cIihpc0N1cnJlbnRSb3V0ZShbJ3Bva2VkZXgnLCAncG9rZW1vbiddKSkgPyAnYmx1ZScgOiAnZ3JheSdcIlxuXHRcdFx0XHRcdFx0W25zUm91dGVyTGlua109XCJbJy8nLCAnYXBwJywgJ3Bva2VkZXgnXVwiPlxuXHRcdFx0XHRcdFx0PExhYmVsIGNsYXNzPVwiZmFzXCIgdGV4dD1cIiYjeGYwM2E7XCI+PC9MYWJlbD5cblx0XHRcdFx0XHRcdDxMYWJlbCByb3c9XCIxXCIgdGV4dD1cIlBva8OpZGV4XCI+PC9MYWJlbD5cblx0XHRcdFx0XHQ8L0dyaWRMYXlvdXQ+XG5cdFx0XHRcdDwvR3JpZExheW91dD5cblx0XHRcdDwvR3JpZExheW91dD5cblx0XHQ8L0NvbnRhaW5lcj5cblx0PC9uZy10ZW1wbGF0ZT5cblx0PG5nLXRlbXBsYXRlICN3ZWI+XG5cdFx0PHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuXHQ8L25nLXRlbXBsYXRlPlxuPC9QbGF0Zm9ybVZpZXc+IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFwcFV0aWxzIH0gZnJvbSAnQHNyYy9hcHAvdXRpbHMvYXBwLXV0aWxzL2FwcC11dGlscyc7XG5cbmltcG9ydCB7IFBva2Vtb24sIFBPS0VNT05fU1BSSVRFUyB9IGZyb20gJ0BzcmMvYXBwL21vZGVscy9wb2tlbW9uJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhcHAtcG9rZW1vbi1pbmZvJyxcblx0dGVtcGxhdGVVcmw6ICcuL3Bva2Vtb24taW5mby5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3Bva2Vtb24taW5mby5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFBva2Vtb25JbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRQT0tFTU9OX1NQUklURVM6IEFycmF5PHN0cmluZz4gPSBQT0tFTU9OX1NQUklURVM7XG5cblx0QElucHV0KCdwb2tlbW9uJykgcG9rZW1vbiE6IFBva2Vtb247XG5cblx0Y29uc3RydWN0b3IocHVibGljIHV0aWxzOiBBcHBVdGlscykgeyB9XG5cblx0bmdPbkluaXQoKSB7IH1cblxufVxuIiwiPEdyaWRMYXlvdXQgY2xhc3M9XCJwLTIwIG10LTVcIj5cblx0PFN0YWNrTGF5b3V0PlxuXHRcdDxMYWJlbCBjbGFzcz1cImgzIHRleHQtY2VudGVyXCIgdGV4dD1cIiN7eyBwb2tlbW9uLm51bWJlciB9fVwiPjwvTGFiZWw+XG5cdFx0PExhYmVsIGNsYXNzPVwiaDEgdGV4dC1jZW50ZXIgdGV4dC1jYXBpdGFsaXplXCIgW3RleHRdPVwicG9rZW1vbi5uYW1lXCI+PC9MYWJlbD5cblx0XHQ8TGFiZWwgY2xhc3M9XCJoNSB0ZXh0LWNlbnRlclwiIFt0ZXh0XT1cInBva2Vtb24udHlwZXMuam9pbignICcpXCI+PC9MYWJlbD5cblx0XHQ8UGxhdGZvcm1WaWV3PlxuXHRcdFx0PG5nLXRlbXBsYXRlICNtb2JpbGU+XG5cdFx0XHRcdDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIqICogKiAqICogKiAqICpcIiBiYWNrZ3JvdW5kPVwiYmxhY2tcIiBoZWlnaHQ9XCIxMDBcIj5cblx0XHRcdFx0XHQ8SW1hZ2UgKm5nRm9yPVwibGV0IHNwcml0ZSBvZiBQT0tFTU9OX1NQUklURVM7IGxldCBpID0gaW5kZXhcIiBbY29sXT1cImlcIlxuXHRcdFx0XHRcdFx0W3NyY109XCJwb2tlbW9uLnNwcml0ZXNbc3ByaXRlXVwiIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIj48L0ltYWdlPlxuXHRcdFx0XHQ8L0dyaWRMYXlvdXQ+XG5cdFx0XHQ8L25nLXRlbXBsYXRlPlxuXHRcdFx0PG5nLXRlbXBsYXRlICN3ZWI+XG5cdFx0XHRcdDxuZ2ItY2Fyb3VzZWwgY2xhc3M9XCJiZy1zZWNvbmRhcnkgY2FyZCBjb2wtMTIgY29sLW1kLTggb2Zmc2V0LW1kLTIgY29sLWxnLTYgb2Zmc2V0LWxnLTMgbWItM1wiPlxuXHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHNwcml0ZSBvZiBQT0tFTU9OX1NQUklURVNcIj5cblx0XHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJwb2tlbW9uLnNwcml0ZXNbc3ByaXRlXVwiPlxuXHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgbmdiU2xpZGU+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInBpY3N1bS1pbWctd3JhcHBlciBwLTQgbWItNFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEltYWdlIGNsYXNzPVwicC00IG1iLTRcIiBbc3JjXT1cInBva2Vtb24uc3ByaXRlc1tzcHJpdGVdXCIgc3RyZXRjaD1cIm5vbmVcIj48L0ltYWdlPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3M9XCJ0ZXh0LWNhcGl0YWxpemVcIj57eyB1dGlscy5jYW1lbENhc2VUb1NwYWNlZChzcHJpdGUpIH19PC9oMz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdFx0XHQ8L25nYi1jYXJvdXNlbD5cblx0XHRcdDwvbmctdGVtcGxhdGU+XG5cdFx0PC9QbGF0Zm9ybVZpZXc+XG5cdFx0PCEtLSBSZWY6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81NjUwMjAyMy8yMzkzNzYyIC0tPlxuXHRcdDxHcmlkTGF5b3V0IGNsYXNzPVwiY2FyZCB0ZXh0LXdoaXRlIGJnLWluZm8gdGV4dC1jZW50ZXIgY29sIGNvbC0xMiBjb2wtbWQtOCBvZmZzZXQtbWQtMiBjb2wtbGctNiBvZmZzZXQtbGctM1wiIFtyb3dzXT1cIicqICogJyArICcqICcucmVwZWF0KHBva2Vtb24uc3RhdHMubGVuZ3RoKVwiXG5cdFx0XHRjb2x1bW5zPVwiKiAzKiAyKiAyKlwiPlxuXHRcdFx0PExhYmVsIHJvdz1cIjBcIiBjb2w9XCIwXCIgY29sU3Bhbj1cIjRcIiBjbGFzcz1cImNhcmQtaGVhZGVyIGgzIHRleHQtZGFyayBiZy13aGl0ZVwiIHRleHQ9XCJQb2vDqW1vbiBTdGF0c1wiPjwvTGFiZWw+XG5cdFx0XHQ8TGFiZWwgcm93PVwiMVwiIGNvbD1cIjBcIiBjbGFzcz1cImg1IG10LTJcIiB0ZXh0PVwiSURcIj48L0xhYmVsPlxuXHRcdFx0PExhYmVsIHJvdz1cIjFcIiBjb2w9XCIxXCIgY2xhc3M9XCJoNSBtdC0yXCIgdGV4dD1cIk5hbWVcIj48L0xhYmVsPlxuXHRcdFx0PExhYmVsIHJvdz1cIjFcIiBjb2w9XCIyXCIgY2xhc3M9XCJoNSBtdC0yXCIgdGV4dD1cIkVmZm9ydFwiPjwvTGFiZWw+XG5cdFx0XHQ8TGFiZWwgcm93PVwiMVwiIGNvbD1cIjNcIiBjbGFzcz1cImg1IG10LTJcIiB0ZXh0PVwiU3RhdFwiPjwvTGFiZWw+XG5cdFx0XHQ8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzdGF0IG9mIHBva2Vtb24uc3RhdHM7IGxldCBpID0gaW5kZXhcIj5cblx0XHRcdFx0PExhYmVsIFtyb3ddPVwiaSArIDJcIiBjb2w9XCIwXCIgY2xhc3M9XCJoNlwiIFt0ZXh0XT1cInN0YXQuaWRcIj48L0xhYmVsPlxuXHRcdFx0XHQ8TGFiZWwgW3Jvd109XCJpICsgMlwiIGNvbD1cIjFcIiBjbGFzcz1cImg2IHRleHQtY2VudGVyIHRleHQtY2FwaXRhbGl6ZVwiXG5cdFx0XHRcdFx0W3RleHRdPVwidXRpbHMua2ViYWJDYXNlVG9TcGFjZWQoc3RhdC5uYW1lKVwiPjwvTGFiZWw+XG5cdFx0XHRcdDxMYWJlbCBbcm93XT1cImkgKyAyXCIgY29sPVwiMlwiIGNsYXNzPVwiaDZcIiBbdGV4dF09XCJzdGF0LmVmZm9ydFwiPjwvTGFiZWw+XG5cdFx0XHRcdDxMYWJlbCBbcm93XT1cImkgKyAyXCIgY29sPVwiM1wiIGNsYXNzPVwiaDZcIiBbdGV4dF09XCJzdGF0LmJhc2VTdGF0XCI+PC9MYWJlbD5cblx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdDwvR3JpZExheW91dD5cblx0PC9TdGFja0xheW91dD5cbjwvR3JpZExheW91dD4iLCJpbXBvcnQgeyBQb2tlbW9uIH0gZnJvbSAnQHNyYy9hcHAvbW9kZWxzL3Bva2Vtb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVidWdMb2coLi4ubXNnOiBBcnJheTxhbnk+KTogdm9pZCB7XG5cdGNvbnNvbGUubG9nKC4uLm1zZyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW1lbENhc2VUb1NwYWNlZChjYW1lbENhc2U6IHN0cmluZyk6IHN0cmluZyB7XG5cdGlmICghY2FtZWxDYXNlKSByZXR1cm4gJyc7XG5cdHJldHVybiBjYW1lbENhc2UucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgJyQxICQyJykudG9Mb3dlckNhc2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtlYmFiQ2FzZVRvU3BhY2VkKGtlYmFiQ2FzZTogc3RyaW5nKTogc3RyaW5nIHtcblx0aWYgKCFrZWJhYkNhc2UpIHJldHVybiAnJztcblx0cmV0dXJuIGtlYmFiQ2FzZS5yZXBsYWNlKC8tL2csICcgJykudG9Mb3dlckNhc2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUG9rZW1vbk9iamVjdChwb2tlbW9uRGF0YTogYW55KTogUG9rZW1vbiB7XG5cdGxldCBwb2tlbW9uOiBQb2tlbW9uID0ge1xuXHRcdG51bWJlcjogcG9rZW1vbkRhdGEuaWQsXG5cdFx0b3JkZXI6IHBva2Vtb25EYXRhLm9yZGVyLFxuXHRcdG5hbWU6IHBva2Vtb25EYXRhLm5hbWUsXG5cdFx0dHlwZXM6IHBva2Vtb25EYXRhLnR5cGVzLm1hcCgodHlwZSkgPT4geyByZXR1cm4gdHlwZS5uYW1lOyB9KSxcblx0XHRoZWlnaHQ6IHBva2Vtb25EYXRhLmhlaWdodCxcblx0XHRiYXNlRXhwZXJpZW5jZTogcG9rZW1vbkRhdGEuYmFzZUV4cGVyaWVuY2UsXG5cdFx0c3ByaXRlczoge1xuXHRcdFx0ZnJvbnREZWZhdWx0OiBwb2tlbW9uRGF0YS5zcHJpdGVzLmZyb250X2RlZmF1bHQsXG5cdFx0XHRiYWNrRGVmYXVsdDogcG9rZW1vbkRhdGEuc3ByaXRlcy5iYWNrX2RlZmF1bHQsXG5cdFx0XHRmcm9udFNoaW55OiBwb2tlbW9uRGF0YS5zcHJpdGVzLmZyb250X3NoaW55LFxuXHRcdFx0YmFja1NoaW55OiBwb2tlbW9uRGF0YS5zcHJpdGVzLmJhY2tfc2hpbnksXG5cdFx0XHRmcm9udEZlbWFsZTogcG9rZW1vbkRhdGEuc3ByaXRlcy5mcm9udF9mZW1hbGUsXG5cdFx0XHRiYWNrRmVtYWxlOiBwb2tlbW9uRGF0YS5zcHJpdGVzLmJhY2tfZmVtYWxlLFxuXHRcdFx0ZnJvbnRTaGlueUZlbWFsZTogcG9rZW1vbkRhdGEuc3ByaXRlcy5mcm9udF9zaGlueV9mZW1hbGUsXG5cdFx0XHRiYWNrU2hpbnlGZW1hbGU6IHBva2Vtb25EYXRhLnNwcml0ZXMuYmFja19zaGlueV9mZW1hbGUsXG5cdFx0fSxcblx0XHRzdGF0czogcG9rZW1vbkRhdGEuc3RhdHMubWFwKChzdGF0KSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpZDogc3RhdC5zdGF0LnVybC5zcGxpdCgnLycpWzZdLFxuXHRcdFx0XHRuYW1lOiBzdGF0LnN0YXQubmFtZSxcblx0XHRcdFx0ZWZmb3J0OiBzdGF0LmVmZm9ydCxcblx0XHRcdFx0YmFzZVN0YXQ6IHN0YXQuYmFzZV9zdGF0LFxuXHRcdFx0fTtcblx0XHR9KSxcblx0fTtcblx0cmV0dXJuIHBva2Vtb247XG59IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUywgU2NyZWVuIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuaW1wb3J0IHsgZGVidWdMb2csIGNhbWVsQ2FzZVRvU3BhY2VkLCBrZWJhYkNhc2VUb1NwYWNlZCwgZ2VuZXJhdGVQb2tlbW9uT2JqZWN0IH0gZnJvbSAnQHNyYy9hcHAvdXRpbHMvYXBwLXV0aWxzL2FwcC11dGlscy5jb21tb24nO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBVdGlscyB7XG5cblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRkZWJ1Z0xvZyA9IGRlYnVnTG9nO1xuXHRjYW1lbENhc2VUb1NwYWNlZCA9IGNhbWVsQ2FzZVRvU3BhY2VkO1xuXHRrZWJhYkNhc2VUb1NwYWNlZCA9IGtlYmFiQ2FzZVRvU3BhY2VkO1xuXG5cdGdlbmVyYXRlUG9rZW1vbk9iamVjdCA9IGdlbmVyYXRlUG9rZW1vbk9iamVjdDtcblxuXHRwbGF0Zm9ybVZhbCA9ICh2YWxzOiB7IHdlYj86IGFueTsgbW9iaWxlOiBhbnk7IGFuZHJvaWQ6IGFueTsgaW9zOiBhbnk7IH0sIHZlcmJvc2U6IGJvb2xlYW4gPSBmYWxzZSkgPT4ge1xuXHRcdHJldHVybiB2YWxzW3RoaXMucGxhdGZvcm0odmVyYm9zZSldO1xuXHR9XG5cblx0cGxhdGZvcm0gPSAodmVyYm9zZTogYm9vbGVhbiA9IGZhbHNlKTogJ3dlYicgfCAnbW9iaWxlJyB8ICdhbmRyb2lkJyB8ICdpb3MnID0+IHtcblx0XHRpZiAodmVyYm9zZSkge1xuXHRcdFx0aWYgKGlzQW5kcm9pZCkge1xuXHRcdFx0XHRyZXR1cm4gJ2FuZHJvaWQnO1xuXHRcdFx0fSBlbHNlIGlmIChpc0lPUykge1xuXHRcdFx0XHRyZXR1cm4gJ2lvcyc7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAnbW9iaWxlJztcblx0fVxuXG5cdHNjcmVlbldpZHRoID0gKCk6IG51bWJlciA9PiB7XG5cdFx0cmV0dXJuIFNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcztcblx0fVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1toaWRlQWN0aW9uQmFyXSdcbn0pXG5leHBvcnQgY2xhc3MgSGlkZUFjdGlvbkJhckRpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKHBhZ2U6IFBhZ2UpIHtcblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG5cdH1cbn0iLCJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBFbGVtZW50UmVmLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MsIHBsYXRmb3JtTmFtZXMgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdQbGF0Zm9ybVZpZXcnLFxuXHR0ZW1wbGF0ZTogYDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ2aWV3VGVtcGxhdGUoKVwiPjwvbmctdGVtcGxhdGU+YCxcbn0pXG5leHBvcnQgY2xhc3MgUGxhdGZvcm1WaWV3Q29tcG9uZW50IHtcblx0QElucHV0KCd2ZXJib3NlJykgdmVyYm9zZTogYm9vbGVhbiA9IGZhbHNlO1xuXHRAQ29udGVudENoaWxkKCdtb2JpbGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBtb2JpbGU6IFRlbXBsYXRlUmVmPEVsZW1lbnRSZWY+O1xuXHRAQ29udGVudENoaWxkKCdhbmRyb2lkJywgeyBzdGF0aWM6IHRydWUgfSkgYW5kcm9pZDogVGVtcGxhdGVSZWY8RWxlbWVudFJlZj47XG5cdEBDb250ZW50Q2hpbGQoJ2lvcycsIHsgc3RhdGljOiB0cnVlIH0pIGlvczogVGVtcGxhdGVSZWY8RWxlbWVudFJlZj47XG5cblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHR2aWV3VGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8RWxlbWVudFJlZj4ge1xuXHRcdGlmICh0aGlzLnZlcmJvc2UgPT0gZmFsc2UpIHtcblx0XHRcdHJldHVybiB0aGlzLm1vYmlsZTtcblx0XHR9IGVsc2UgaWYgKGlzQW5kcm9pZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuYW5kcm9pZDtcblx0XHR9IGVsc2UgaWYgKGlzSU9TKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5pb3M7XG5cdFx0fVxuXHR9XG59IiwiaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljLCBBcHBPcHRpb25zIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9hbmd1bGFyJztcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnQHNyYy9hcHAvYXBwLm1vZHVsZSc7XG5cbi8vIE9wdGlvbmFsIC0gYXR0YWNoIHRvIGxpdmVzeW5jIGhvb2tzIGFuZCBwZXJmcm9tIG5hdmlnYXRpb25cbi8vIGltcG9ydCAnLi9saXZlc3luYy1uYXZpZ2F0aW9uLnRucyc7XG5cbmxldCBvcHRpb25zOiBBcHBPcHRpb25zID0ge307XG5cbi8vIGlmIChtb2R1bGVbJ2hvdCddKSB7XG4vLyBcdG9wdGlvbnMuaG1yT3B0aW9ucyA9IHtcbi8vIFx0XHRtb2R1bGVUeXBlRmFjdG9yeTogKCkgPT4gQXBwTW9kdWxlLFxuLy8gXHRcdGxpdmVzeW5jQ2FsbGJhY2s6IChwbGF0Zm9ybVJlYm9vdCkgPT4ge1xuLy8gXHRcdFx0c2V0VGltZW91dChwbGF0Zm9ybVJlYm9vdCwgMCk7XG4vLyBcdFx0fSxcbi8vIFx0fTtcblxuLy8gXHQvLyBQYXRoIHRvIHlvdXIgYXBwIG1vZHVsZS5cbi8vIFx0Ly8gWW91IG1pZ2h0IGhhdmUgdG8gY2hhbmdlIGl0IGlmIHlvdXIgbW9kdWxlIGlzIGluIGEgZGlmZmVyZW50IHBsYWNlLlxuLy8gXHRtb2R1bGVbJ2hvdCddLmFjY2VwdChbJy4vYXBwL2FwcC5tb2R1bGUnXSwgKCkgPT4ge1xuLy8gXHRcdGdsb2JhbFsnaG1yUmVmcmVzaCddKCk7XG4vLyBcdH0pO1xuLy8gfVxuXG4vLyBEb24ndCBmb3JnZXQgdG8gcGFzcyB0aGUgb3B0aW9ucyB3aGVuIGNyZWF0aW5nIHRoZSBwbGF0Zm9ybVxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKG9wdGlvbnMpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIn4vcGFja2FnZS5qc29uXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=