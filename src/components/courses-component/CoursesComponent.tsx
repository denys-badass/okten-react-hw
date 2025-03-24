import {coursesArray} from "../../data/arrays.ts";
import {ICourseModel} from "../../models/ICourseModel.ts";
import CourseComponent from "../course-component/CourseComponent.tsx";

const CoursesComponent = () => {
    return (
        <div className='grid grid-cols-2 gap-10'>
            {
                coursesArray.map((item: ICourseModel, index: number) => <CourseComponent key={index} course={item}/>)
            }
        </div>
    );
};

export default CoursesComponent;