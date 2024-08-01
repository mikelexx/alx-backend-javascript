/// <reference path="./Subject.ts" />
/// <reference path="./Teacher.ts" />
namespace Subjects{
	export interface Teacher {
		experienceTeachingC?: number;
	}
	export class Cpp extends Subjects.Subject{
		getRequirements(){
			return `Here is the list of requirements for Cpp`;
		}
		getAvailableTeacher(){
			if(this.teacher.experienceTeachingC){
				return `Available Teacher: ${this.teacher.firstName}`
			}else{
				return `No available teacher`;
			}
		}

	}

}

