import React from "react";
import { CourseCard } from "../../../../Common/CourseCard/CourseCard";
import { CustomButton } from "../../../../Common/CustomElements/CustomButton";



const  CourseSection = () => {
  return (
    <div className=" w-[1280px] h-[587px] mt-[80px] mx-auto ">
     <div className="course-section-header text-3xl flex justify-center relative item-center mt-[29px] ">
       <h2 className=" text-4xl text-balck  dark:text-white  font-bold mb-10 ">دوره های آموزشی
         <img src="./Vector 20.svg" alt="" className='mt-5' /> 
       </h2> 
       
     </div>   
     <div className="course-section-body "> <CourseCard /></div>
     <div className="course-section-footer text-white flex justify-center mt-10"><CustomButton message="مشاهده همه " /></div>   
    </div>
  );
};

export { CourseSection };