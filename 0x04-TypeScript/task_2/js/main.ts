interface DirectoryInterface{
	workFromHome(): string;
	getCoffeBreak(): string;
	workDirectoryTasks(): string;
};
interface TeacherInterface{
	workFromHome(): string;
	getCoffeBreak(): string;
	workTeacherTasks(): string;
}
class Director implements DirectoryInterface{
	workFromHome(): string {
		return 'Working from home';
	}
	getCoffeBreak(): string{
		return 'Getting a coffee break';
	}
	workDirectoryTasks(): string {
		return 'Getting to directory tasks';
	}
	getToWork(): string{
		return 'Getting a coffee break';
	}
}
class Teacher implements TeacherInterface{
	workFromHome(): string {
		return 'Cannot work from home';
	}
	getCoffeBreak(): string {
		return 'Cannot have a break';
	}
	workTeacherTasks(): string {
		return 'Getting to work';
	}
}
function createEmployee (salary: number| string): Teacher | Director {
	if (typeof salary === 'number' && salary < 500){
		return new Teacher();
	}else {
		return new Director();
	}
}
function isDirector(employee: any): employee is DirectoryInterface{
		const test = employee as DirectoryInterface;
	return (test.getCoffeBreak !== undefined 
		&& test.workDirectoryTasks !== undefined
		&& test.workFromHome !== undefined);
}
function executeWork(employee: Director | Teacher){
	if (isDirector(employee)){
		return employee.workDirectoryTasks();
	}
	else{
			return employee.workTeacherTasks();
	}
}
type Subjects = "Math" | "History";
function teachClass(todayClass: Subjects): string{
	if(todayClass === 'Math'){
		return 'Teaching Math';
	}
	else{
		return 'Teaching History';
	}
}
console.log(teachClass('Math'));
console.log(teachClass('History'));


