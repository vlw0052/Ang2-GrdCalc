import {Component} from 'angular2/core';
import {SearchPipe} from './search.pipe';
import {GCHeader} from './gc-header';
import {GCFooter} from './gc-footer';
import {UserButtons} from './gc-signup';
import {GradeCalculator} from './grade-calculator';


@Component({
	selector: 'Grd-Calc',
	templateUrl: 'partials/grd-calc.html',
  directives: [GCHeader, GCFooter, UserButtons, GradeCalculator],
  pipes:[SearchPipe]
  
})

export class GrdCalcComponent {

	constructor(){

	}
	
}


