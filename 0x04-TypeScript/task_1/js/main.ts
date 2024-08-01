interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean
	yearsOfExperience?: number; 
	location: string;
	[propName: string]: any;
}

interface Directors extends Teacher{

	numberOfReports: number;
}
interface printTeacherFunction {
	(firstName:any, lastName: any): any;
}
const printTeacher: printTeacherFunction  = (firstName, lastName)=> {
	return `${firstName[0]}.${lastName}`;
}
interface StudentsInterface{
	firstName:string;
	lastName:string;
	workOnHomework(): string;
	displayName (): string;
}
interface StudentsConstructor{
	new (firstName:string, lastName:string): StudentsInterface;

}
const StudentClass = class StudentClass implements StudentsInterface{
	firstName: string;
	lastName: string;
	constructor(firstName: string, lastName: string){
		this.firstName = firstName;
		this.lastName = lastName;
	} 
	workOnHomework(){
		return 'Currently working'
	}
	displayName(){
		return this.firstName;
	}
}

