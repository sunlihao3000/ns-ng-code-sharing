webpackHotUpdate("bundle",{

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


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUU7QUFFUDs7Ozs7Ozs7OztJQ0Q3RCxnRkFFQztJQURBLHVWQUF5QztJQUN6QyxzRUFDeUI7SUFDekIsdUVBQTBJO0lBQzFJLHNFQUFnSDtJQUNoSCx1RUFDNkI7SUFDOUIsNERBQWE7OztJQVJ3Qyx1RkFBdUI7SUFFeEMsMERBQThCO0lBQTlCLDhHQUE4QjtJQUExRCwyRkFBMkI7SUFFMUIsMERBQTJCO0lBQTNCLDJGQUEyQjtJQUM1QiwwREFBMkI7SUFBM0IsMkZBQTJCO0lBQzFCLDBEQUEyQjtJQUEzQiwyRkFBMkI7O0FESHJDO0lBVUMsa0JBQW9CLEtBQWUsRUFBVSxHQUFzQjtRQUEvQyxVQUFLLEdBQUwsS0FBSyxDQUFVO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFKbkUsVUFBSyxHQUFHLHNCQUFzQixDQUFDO0lBSXdDLENBQUM7SUFFeEUsMkJBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGtDQUFlLEdBQWYsVUFBZ0IsTUFBTTtRQUNyQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxFQUFFO1lBQ3JFLElBQUksQ0FBQyxjQUFjLEdBQUcsMEJBQTBCLENBQUM7WUFDakQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNOLElBQUksQ0FBQyxjQUFjLEdBQUcsa0JBQWtCLENBQUM7WUFDekMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDN0M7SUFDRixDQUFDO29FQW5CVyxRQUFROzRGQUFSLFFBQVE7WUNUckIsK0VBQ0M7WUFBQSxtSEFFQztZQU9GLDREQUFZOztZQVRDLDBEQUFzQjtZQUF0QixvRkFBc0I7O21CRERuQztDQTZCQztBQXBCb0I7NkZBQVIsUUFBUTtjQUxwQix1REFBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixXQUFXLEVBQUUsa0JBQWtCO2dCQUMvQixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzthQUM5QiIsImZpbGUiOiJidW5kbGUuYjRmODc3MTA2MDk4NDY5OGI4OTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBcHBVdGlscyB9IGZyb20gJ0BzcmMvYXBwL3V0aWxzL2FwcC11dGlscy9hcHAtdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdwYWdlLWhvbWUnLFxuXHR0ZW1wbGF0ZVVybDogJy4vaG9tZS5wYWdlLmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9ob21lLnBhZ2UuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcblx0dGl0bGUgPSAnbmF0aXZlc2NyaXB0LXBva2VkZXgnO1xuXHRncmlkTGF5b3V0Um93cyE6IHN0cmluZztcblx0Z3JpZEVsZW1lbnRzUm93cyE6IEFycmF5PHN0cmluZz47XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSB1dGlsczogQXBwVXRpbHMsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5vbkxheW91dENoYW5nZWQobnVsbCk7XG5cdH1cblxuXHRvbkxheW91dENoYW5nZWQoJGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMudXRpbHMucGxhdGZvcm0oKSA9PSAnd2ViJyAmJiB0aGlzLnV0aWxzLnNjcmVlbldpZHRoKCkgPiA2NDApIHtcblx0XHRcdHRoaXMuZ3JpZExheW91dFJvd3MgPSAnMTAwIGF1dG8gYXV0byAqIGF1dG8gMTAwJztcblx0XHRcdHRoaXMuZ3JpZEVsZW1lbnRzUm93cyA9IFsnMScsICcyJywgJzMnLCAnNCddO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmdyaWRMYXlvdXRSb3dzID0gJ2F1dG8gYXV0byAqIGF1dG8nO1xuXHRcdFx0dGhpcy5ncmlkRWxlbWVudHNSb3dzID0gWycwJywgJzEnLCAnMicsICczJ107XG5cdFx0fVxuXHR9XG59XG4iLCI8Q29udGFpbmVyIGNsYXNzPVwiZmxleFwiIGhpZGVBY3Rpb25CYXI+XG5cdDxHcmlkTGF5b3V0ICpuZ0lmPVwiZ3JpZExheW91dFJvd3NcIiBjbGFzcz1cInAtMjAgcHktMlwiIFtyb3dzXT1cImdyaWRMYXlvdXRSb3dzXCIgY29sdW1ucz1cIipcIlxuXHRcdChsYXlvdXRDaGFuZ2VkKT1cIm9uTGF5b3V0Q2hhbmdlZCgkZXZlbnQpXCI+XG5cdFx0PExhYmVsIFtyb3ddPVwiZ3JpZEVsZW1lbnRzUm93c1swXVwiIHRleHQ9XCJXZWxjb21lIHRvIHt7IHRpdGxlIH19IVwiIGNsYXNzPVwiaDEgdGV4dC1jZW50ZXJcIlxuXHRcdFx0dGV4dFdyYXA9XCJ0cnVlXCI+PC9MYWJlbD5cblx0XHQ8QnV0dG9uIFtyb3ddPVwiZ3JpZEVsZW1lbnRzUm93c1sxXVwiIGNsYXNzPVwiYnRuXCIgW25zUm91dGVyTGlua109XCJbJy8nLCAnYXBwJywgJ2Jvb2snXVwiIGNsZWFySGlzdG9yeT1cInRydWVcIiB0ZXh0PVwiZ28gdG8gYm9vayBwYWdlXCI+PC9CdXR0b24+XG5cdFx0PEltYWdlIFtyb3ddPVwiZ3JpZEVsZW1lbnRzUm93c1syXVwiIHNyYz1cIn4vYXNzZXRzL3Bva2VhcGlfbG9nby5wbmdcIiBsb2FkTW9kZT1cImFzeW5jXCIgc3RyZXRjaD1cImFzcGVjdEZpdFwiPjwvSW1hZ2U+XG5cdFx0PEJ1dHRvbiBbcm93XT1cImdyaWRFbGVtZW50c1Jvd3NbM11cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIiBbbnNSb3V0ZXJMaW5rXT1cIlsnLycsICdhcHAnLCAndG9kYXknXVwiIGNsZWFySGlzdG9yeT1cInRydWVcIlxuXHRcdFx0dGV4dD1cIkdvIHRvIEhvbWUhXCI+PC9CdXR0b24+XG5cdDwvR3JpZExheW91dD5cbjwvQ29udGFpbmVyPiJdLCJzb3VyY2VSb290IjoiIn0=