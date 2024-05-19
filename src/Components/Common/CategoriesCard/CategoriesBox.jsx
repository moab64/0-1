import React from "react";


const CategoriesBox = ({ imgSrc, title, desc }) => {
  return (
    <div >
      <div className="h-[328px] w-[328px] mb-5 dark:border-black bg-white dark:bg-black flex flex-col justify-items-center  shadow-2xl  rounded-[35px] cursor-pointer p-2 ">
        <div className="w-100 flex justify-center h-1/3 mt-5 ">
          <img src={imgSrc} alt="#" />
        </div>

        <div className=" w-100 mt-5 dark:text-white ">
          <div className="text-[21px] font-bold">{title}</div>
        </div>
        <div className=" w-100 mt-5 dark:text-white  ">
          {desc}
        </div>
      </div>
    </div>
  );
};

export { CategoriesBox };