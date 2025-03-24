import {FC} from 'react';
import {ICourseModel} from "../../models/ICourseModel.ts";
import ModulesComponent from "../modules-component/ModulesComponent.tsx";

type CoursePropsType = {
    course: ICourseModel
}

const CourseComponent: FC<CoursePropsType> = ({course}) => {
    return (
        <div
            className='flex flex-col gap-2 rounded-2xl p-5 hover:shadow-2xl hover:scale-110 transition-all duration-500 bg-emerald-500 text-slate-800'>
            <h3 className='text-5xl'>{course.title}</h3>
            <p className='self-end italic'>Duration: {course.monthDuration} months ({course.hourDuration} hours)</p>
            <ModulesComponent modules={course.modules}/>
        </div>
    );
};

export default CourseComponent;