import {Component, Input} from 'angular2/core';
import {GradesService} from '../grades.service';


@Component({
	selector: 'grade-section-percb',
	templateUrl: 'partials/main/gradesection/gc-gradesectionpercb.html',
  directives: [],
})

export class GradeSectionPercBComponent {
	@Input() perc;
	@Input() id;
	constructor(private gradeService:GradesService){

	}

	changePerc(e){
		let perc = e.target.value;

	}

}
