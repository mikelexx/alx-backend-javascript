/// <reference path="./Subject.ts" />
/// <reference path="./Teacher.ts" />
namespace Subjects{
	export interface Teacher{
		experienceTeachingReact?: number;
	}
	export class React extends Subjects.Subject{
		getRequirements(){
			return `Here is the list of requirements for React`;
		}
		getAvailableTeacher(){
			if(this.teacher.experienceTeachingReact){
				return `Available Teacher: ${this.teacher.firstName}`
			}else{
				return `No available teacher`;
			}
		}
	}
}
