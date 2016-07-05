import {Component, Input} from 'angular2/core';
import {GradesService} from '../grades.service';


@Component({
	selector: 'grade-section',
	templateUrl: 'partials/main/gradesection/gc-gradesection.html',
  directives: [],
})

export class GradeSectionComponent {
	@Input('gradeSection') section;
	constructor(){

	}	
}
