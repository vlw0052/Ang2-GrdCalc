System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var GRADESECTIONS;
    return {
        setters:[],
        execute: function() {
            exports_1("GRADESECTIONS", GRADESECTIONS = [
                {
                    name: "my Homeworks",
                    perc: "25",
                    assignments: [
                        { name: "hw1", grade: "80" },
                        { name: "hw2", grade: "100" },
                        { name: "hw3", grade: "100" },
                        { name: "hw4", grade: "100" }
                    ]
                },
                {
                    name: "my Labs",
                    perc: "10",
                    assignments: [
                        { name: "lab1", grade: "80" },
                        { name: "lab2", grade: "100" },
                        { name: "lab3", grade: "100" },
                        { name: "lab4", grade: "100" }
                    ]
                },
                {
                    name: "my Quizzes",
                    perc: "45",
                    assignments: [
                        { name: "quiz1", grade: "80" },
                        { name: "quiz2", grade: "100" },
                        { name: "quiz3", grade: "100" },
                        { name: "quiz4", grade: "100" }
                    ]
                }
            ]);
        }
    }
});

//# sourceMappingURL=grades.js.map
