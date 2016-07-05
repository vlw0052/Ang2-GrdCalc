import {Assignment} from './Assignment';

export class GradeSection{
	constructor(
	public id:number,
	public name:string,
	public perc:number,
	public assignments:Assignment[]

	){}
}