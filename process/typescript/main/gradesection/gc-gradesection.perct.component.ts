import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {GradesService} from '../grades.service';


@Component({
	selector: 'grade-section-perct',
	templateUrl: 'partials/main/gradesection/gc-gradesectionperct.html',
  directives: [],
})

export class GradeSectionPercTComponent {
	@Input() perc;
	@Output('percentchange') value = new EventEmitter();
	constructor(private gradeService:GradesService){

	}

	changePerc(e){
		let perc = parseFloat(e.target.value);
		this.value.emit(perc);

	}

}
