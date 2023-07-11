interface Course {
    courseName:string,
    policyId: number,
    studentsInCourse: number,
    lectures: Lecture[]
}
interface Lecture
{
    numberOfSignatures:number,
    students:Student[]
}

interface Student {
    studentId:number,
    signature: boolean
}




interface Policy{
    policyId:number,
    policyName:string,
    policyType:PolicyType 
    forms:Form[]
}
enum PolicyType{
    COURSE_POLICY=1,
}
interface Form{
    formType:FormType,
    validations:Validation[]
}
enum FormType{
    COURSE_ATTENDANCE_FORM=1
}
interface Validation {
    validationType:ValidationType,
    value:number
}
enum ValidationType{
    TOTAL_ATTENDANCE_PER_LECTURE=1,
    MAX_MISSING_SIGNATURES_FOR_STUDENT=2
}