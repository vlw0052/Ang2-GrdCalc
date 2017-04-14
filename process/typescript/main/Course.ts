import {GradeSection} from './GradeSection';

export class Course{
	constructor(
	public id:number,
	public name:string,
	public gradeSections:GradeSection[],
	public green:String = "Green"
	){}
}