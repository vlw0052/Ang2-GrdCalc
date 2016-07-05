System.register(['angular2/core', '../grades.service'], function(exports_1, context_1) {
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
    var core_1, grades_service_1;
    var GradeSectionPercBComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (grades_service_1_1) {
                grades_service_1 = grades_service_1_1;
            }],
        execute: function() {
            GradeSectionPercBComponent = (function () {
                function GradeSectionPercBComponent(gradeService) {
                    this.gradeService = gradeService;
                }
                GradeSectionPercBComponent.prototype.changePerc = function (e) {
                    var perc = e.target.value;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], GradeSectionPercBComponent.prototype, "perc", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], GradeSectionPercBComponent.prototype, "id", void 0);
                GradeSectionPercBComponent = __decorate([
                    core_1.Component({
                        selector: 'grade-section-percb',
                        templateUrl: 'partials/main/gradesection/gc-gradesectionpercb.html',
                        directives: [],
                    }), 
                    __metadata('design:paramtypes', [grades_service_1.GradesService])
                ], GradeSectionPercBComponent);
                return GradeSectionPercBComponent;
            }());
            exports_1("GradeSectionPercBComponent", GradeSectionPercBComponent);
        }
    }
});

//# sourceMappingURL=gc-gradesection.percb.component.js.map
