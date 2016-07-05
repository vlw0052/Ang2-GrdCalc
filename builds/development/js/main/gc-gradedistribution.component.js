System.register(['angular2/core', './grades.service', './gradesection/gc-gradesection.name.component', './gradesection/gc-gradesection.percb.component', './gradesection/gc-gradesection.perct.component', './gradesection/gc-gradesection.perc.component'], function(exports_1, context_1) {
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
    var core_1, grades_service_1, gc_gradesection_name_component_1, gc_gradesection_percb_component_1, gc_gradesection_perct_component_1, gc_gradesection_perc_component_1;
    var GCGradeDistributionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (grades_service_1_1) {
                grades_service_1 = grades_service_1_1;
            },
            function (gc_gradesection_name_component_1_1) {
                gc_gradesection_name_component_1 = gc_gradesection_name_component_1_1;
            },
            function (gc_gradesection_percb_component_1_1) {
                gc_gradesection_percb_component_1 = gc_gradesection_percb_component_1_1;
            },
            function (gc_gradesection_perct_component_1_1) {
                gc_gradesection_perct_component_1 = gc_gradesection_perct_component_1_1;
            },
            function (gc_gradesection_perc_component_1_1) {
                gc_gradesection_perc_component_1 = gc_gradesection_perc_component_1_1;
            }],
        execute: function() {
            GCGradeDistributionComponent = (function () {
                function GCGradeDistributionComponent(gradesService) {
                    this.gradesService = gradesService;
                    this.gradeSections = gradesService.get();
                    console.log(gradesService);
                }
                GCGradeDistributionComponent.prototype.changeName = function (e, id) {
                    var name = e.target.value;
                    this.gradesService.changeGradeSectionName(id, name);
                    console.log(e.target.value, id);
                };
                GCGradeDistributionComponent.prototype.changePerc = function (value) {
                    console.log(value);
                };
                GCGradeDistributionComponent = __decorate([
                    core_1.Component({
                        selector: 'gc-gradedistribution',
                        templateUrl: 'partials/main/gc-gradedistribution.html',
                        directives: [
                            gc_gradesection_name_component_1.GradeSectionNameComponent,
                            gc_gradesection_perc_component_1.GradeSectionPercComponent,
                            gc_gradesection_perct_component_1.GradeSectionPercTComponent,
                            gc_gradesection_percb_component_1.GradeSectionPercBComponent]
                    }), 
                    __metadata('design:paramtypes', [grades_service_1.GradesService])
                ], GCGradeDistributionComponent);
                return GCGradeDistributionComponent;
            }());
            exports_1("GCGradeDistributionComponent", GCGradeDistributionComponent);
        }
    }
});

//# sourceMappingURL=gc-gradedistribution.component.js.map
