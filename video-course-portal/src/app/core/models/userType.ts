export interface courseType{
    course_id:string,
    course_title:string,
    course_description:string,
    course_duration:string,
    course_date:string,
    course_authors:string
}

export interface UserType{
    email:string,
    password:string,
    courses:any[];
}