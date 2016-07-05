import {Component, Input} from 'angular2/core';
import {GradesService} from '../grades.service';


@Component({
	selector: 'grade-section-perc',
	templateUrl: 'partials/main/gradesection/gc-gradesectionperc.html',
  directives: [],
})

export class GradeSectionPercComponent {
	@Input() perc;
	@Input() id;
	constructor(private gradeService:GradesService){
		
	}

	
}
