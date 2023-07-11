export interface Course {
    courseName: string,
    policyId: number,
    studentsInCourse: number,
    lectures: Lecture[]
}

export interface Lecture {
    numberOfSignatures: number,
    students: Student[]
}

export interface Student {
    studentId: number,
    signature: boolean
}

export interface Policy {
    policyId: number,
    policyName: string,
    policyType: PolicyType
    forms: Form[]
}

export enum PolicyType {
    COURSE_POLICY = 1,
}

export interface Form {
    formType: FormType,
    validations: Validation[]
}

export enum FormType {
    COURSE_ATTENDANCE_FORM = 1
}

export interface Validation {
    validationType: ValidationType,
    value: number
}

export enum ValidationType {
    TOTAL_ATTENDANCE_PER_LECTURE = 1,
    MAX_MISSING_SIGNATURES_FOR_STUDENT = 2
}