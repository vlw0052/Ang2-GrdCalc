import {Component} from 'angular2/core';
import {GradeSectionComponent} from './gradesection/gc-gradesection.component';

import {GradesService} from './grades.service';


@Component({
	selector: 'gc-assignments',
	templateUrl: 'partials/main/gc-assignments.html',
  directives: [GradeSectionComponent],
})

export class GCAssignmentsComponent {

	gradeSections;
	constructor(private gradesService: GradesService){
		this.gradeSections = this.gradesService.get();
	}

}
