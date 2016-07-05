System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Assignment;
    return {
        setters:[],
        execute: function() {
            Assignment = (function () {
                function Assignment(id, name, grade) {
                    this.id = id;
                    this.name = name;
                    this.grade = grade;
                }
                return Assignment;
            }());
            exports_1("Assignment", Assignment);
        }
    }
});

//# sourceMappingURL=Assignment.js.map
