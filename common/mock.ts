import { Course, FormType, Policy, PolicyType, ValidationType } from "./model";

export const policiesMock: Policy[] = [
    {
        policyId: 1,
        policyName: "mock 1",
        policyType: PolicyType.COURSE_POLICY,
        forms: [{
            formType: FormType.COURSE_ATTENDANCE_FORM,
            validations: [
                {
                    validationType: ValidationType.MAX_MISSING_SIGNATURES_FOR_STUDENT,
                    value: 20,
                },
                {
                    validationType: ValidationType.TOTAL_ATTENDANCE_PER_LECTURE,
                    value: 70
                }]
        }]
    }
];

export const courseMock: Course[] = [
    {
        courseName: "mocroservices",
        policyId: 1,
        studentsInCourse: 50,
        lectures: [
            
        ]
    }
]