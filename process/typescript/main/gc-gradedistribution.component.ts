import {Component} from 'angular2/core';
import {GradesService} from './grades.service';
import {GradeSectionNameComponent} from './gradesection/gc-gradesection.name.component';
import {GradeSectionPercBComponent} from './gradesection/gc-gradesection.percb.component';
import {GradeSectionPercTComponent} from './gradesection/gc-gradesection.perct.component';
import {GradeSectionPercComponent} from './gradesection/gc-gradesection.perc.component';


@Component({
	selector: 'gc-gradedistribution',
	templateUrl: 'partials/main/gc-gradedistribution.html',
	directives: [
		GradeSectionNameComponent, 
		GradeSectionPercComponent,
		GradeSectionPercTComponent,
		GradeSectionPercBComponent]
})

export class GCGradeDistributionComponent {

	gradeSections;
	constructor(private gradesService:GradesService){
	
		this.gradeSections = gradesService.get();
		console.log(gradesService);
	}

	changeName(e, id){
		let name = e.target.value;
		this.gradesService.changeGradeSectionName(id, name);
		console.log(e.target.value, id);
	}

	changePerc(value){
		console.log(value);
	}
}


