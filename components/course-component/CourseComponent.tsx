import { FC } from 'react';
import {ICourse} from "../../models/course-interface";

type CoursePropsType = {
    course: ICourse
}

const CourseComponent: FC<CoursePropsType> = ({course}: CoursePropsType) => {
    return (
        <div className={'bg-emerald-500 text-slate-600 p-10 w-1/1 flex flex-col gap-2 items-center rounded-md shadow-md'}>
            <h2 className={'font-normal text-4xl'}>{course.title}</h2>
            <p className={'self-end'}>Duration: {course.monthDuration} months</p>
        </div>
    );
};

export default CourseComponent;