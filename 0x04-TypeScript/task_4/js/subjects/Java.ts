/// <reference path="./Subject.ts" />
/// <reference path="./Teacher.ts" />
namespace Subjects{
	export interface Teacher{
		experienceTeachingJava?: number;
	}
	export class Java extends Subjects.Subject{
		getRequirements(){
			return `Here is the list of requirements for Java`;
		}
		getAvailableTeacher(){
			if(this.teacher.experienceTeachingJava){
				return `Available Teacher: ${this.teacher.firstName}`
			}else{
				return `No available teacher`;
			}
		}
	}
}
