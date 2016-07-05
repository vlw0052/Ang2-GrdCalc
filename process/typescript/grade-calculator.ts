import {Component} from 'angular2/core';
import {GCClassNameComponent} from './main/gc-classname.component';
import {GCToggleNavComponent} from './main/gc-toggleNav.component';
import {GCGradeDistributionComponent} from './main/gc-gradedistribution.component';
import {GCAssignmentsComponent} from './main/gc-assignments.component';
import {GCCalculationComponent} from './main/gc-calculation.component';
import {GCBottomNavComponent} from './main/gc-bottomnav.component';


@Component({
	selector: 'grade-calculator',
	templateUrl: 'partials/gradecalculator.html',
  directives: [
  				GCClassNameComponent,
				GCToggleNavComponent,
				GCGradeDistributionComponent,
				GCAssignmentsComponent,
				GCCalculationComponent,
     			GCBottomNavComponent
     		   ]
})

export class GradeCalculator {
	
}
