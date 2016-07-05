import {Component, Input} from 'angular2/core';
import {GradesService} from '../grades.service';


@Component({
	selector: 'grade-section-name',
	templateUrl: 'partials/main/gradesection/gc-gradesectionname.html',
  directives: [],
})

export class GradeSectionNameComponent {
	@Input() name;
	@Input() id;
	constructor(private gradeService:GradesService){

	}

	changeName(e){
		let name = e.target.name;
		this.gradeService.changeGradeSectionName(this.id, name);
	}
}
