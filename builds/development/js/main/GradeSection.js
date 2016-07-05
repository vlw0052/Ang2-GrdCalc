System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var GradeSection;
    return {
        setters:[],
        execute: function() {
            GradeSection = (function () {
                function GradeSection(id, name, perc, assignments) {
                    this.id = id;
                    this.name = name;
                    this.perc = perc;
                    this.assignments = assignments;
                }
                return GradeSection;
            }());
            exports_1("GradeSection", GradeSection);
        }
    }
});

//# sourceMappingURL=GradeSection.js.map
