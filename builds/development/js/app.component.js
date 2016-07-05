System.register(['angular2/core', './search.pipe', './gc-header', './gc-footer', './gc-signup', './grade-calculator'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, search_pipe_1, gc_header_1, gc_footer_1, gc_signup_1, grade_calculator_1;
    var GrdCalcComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (search_pipe_1_1) {
                search_pipe_1 = search_pipe_1_1;
            },
            function (gc_header_1_1) {
                gc_header_1 = gc_header_1_1;
            },
            function (gc_footer_1_1) {
                gc_footer_1 = gc_footer_1_1;
            },
            function (gc_signup_1_1) {
                gc_signup_1 = gc_signup_1_1;
            },
            function (grade_calculator_1_1) {
                grade_calculator_1 = grade_calculator_1_1;
            }],
        execute: function() {
            GrdCalcComponent = (function () {
                function GrdCalcComponent() {
                }
                GrdCalcComponent = __decorate([
                    core_1.Component({
                        selector: 'Grd-Calc',
                        templateUrl: 'partials/grd-calc.html',
                        directives: [gc_header_1.GCHeader, gc_footer_1.GCFooter, gc_signup_1.UserButtons, grade_calculator_1.GradeCalculator],
                        pipes: [search_pipe_1.SearchPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], GrdCalcComponent);
                return GrdCalcComponent;
            }());
            exports_1("GrdCalcComponent", GrdCalcComponent);
        }
    }
});

//# sourceMappingURL=app.component.js.map
