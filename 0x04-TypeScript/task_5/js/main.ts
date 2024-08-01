interface MajorCredits {
	credits: number;
	"Major": "Major";

}
interface MinorCredits {
	credits: number;
	"Minor": "Minor";

}
function sumMajorCredits(subject1: number, subject2: number): MajorCredits{
	
	const value: MajorCredits = {credits : subject1 + subject2,
	"Major": "Major" as 'Major'}
	return value;
}
function sumMinorCredits(subject1: number, subject2: number){
	const value: MinorCredits = {credits : subject1 + subject2,
	"Minor": "Minor" as "Minor"}
	return value;

}
