import {Injectable} from 'angular2/core';

import {Course} from './Course';
import {GradeSection} from './GradeSection';
import {Assignment} from './Assignment';

@Injectable()
export class GradesService {
	
	constructor(){

	}
	
	get(props = null){
		if(props === null)
			return this.gradeSections;
		// return this.gradeSections.map((gradeSection)=> {
		// 	gradeSection = [];
		// 	props.forEach((prop)=>{
		// 		info = {};
		// 		if(gradeSection.hasProperty(prop))
		// 			info
		// 	})
		// });

	}

	changeGradeSectionName(id, name){
		this.gradeSections[id].name = name; 
	}

	course = new Course(0, "Algebra", this.gradeSections);

	gradeSections = 
	[
	new GradeSection(0,"my Homeworks",25,
		[	 new Assignment(0, "hw1", 80),
			 new Assignment(1, "hw2", 100),
			new Assignment(2, "hw3", 100),
			new Assignment(3, "hw4", 100)
		])
	,
	new GradeSection(1,"my Labs",10,
		[	 new Assignment(0, "lab1",80),
			 new Assignment(1, "lab2",100),
			new Assignment(2, "lab3",100),
			new Assignment(3, "lab4",100)
		])
	,
	new GradeSection(3,"my Quizzes",45,
		[	 new Assignment(0, "quiz1",80),
			 new Assignment(1, "quiz2",100),
			new Assignment(2, "quiz3",100),
			new Assignment(3, "quiz4",100)
		])

	];


}
