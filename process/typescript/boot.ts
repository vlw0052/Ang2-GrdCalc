import {bootstrap} from 'angular2/platform/browser';
import {GrdCalcComponent} from './app.component';
import {GradesService} from './main/grades.service';


bootstrap(GrdCalcComponent, [

	GradesService
	]);
