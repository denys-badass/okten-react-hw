import {coursesAndDurationArray} from "../../data/arrays";
import {ICourse} from "../../models/course-interface";
import CourseComponent from "../course-component/CourseComponent.tsx";

const CoursesComponent = () => {
    return (
        <div className={'flex flex-col justify-center items-center gap-6 w-1/4 m-auto'}>
            {coursesAndDurationArray.map((item: ICourse, index: number) => <CourseComponent key={index} course={item} />)}
        </div>
    );
};

export default CoursesComponent;