System.register(['angular2/core', './Course', './GradeSection', './Assignment'], function(exports_1, context_1) {
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
    var core_1, Course_1, GradeSection_1, Assignment_1;
    var GradesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Course_1_1) {
                Course_1 = Course_1_1;
            },
            function (GradeSection_1_1) {
                GradeSection_1 = GradeSection_1_1;
            },
            function (Assignment_1_1) {
                Assignment_1 = Assignment_1_1;
            }],
        execute: function() {
            GradesService = (function () {
                function GradesService() {
                    this.course = new Course_1.Course(0, "Algebra", this.gradeSections);
                    this.gradeSections = [
                        new GradeSection_1.GradeSection(0, "my Homeworks", 25, [new Assignment_1.Assignment(0, "hw1", 80),
                            new Assignment_1.Assignment(1, "hw2", 100),
                            new Assignment_1.Assignment(2, "hw3", 100),
                            new Assignment_1.Assignment(3, "hw4", 100)
                        ]),
                        new GradeSection_1.GradeSection(1, "my Labs", 10, [new Assignment_1.Assignment(0, "lab1", 80),
                            new Assignment_1.Assignment(1, "lab2", 100),
                            new Assignment_1.Assignment(2, "lab3", 100),
                            new Assignment_1.Assignment(3, "lab4", 100)
                        ]),
                        new GradeSection_1.GradeSection(3, "my Quizzes", 45, [new Assignment_1.Assignment(0, "quiz1", 80),
                            new Assignment_1.Assignment(1, "quiz2", 100),
                            new Assignment_1.Assignment(2, "quiz3", 100),
                            new Assignment_1.Assignment(3, "quiz4", 100)
                        ])
                    ];
                }
                GradesService.prototype.get = function (props) {
                    if (props === void 0) { props = null; }
                    if (props === null)
                        return this.gradeSections;
                    // return this.gradeSections.map((gradeSection)=> {
                    // 	gradeSection = [];
                    // 	props.forEach((prop)=>{
                    // 		info = {};
                    // 		if(gradeSection.hasProperty(prop))
                    // 			info
                    // 	})
                    // });
                };
                GradesService.prototype.changeGradeSectionName = function (id, name) {
                    this.gradeSections[id].name = name;
                };
                GradesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], GradesService);
                return GradesService;
            }());
            exports_1("GradesService", GradesService);
        }
    }
});

//# sourceMappingURL=grades.service.js.map
